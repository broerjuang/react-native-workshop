// @flow

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, WebView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import fetchJSON from '../../../global/helpers/fetchJSON';
import Icon from '../../../global/core-ui/Icon';
import RowWith3Column from '../../../global/core-ui/RowWith3Column';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import {hybrid as GithubStyle} from 'react-syntax-highlighter/styles/hljs';
import {Buffer} from 'buffer';

type Props = {
  navigation: *;
};
type State = {
  fullName: string;
  fileList: Object | Array<Object>;
  path: string;
  language: string;
};

class fileList extends Component<Props, State> {
  state = {
    fullName: '',
    fileList: [],
    path: '',
    language: '',
  };
  static navigationOptions = (options: *) => ({
    headerLeft: (
      <View style={{paddingLeft: 10}}>
        <TouchableOpacity
          onPress={() => {
            options.navigation.goBack(null);
          }}
        >
          <Icon
            name={'arrow-back'}
            size={30}
            color={'black'}
            type={'MATERIAL_ICONS'}
          />
        </TouchableOpacity>
      </View>
    ),
    headerTitle: (
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>
        {options.navigation.state.params.name || 'Code'}
      </Text>
    ),
  });
  async componentDidMount() {
    let {fullName, path = '', language} = this.props.navigation.state.params;
    let url = `repos/${fullName}/contents/${path}`;
    console.log('path: ', url);
    let fileList = await fetchJSON(url, 'GET');
    console.log(fileList);
    this.setState({fullName, language, path, fileList});
  }
  render() {
    let {fileList} = this.state;
    if (Array.isArray(fileList)) {
      fileList = fileList.sort(
        (obj1, obj2) =>
          obj1.type > obj2.type ? 1 : obj1.type < obj2.type ? -1 : 0,
      );
    }
    let content: Array<ReactEl> | ReactEl = Array.isArray(fileList)
      ? fileList.map((file) => {
        return this._rowRender(file);
      })
      : this._fileRender(fileList);
    //console.log(JSON.stringify(content));

    console.log('Render');
    return (
      <SafeAreaView style={{backgroundColor: '#ddd', flex: 1}}>
        <ScrollView>{content}</ScrollView>
      </SafeAreaView>
    );
  }
  _rowRender = (data: {
    type: string;
    name: string;
    path: string;
    sha: string;
  }) => {
    console.log('Row Render', data);
    let {type, name, path, sha} = data;
    type = type === 'dir' ? 'file-directory' : 'file';
    let onClickPath = `${path}/`;
    return (
      <RowWith3Column
        left={
          <Icon type={'OCTICONS'} size={32} name={type} color={'#D3D3D3'} />
        }
        content={<Text style={{fontSize: 32}}>{name}</Text>}
        right={
          <Icon
            type={'MATERIAL_ICONS'}
            name="keyboard-arrow-right"
            size={32}
            color="#D3D3D3"
          />
        }
        isTouchable
        onPress={() => {
          this.props.navigation.navigate({
            routeName: 'RepositoryFileListScreen',
            params: {
              fullName: this.state.fullName,
              path: onClickPath,
              name,
              language: this.state.language,
            },
            key: onClickPath,
          });
        }}
        key={sha}
      />
    );
  };
  _fileRender = (fileList: {content: string}) => {
    if (!Array.isArray(fileList)) {
      let {content} = fileList;
      let codeString = Buffer.from(content, 'base64').toString('ascii');
      let highlightedCode = (
        <SyntaxHighlighter
          language={this.state.language}
          style={{
            ...GithubStyle,
            hljs: {
              background: 'white',
            },
          }}
          CodeTag={Text}
        >
          {codeString}
        </SyntaxHighlighter>
      );

      return highlightedCode;
    }
  };
}

export default fileList;
