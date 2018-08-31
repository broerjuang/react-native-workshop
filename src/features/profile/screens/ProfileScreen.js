// @flow

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {connect} from 'react-redux';
import {MaterialIcons} from '@expo/vector-icons';
// import {createStore, applyMiddleware} from 'redux';

// import type {NavigationScreenProp} from 'react-navigation';
import DetailsGroup from '../../../global/core-ui/DetailsGroup';
import ParallaxButtons from '../../../global/core-ui/ParallaxButtons';
import RowWith3Column from '../../../global/core-ui/RowWith3Column';
import type {ProfileState} from '../reducers/profileReducer';

type NavProps = {
  userLogin: string;
};
type Props = {
  navigation: NavigationProp<NavProps>;
  handleAction: (action: Object) => void;
  profileState: ProfileState;
};

type State = {};

class ProfileScreen extends Component<Props, State> {
  componentDidMount() {
    console.log(this.props.navigation.state.params, 'params');
    this.props.handleAction({type: 'ON_PAGE_MOUNT'});
  }

  render() {
    let {
      userLogin,
      userFullName,
      userPicture,
      sumRepositories,
      sumStars,
      sumFollowers,
      sumFollowing,
      biography,
      website,
      organizations,
    } = this.props.profileState;

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
              <Text style={styleParallax.txtStickyHeader}>{userLogin}</Text>
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
                    uri: userPicture,
                  }}
                />
              </View>
              <View style={styleParallax.containerFullName}>
                <Text style={styleParallax.txtFullName}>{userFullName}</Text>
              </View>
              <View style={styleParallax.containerUsername}>
                <Text style={styleParallax.txtUsername}>{userLogin}</Text>
              </View>
              <View style={styleParallax.containerButton}>
                <ParallaxButtons
                  name="Repositories"
                  value={sumRepositories}
                  onPress={() =>
                    this.props.navigation.navigate('RepositoryScreen')
                  }
                />

                <ParallaxButtons
                  name="Stars"
                  value={sumStars}
                  onPress={() => this.props.navigation.navigate('Stars')}
                />
                <ParallaxButtons
                  name="Followers"
                  value={sumFollowers}
                  onPress={() => this.props.navigation.navigate('Followers')}
                />
                <ParallaxButtons
                  name="Following"
                  value={sumFollowing}
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
                  biography !== null ? (
                    <Text> {biography}</Text>
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
                  website !== '' ? (
                    <Text> {website}</Text>
                  ) : (
                    <Text> No Website Found</Text>
                  )
                }
              />
            </DetailsGroup>
            <DetailsGroup name="Organizations">
              {organizations ? (
                organizations.map((orgRow, i) => {
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
    profileState: state.profileReducer,
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
)(ProfileScreen);
