// @flow

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {connect} from 'react-redux';
import {MaterialIcons} from '@expo/vector-icons';
// import {createStore, applyMiddleware} from 'redux';

import DetailsGroup from '../../../global/core-ui/DetailsGroup';
import ParallaxButtons from '../../../global/core-ui/ParallaxButtons';
import RowWith3Column from '../../../global/core-ui/RowWith3Column';
import type {UserState} from '../reducers/userReducer';

type Props = {
  navigation: Object;
  handleAction: (action: Object) => void;
  userState: UserState;
};

type State = {};

export class UserScreen extends Component<Props, State> {
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
              <Text style={styleParallax.txtStickyHeader}>
                {this.props.userState.userLogin}
              </Text>
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
                <Image
                  style={styleParallax.imgProfilePicture}
                  source={{
                    uri: this.props.userState.userPicture,
                  }}
                />
              </View>
              <View style={styleParallax.containerFullName}>
                <Text style={styleParallax.txtFullName}>
                  {this.props.userState.userFullName}
                </Text>
              </View>
              <View style={styleParallax.containerUsername}>
                <Text style={styleParallax.txtUsername}>
                  {this.props.userState.userLogin}
                </Text>
              </View>
              <View style={styleParallax.containerButton}>
                <ParallaxButtons
                  name="Repositories"
                  value={this.props.userState.sumRepositories}
                  onPress={() =>
                    this.props.navigation.navigate('RepositoryScreen')
                  }
                />

                <ParallaxButtons
                  name="Stars"
                  value={this.props.userState.sumStars}
                  onPress={() =>
                    this.props.navigation.navigate('RepositoryScreen')
                  }
                />
                <ParallaxButtons
                  name="Followers"
                  value={this.props.userState.sumFollowers}
                  onPress={() => this.props.navigation.navigate('Followers')}
                />
                <ParallaxButtons
                  name="Following"
                  value={this.props.userState.sumFollowing}
                  onPress={() => this.props.navigation.navigate('Following')}
                />
              </View>
            </View>
          )}
        >
          <View style={styles.containerProfileDetails}>
            <DetailsGroup disabled={true} name="Bio">
              <RowWith3Column
                content={
                  this.props.userState.biography !== null ? (
                    <Text> {this.props.userState.biography}</Text>
                  ) : (
                    <Text>No Biography Found</Text>
                  )
                }
              />
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
                content={
                  this.props.userState.website !== '' ? (
                    <Text> {this.props.userState.website}</Text>
                  ) : (
                    <Text> No Website Found</Text>
                  )
                }
              />
            </DetailsGroup>
            <DetailsGroup name="Organizations">
              {this.props.userState.organizations ? (
                this.props.userState.organizations.map((orgRow, i) => {
                  return (
                    <RowWith3Column
                      key={i}
                      isTouchable={true}
                      content={<Text>{orgRow.name}</Text>}
                    />
                  );
                })
              ) : (
                <RowWith3Column content={<Text>No Organization found</Text>} />
              )}
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
    width: 90,
    height: 90,
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

function mapStateToProps(state) {
  return {
    userState: state.userReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAction: (action: Object) => dispatch(action),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserScreen);
