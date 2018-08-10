// @flow

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {MaterialIcons} from '@expo/vector-icons';

import type {NavigationScreenProp} from 'react-navigation';
import DetailsGroup from '../../../general/core-ui/DetailsGroup';
import ParallaxButtons from '../../../general/core-ui/ParallaxButtons';
import RowWith3Column from '../../../general/core-ui/RowWith3Column';

type Props = {
  navigation: NavigationScreenProp<[]>;
};

class ProfileScreen extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ParallaxScrollView
          styles={{height: 10000}}
          backgroundColor="#272727"
          contentBackgroundColor="white"
          parallaxHeaderHeight={300}
          stickyHeaderHeight={65}
          contentContainerStyle={styleParallax.contentStyle}
          renderStickyHeader={() => (
            <View style={styleParallax.stickyHeader}>
              <Text style={styleParallax.txtStickyHeader}> sstur </Text>
            </View>
          )}
          renderFixedHeader={() => (
            <View
              style={{
                position: 'absolute',
                right: 10,
                top: 25,
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Setting')}
              >
                <MaterialIcons name="settings" size={30} color="white" />
              </TouchableOpacity>
            </View>
          )}
          renderForeground={() => (
            <View style={styleParallax.containerForeground}>
              <View style={styleParallax.containerProfilePicture}>
                <View style={styleParallax.imgProfilePicture} />
              </View>
              <View style={styleParallax.containerFullName}>
                <Text style={styleParallax.txtFullName}>Simon Stürmer</Text>
              </View>
              <View style={styleParallax.containerUsername}>
                <Text style={styleParallax.txtUsername}>sstur</Text>
              </View>
              <View style={styleParallax.containerButton}>
                <ParallaxButtons
                  name="Repositories"
                  value={3}
                  onPress={() =>
                    this.props.navigation.navigate('RepositoryScreen')
                  }
                />

                <ParallaxButtons
                  name="Stars"
                  value={6}
                  onPress={() =>
                    this.props.navigation.navigate('RepositoryScreen')
                  }
                />
                <ParallaxButtons
                  name="Followers"
                  value={9}
                  onPress={() =>
                    this.props.navigation.navigate('RepositoryScreen')
                  }
                />
                <ParallaxButtons
                  name="Following"
                  value={12}
                  onPress={() =>
                    this.props.navigation.navigate('RepositoryScreen')
                  }
                />
              </View>
            </View>
          )}
        >
          <View style={styles.containerProfileDetails}>
            <DetailsGroup disabled={true} name="Bio">
              <RowWith3Column content={<Text> Short Biography</Text>} />
            </DetailsGroup>
            <DetailsGroup name="Website">
              <RowWith3Column
                left={
                  <MaterialIcons
                    name="link"
                    size={35}
                    style={{
                      opacity: 0.5,
                    }}
                  />
                }
                content={<Text>URL</Text>}
              />
            </DetailsGroup>
            <DetailsGroup name="Organizations">
              <RowWith3Column
                isTouchable={false}
                content={<Text>Organizations</Text>}
              />
              <RowWith3Column
                isTouchable={true}
                onPress={() => this.props.navigation.navigate('Setting')}
                content={<Text>Go to Settings</Text>}
              />
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
    height: 80,
  },
  containerProfilePicture: {
    // flex: 1,
    height: 100,
    alignItems: 'center',
  },
  imgProfilePicture: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'yellow',
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
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
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
};
export default ProfileScreen;
