// @flow
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Octicons, MaterialIcons} from '@expo/vector-icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {SafeAreaView} from 'react-navigation';
import type {NavigationScreenProp} from 'react-navigation';
type Props = {
  navigation: NavigationScreenProp<*>;
};
class RepositoryDetailScreen extends Component<Props> {
  static navigationOptions = ({navigation}) => ({
    headerTransparent: true,
    headerLeft: (
      <View style={{paddingLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
              <Text style={styleParallax.txtStickyHeader}> sstur </Text>
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
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('RepositoryDetailScreen');
                  }}
                >
                  <View style={styleParallax.buttonRepositories}>
                    <Text style={styleParallax.txtButtonValue}> 0 </Text>
                    <Text style={styleParallax.txtButton}> Stars </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styleParallax.buttonStars}>
                    <Text style={styleParallax.txtButtonValue}> 2 </Text>
                    <Text style={styleParallax.txtButton}> Watcher </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styleParallax.buttonFollowers}>
                    <Text style={styleParallax.txtButtonValue}> 1 </Text>
                    <Text style={styleParallax.txtButton}> Forks </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        >
          <View style={styles.containerProfileDetails}>
            <View style={styles.containerProfileDetailsTitle}>
              <Text style={styles.txtProfileDetailsTitle}>Owner</Text>
            </View>
            <View style={styles.containerProfileDetailsBody}>
              <View style={styles.containerProfileDetailsContent}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 40,
                    backgroundColor: 'yellow',
                  }}
                />
                <Text style={styles.txtProfileDetailsContent}>jhnoa</Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={32}
                  color="#D3D3D3"
                />
              </View>
            </View>
          </View>
          <View style={styles.containerProfileDetailsTitle}>
            <Text style={styles.txtProfileDetailsTitle}>Contributors</Text>
          </View>
          <View style={styles.containerProfileDetailsBody}>
            <View style={styles.containerProfileDetailsContent}>
              <Text style={styles.txtProfileDetailsContent}>
                No Contributors Found
              </Text>
            </View>
          </View>
          <View style={styles.containerProfileDetailsTitle}>
            <Text style={styles.txtProfileDetailsTitle}>Source</Text>
          </View>
          <View style={styles.containerProfileDetailsBody}>
            <View style={styles.containerProfileDetailsContent}>
              <MaterialIcons name="code" size={32} color="#D3D3D3" />
              <Text style={styles.txtProfileDetailsContent}>Code</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={32}
                color="#D3D3D3"
              />
            </View>
          </View>
          <View style={styles.containerProfileDetailsTitle}>
            <Text style={styles.txtProfileDetailsTitle}>Issues</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                borderRadius: 3,
              }}
            >
              <Text>New Issue</Text>
            </View>
          </View>
          <View style={styles.containerProfileDetailsBody}>
            <View style={styles.containerProfileDetailsContent}>
              <Text style={styles.txtProfileDetailsContent}>No Issues</Text>
            </View>
          </View>
          <View style={styles.containerProfileDetailsTitle}>
            <Text style={styles.txtProfileDetailsTitle}>Pull Request</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 10,
                borderRadius: 3,
              }}
            >
              <Text>View All</Text>
            </View>
          </View>
          <View style={styles.containerProfileDetailsBody}>
            <View style={styles.containerProfileDetailsContent}>
              <Text style={styles.txtProfileDetailsContent}>
                No Pull Request
              </Text>
            </View>
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
  containerProfileDetailsTitle: {
    flexDirection: 'row',
    paddingTop: 30,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'center',
  },
  containerProfileDetailsBody: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  containerProfileDetailsContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  txtProfileDetailsTitle: {
    fontWeight: 'bold',
    flex: 1,
  },
  txtProfileDetailsContent: {
    paddingLeft: 15,
    flex: 1,
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
};

export default RepositoryDetailScreen;
