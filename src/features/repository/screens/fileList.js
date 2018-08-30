// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import fetchJSON from '../../../global/helpers/fetchJSON';
import Icon from '../../../global/core-ui/Icon';
import RowWith3Column from '../../../global/core-ui/RowWith3Column';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import {hybrid as GithubStyle} from 'react-syntax-highlighter/styles/hljs';
import {Buffer} from 'buffer';
import {getLanguage} from 'lowlight';
import type {FetchFile} from '../types';

type NavProp = {
  path: string;
  fullName: string;
  name: string;
};

type Props = {
  navigation: NavigationProp<NavProp>;
};
type State = {
  fullName: string;
  fileList: Object | Array<Object>;
  path: string;
  imageWidth?: number;
  imageHeight?: number;
};

let {width}: {width: number} = Dimensions.get('window');

export class fileList extends Component<Props, State> {
  state = {
    fullName: '',
    fileList: [],
    path: '',
  };
  static navigationOptions = (options: *) => {
    return {
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
          {options.navigation.state.params['name'] || 'Code'}
        </Text>
      ),
    };
  };
  async componentDidMount() {
    let {fullName, path = ''} = this.props.navigation.state.params;
    let url = `repos/${fullName}/contents/${path}`;
    let fileList = await fetchJSON(url, 'GET');
    this.setState({fullName, path, fileList});
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
  _rowRender = (data: FetchFile) => {
    let {type, name, path, sha} = data;
    type = type === 'dir' ? 'file-directory' : 'file';
    let onClickPath = `${path}/`;
    return (
      <RowWith3Column
        left={
          <Icon type={'OCTICONS'} size={32} name={type} color={'#D3D3D3'} />
        }
        content={<Text style={{fontSize: 18}}>{name}</Text>}
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
            },
            key: onClickPath,
          });
        }}
        key={sha}
      />
    );
  };
  _fileRender = (fileList: FetchFile) => {
    let {name, download_url: uri, content} = fileList;
    let type = name.split('.').pop();
    let isKnownLanguage = this._isKnownLanguage(type);
    if (this._isImage(type)) {
      return this._imageRender(uri);
    } else if (isKnownLanguage) {
      return this._codeRender(content, type);
    } else {
      return this._unknownRender(content);
    }
  };

  _getImageSize = (uri: string) => {
    Image.getSize(uri, (imageWidth, imageHeight) => {
      if (imageWidth > width) {
        this.setState({
          imageWidth: width,
          imageHeight: 400,
        });
      } else {
        this.setState({imageWidth, imageHeight});
      }
    });
  };

  _imageRender = (uri: string) => {
    if (!this.state.imageWidth) {
      this._getImageSize(uri);
    }
    return (
      <Image
        style={{
          width: this.state.imageWidth ? this.state.imageWidth : width,
          height: this.state.imageHeight ? this.state.imageHeight : 400,
          resizeMode: 'contain',
        }}
        source={{
          uri,
        }}
      />
    );
  };

  _codeRender = (content: string, language: string) => {
    let codeString: string = Buffer.from(content, 'base64').toString('ascii');
    let highlightedCode = (
      <SyntaxHighlighter
        language={language}
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
  };

  _unknownRender = (content: string) => {
    let text: string = Buffer.from(content, 'base64').toString('ascii');

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <View style={{backgroundColor: 'white', width}}>
          <Text style={{fontSize: 10}}>{text}</Text>
        </View>
      </ScrollView>
    );
  };

  _isImage = (fileType: string) => {
    return (
      fileType === 'gif' ||
      fileType === 'png' ||
      fileType === 'jpg' ||
      fileType === 'jpeg' ||
      fileType === 'psd' ||
      fileType === 'svg'
    );
  };
  _isKnownLanguage(fileType: string): boolean {
    let isKnown: boolean = getLanguage(fileType);
    return isKnown && !this._isImage(fileType);
  }
}

export default fileList;
