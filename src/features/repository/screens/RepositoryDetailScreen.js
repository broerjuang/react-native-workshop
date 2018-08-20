// @flow
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Octicons, MaterialIcons} from '@expo/vector-icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {SafeAreaView} from 'react-navigation';
import type {NavigationScreenProp} from 'react-navigation';

import ParallaxButtons from '../../../global/core-ui/ParallaxButtons';
import DetailsGroup from '../../../global/core-ui/DetailsGroup';
import RowWith3Column from '../../../global/core-ui/RowWith3Column';
import Button from '../../../global/core-ui/Button';

type Props = {
  navigation: NavigationScreenProp<*>;
};
class RepositoryDetailScreen extends Component<Props> {
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
  render() {
    let type = 1;
    let repoType = type ? 'repo-forked' : 'repo';

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
              <Text style={styleParallax.txtStickyHeader}> Repo Name </Text>
            </View>
          )}
          renderForeground={() => (
            <View style={styleParallax.containerForeground}>
              <View style={styleParallax.containerProfilePicture}>
                <Octicons name={repoType} size={100} color="white" />
              </View>
              <View style={styleParallax.containerFullName}>
                <Text style={styleParallax.txtFullName}>Bootcamp</Text>
              </View>
              <View style={styleParallax.containerButton}>
                <ParallaxButtons name="Stars" value={3} />
                <ParallaxButtons name="Watchers" value={6} />
                <ParallaxButtons name="Forks" value={9} />
              </View>
            </View>
          )}
        >
          <View style={styles.containerProfileDetails}>
            <DetailsGroup name="Owner">
              <RowWith3Column
                left={
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 40,
                      backgroundColor: 'yellow',
                    }}
                  />
                }
                content={<Text>jhnoa</Text>}
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
                content={<Text>Code</Text>}
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
  containerProfilePicture: {
    // flex: 1,
    height: 100,
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
