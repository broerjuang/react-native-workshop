// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Avatar, Button, Icon} from 'react-native-elements';

class UnreadScreen extends Component<{}> {
  _markAllAsRead() {
    console.log('marked as read');
  }

  _markAsRead(notificationID: number) {
    console.log('marked as read', notificationID);
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
      checklistMark,
    } = styles;

    const list = [
      {
        id: 1,
        title: 'deandrasita/abcd',
        avatar: 'https://png.icons8.com/color/1600/person-male.png',
        subtitle:
          'Potential security vulnerability dslfjhsdjk ssrsdsd fsfsf 3244fdf  fdfsfsd fdsfsdsfljhdsfjsd dlhfsdlkfjkldsffound in the hoek dependency.',
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
            onPress={this._markAllAsRead.bind(this)}
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
                </View>
                <TouchableWithoutFeedback
                  onPress={() => this._markAsRead(item.id)}
                >
                  <Icon name="check" type="material-icons" />
                </TouchableWithoutFeedback>
              </View>
              <View style={bottomListPart}>
                <Icon name="error" type="material-icons" />
                <Text style={bottomDetailsText}>{item.subtitle}</Text>
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
    margin: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  checklistMark: {
    flex: 1,
  },
  upperListPart: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
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
    flex: 1,
    alignSelf: 'center',
    padding: 5,
    fontSize: 12,
    alignItems: 'flex-start',
  },
});
