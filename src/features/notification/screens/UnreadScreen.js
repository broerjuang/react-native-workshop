// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Avatar, Button, Icon} from 'react-native-elements';

class UnreadScreen extends Component<{}> {
  _markAsRead(itemID: number) {
    // TODO: write function
    // eslint-disable-next-line no-console
    console.log(itemID);
  }

  _markAllAsRead() {
    // TODO: write function
    // eslint-disable-next-line no-console
    console.log('marked all as read!');
  }

  render() {
    const {
      listDetails,
      mainContainer,
      mainList,
      upperListPart,
      bottomListPart,
      listText,
      bottomDetailsText,
    } = styles;

    const list = [
      {
        id: 1,
        title: 'deandrasita/abcd',
        avatar: 'https://png.icons8.com/color/1600/person-male.png',
        subtitle:
          '(testing long lines) Potential security vulnedjfjldsfl sldjflkdsjf kdjs flksdjflkjljflkjsd fjsdlfslfjsdklfkjf lkdsj  lkjkrability found in the hoek dependency.',
      },
      {
        id: 2,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
      },
      {
        id: 3,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
      },
      {
        id: 4,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
      },
      {
        id: 5,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
      },
    ];

    return (
      <View style={mainContainer}>
        <ScrollView>
          <Button
            style={{marginTop: 10}}
            medium
            raised
            icon={{name: 'check', type: 'material-icons', color: 'black'}}
            title="MARK ALL AS READ"
            backgroundColor="#E7E7E7"
            color="black"
            onPress={this._markAllAsRead}
          />
          {list.map((item, i) => (
            <View style={mainList} key={i}>
              <View style={upperListPart}>
                <View style={listDetails}>
                  <Avatar
                    small
                    rounded
                    source={{
                      uri: item.avatar,
                    }}
                  />
                  <Text style={listText}> {item.title}</Text>
                  <TouchableOpacity onPress={() => this._markAsRead(item.id)}>
                    <Icon name="check" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={bottomListPart}>
                <Icon name="error" type="material-icons" />
                <Text style={bottomDetailsText}>{item.subtitle} </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default UnreadScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainList: {
    flex: 1,
    margin: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  upperListPart: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  listDetails: {
    flexDirection: 'row',
    margin: 10,
  },
  listText: {
    marginLeft: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  bottomListPart: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 5,
  },
  bottomDetailsText: {
    textAlign: 'left',
    alignSelf: 'center',
    padding: 5,
    flexWrap: 'wrap',
    fontSize: 12,
    flex: 1,
  },
});
