// @flow
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Octicons, MaterialIcons} from '@expo/vector-icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {SafeAreaView} from 'react-navigation';
import type {NavigationScreenProp} from 'react-navigation';
import languageColor from '../../../global/constants/languageColor';
import Icon from '../../../global/core-ui/Icon';
import fetchJSON from '../../../global/helpers/fetchJSON';

import ParallaxButtons from '../../../global/core-ui/ParallaxButtons';
import DetailsGroup from '../../../global/core-ui/DetailsGroup';
import RowWith3Column from '../../../global/core-ui/RowWith3Column';
import Button from '../../../global/core-ui/Button';

type Props = {
  navigation: *;
};

type State = {
  forks: number;
  fork: boolean;
  language: string;
  name: string;
  description: string;
  watchers: number;
  stargazersCount: number;
  ownerProfilePicture: string;
  ownerName: string;
};

export class RepositoryDetailScreen extends Component<Props, State> {
  static navigationOptions = (options: *) => ({
    headerTransparent: true,
    headerLeft: (
      <View style={{paddingLeft: 10}}>
        <TouchableOpacity onPress={() => options.navigation.goBack()}>
          <Text style={{color: 'white'}}>Back</Text>
        </TouchableOpacity>
      </View>
    ),
  });
  state = {
    forks: 0,
    fork: false,
    language: '',
    name: '',
    description: '',
    watchers: 0,
    stargazersCount: 0,
    ownerProfilePicture: '',
    ownerName: '',
  };
  async componentDidMount() {
    let {fullName} = this.props.navigation.state.params;
    let url = `repos/${fullName}`;
    let repoData = await fetchJSON(url, 'GET');
    let {
      forks,
      fork,
      language,
      name,
      description,
      watchers,
      stargazers_count,
      owner,
    } = repoData;
    this.setState({
      forks,
      fork,
      language,
      name,
      description,
      watchers,
      stargazersCount: stargazers_count,
      ownerProfilePicture: owner.avatar_url,
      ownerName: owner.login,
    });
  }

  render() {
    let {language} = this.state;
    let repoType = this.state.fork ? 'repo-forked' : 'repo';
    let langColor = languageColor.hasOwnProperty(language)
      ? languageColor[language]
        ? languageColor[language]
        : '#000000'
      : '#000000';
    let langView = () => {
      return language ? (
        <View style={styleParallax.containerLanguage}>
          <Icon
            name="circle"
            color={langColor}
            size={12}
            type={'FONTAWESOME'}
          />
          <Text style={{fontSize: 12, color: 'white', textAlign: 'center'}}>
            {language}
          </Text>
        </View>
      ) : (
        <View style={styleParallax.containerLanguage} />
      );
    };
    return (
      <SafeAreaView style={{flex: 1}}>
        <ParallaxScrollView
          styles={{height: 10000}}
          backgroundColor="#272727"
          contentBackgroundColor="white"
          parallaxHeaderHeight={300}
          stickyHeaderHeight={50}
          contentContainerStyle={styleParallax.contentStyle}
          renderStickyHeader={() => (
            <View style={styleParallax.stickyHeader}>
              <Text style={styleParallax.txtStickyHeader}>
                {this.state.name}
              </Text>
            </View>
          )}
          renderForeground={() => (
            <View style={styleParallax.containerForeground}>
              {langView()}
              <View style={styleParallax.containerProfilePicture}>
                <Text style={{fontSize: 75}}> </Text>
                <Octicons name={repoType} size={75} color="white" />
              </View>
              <View style={styleParallax.containerFullName}>
                <Text style={styleParallax.txtFullName}>{this.state.name}</Text>
              </View>
              <View style={styleParallax.containerButton}>
                <ParallaxButtons
                  name="Stars"
                  value={this.state.stargazersCount}
                />
                <ParallaxButtons name="Watchers" value={this.state.watchers} />
                <ParallaxButtons name="Forks" value={this.state.forks} />
              </View>
            </View>
          )}
        >
          <View style={styles.containerProfileDetails}>
            <DetailsGroup name="Owner">
              <RowWith3Column
                left={
                  this.state.ownerProfilePicture ? (
                    <Image
                      source={{uri: this.state.ownerProfilePicture}}
                      alt={'profilePicture'}
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 40,
                        backgroundColor: 'yellow',
                      }}
                    />
                  ) : null
                }
                content={<Text>{this.state.ownerName}</Text>}
                right={
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={32}
                    color="#D3D3D3"
                  />
                }
                isTouchable={true}
              />
            </DetailsGroup>
            <DetailsGroup name="Contributors">
              <RowWith3Column content={<Text>No Contributors Found</Text>} />
            </DetailsGroup>
            <DetailsGroup name="Source">
              <RowWith3Column
                left={<MaterialIcons name="code" size={32} color="#D3D3D3" />}
                content={<Text>View Code</Text>}
                right={
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={32}
                    color="#D3D3D3"
                  />
                }
                isTouchable
                onPress={() => {
                  this.props.navigation.navigate('RepositoryFileListScreen', {
                    fullName: `${this.state.ownerName}/${this.state.name}`,
                  });
                }}
              />
            </DetailsGroup>
            <DetailsGroup
              name="Issues"
              right={<Button title="Add Issue" onPress={() => {}} />}
            >
              <RowWith3Column content={<Text> No Issues </Text>} />
            </DetailsGroup>
            <DetailsGroup
              name="Pull Request"
              right={<Button title="View All" onPress={() => {}} />}
            >
              <RowWith3Column content={<Text> No Pull Request </Text>} />
            </DetailsGroup>
          </View>
        </ParallaxScrollView>
      </SafeAreaView>
    );
  }
}
const styles = {
  containerProfileDetails: {
    flex: 1,
    flexDirection: 'column',
  },
};
const styleParallax = {
  contentStyle: {
    flex: 1,
  },
  containerForeground: {
    backgroundColor: '#272727',
    height: 300,
    flex: 1,
    paddingTop: 40,
    flexDirection: 'column',
  },
  stickyHeader: {
    backgroundColor: '#272727',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  containerLanguage: {
    flexDirection: 'row',
    height: 25,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  containerProfilePicture: {
    // flex: 1,
    flexDirection: 'row',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgProfilePicture: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '>ow',
  },
  containerFullName: {
    // flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerUsername: {
    // flex: 1,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonRepositories: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStars: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFollowers: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFollowing: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStickyHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtFullName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtUsername: {
    color: 'white',
    fontSize: 16,
  },
  txtButton: {
    color: 'white',
    fontSize: 14,
  },
  txtButtonValue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
};

export default RepositoryDetailScreen;
