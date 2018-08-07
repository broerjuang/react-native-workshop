// @flow

import React, {Component, Children} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {MaterialIcons} from '@expo/vector-icons';

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
          <DetailsGroup name="Bio">
            <DetailsContent>Short Biography</DetailsContent>
          </DetailsGroup>
          <DetailsGroup name="Website">
            <DetailsContent>URL</DetailsContent>
          </DetailsGroup>
          <DetailsGroup name="Organizations">
            <DetailsContent>Org 1</DetailsContent>
            <DetailsContent>Org 2</DetailsContent>
          </DetailsGroup>
        </View>
      </ParallaxScrollView>
    );
  }
}
type ParalaxProps = {
  name: string;
  value: number;
  onPress?: () => boolean;
};

function ParallaxButtons(props: ParalaxProps) {
  let {name, value, onPress = null} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styleParallax.buttonRepositories}>
        <Text style={styleParallax.txtButtonValue}> {value} </Text>
        <Text style={styleParallax.txtButton}> {name} </Text>
      </View>
    </TouchableOpacity>
  );
}
type DetailsGroupProps = {
  name: string;
  children: ReactEl;
};
function DetailsGroup(props: DetailsGroupProps) {
  let {name, children, ...otherProps} = props;
  return (
    <View>
      <View {...otherProps} style={styles.containerProfileDetailsTitle}>
        <Text style={styles.txtProfileDetailsTitle}>{name}</Text>
      </View>
      <View style={styles.containerProfileDetailsBody}>
        {Children.map(children, (child, i) => {
          return (
            <View
              key={i}
              {...otherProps}
              style={styles.containerProfileDetailsContent}
            >
              <Text>{child}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
type DetailsContentProps = {
  children: ReactEl;
};
function DetailsContent(props: DetailsContentProps) {
  let {children, ...otherProps} = props;
  return <Text {...otherProps}>{children}</Text>;
}
const styles = {
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
};
export default ProfileScreen;
