// @flow

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import type {NavigationScreenProp} from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<[]>;
};

class ProfileScreen extends Component<Props> {
  render() {
    return (
      <ParallaxScrollView
        styles={{height: 10000}}
        backgroundColor="#272727"
        contentBackgroundColor="white"
        parallaxHeaderHeight={300}
        stickyHeaderHeight={50}
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
              top: 10,
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Setting')}
            >
              <Text> Settings </Text>
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
              <TouchableOpacity>
                <View style={styleParallax.buttonRepositories}>
                  <Text style={styleParallax.txtButtonValue}> 3 </Text>
                  <Text style={styleParallax.txtButton}> Repositories </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleParallax.buttonStars}>
                  <Text style={styleParallax.txtButtonValue}> 6 </Text>
                  <Text style={styleParallax.txtButton}> Stars </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleParallax.buttonFollowers}>
                  <Text style={styleParallax.txtButtonValue}> 9 </Text>
                  <Text style={styleParallax.txtButton}> Followers </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styleParallax.buttonFollowing}>
                  <Text style={styleParallax.txtButtonValue}> 12 </Text>
                  <Text style={styleParallax.txtButton}> Following </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      >
        <View style={styles.containerProfileDetails}>
          <View style={styles.containerProfileDetailsTitle}>
            <Text style={styles.txtProfileDetailsTitle}>BIO</Text>
          </View>
          <View style={styles.containerProfileDetailsBody}>
            <View style={styles.containerProfileDetailsContent}>
              <Text style={styles.txtProfileDetailsContent}>
                Short Biography
              </Text>
            </View>
          </View>
          <View style={styles.containerProfileDetailsTitle}>
            <Text style={styles.txtProfileDetailsTitle}>WEBSITE</Text>
          </View>
          <View style={styles.containerProfileDetailsBody}>
            <View style={styles.containerProfileDetailsContent}>
              <Text style={styles.txtProfileDetailsContent}>URL</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerProfileDetailsTitle}>
          <Text style={styles.txtProfileDetailsTitle}>ORGANIZATIONS</Text>
        </View>
        <View style={styles.containerProfileDetailsBody}>
          <View style={styles.containerProfileDetailsContent}>
            <Text style={styles.txtProfileDetailsContent}>Org 1</Text>
          </View>
          <View style={styles.containerProfileDetailsContent}>
            <Text style={styles.txtProfileDetailsContent}>Org 2</Text>
          </View>
          <View style={styles.containerProfileDetailsContent}>
            <Text style={styles.txtProfileDetailsContent}>Org 3</Text>
          </View>
        </View>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerProfileDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  containerProfileDetailsTitle: {
    paddingTop: 30,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  containerProfileDetailsBody: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  containerProfileDetailsContent: {
    justifyContent: 'center',
    padding: 10,
  },
  txtProfileDetailsTitle: {
    fontWeight: 'bold',
  },
});
const styleParallax = StyleSheet.create({
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
});
export default ProfileScreen;
