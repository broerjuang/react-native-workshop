// @flow
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ParticipatingScreen extends Component<{}> {
  render() {
    const {noNotifText, mainContainer} = styles;

    return (
      <View style={mainContainer}>
        <Text style={noNotifText}>
          You dont have any notifications of this type.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  noNotifText: {
    marginTop: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  mainList: {
    height: 100,
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
  },
});
