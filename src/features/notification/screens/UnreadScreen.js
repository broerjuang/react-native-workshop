// @flow

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button, Icon} from 'react-native-elements';

class UnreadScreen extends Component<{}> {
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
        title: 'deandrasita/backend-react',
        avatar: 'https://png.icons8.com/color/1600/person-male.png',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
      },
      {
        title: 'deandrasita/frontend-exam-1',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
      },
    ];

    return (
      <View style={mainContainer}>
        <Button
          style={{marginTop: 10}}
          medium
          raised
          icon={{name: 'check', type: 'material-icons', color: 'black'}}
          title="MARK ALL AS READ"
          backgroundColor="#E7E7E7"
          color="black"
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
            </View>
            <View style={bottomListPart}>
              <Icon name="error" type="material-icons" />
              <Text style={bottomDetailsText}> {item.subtitle} </Text>
            </View>
          </View>
        ))}
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
    height: 100,
    margin: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    // borderColor: "#B3B3B3"
  },
  upperListPart: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  listDetails: {
    flexDirection: 'row',
    // justifyContent: "space-between",
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
  },
});
