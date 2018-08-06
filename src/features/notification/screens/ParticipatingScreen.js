// @flow
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {NavigationScreenProp} from 'react-navigation';

type Props = {
  tryingProps: string,
  navigation: NavigationScreenProp<[]>,
};
export default class ParticipatingScreen extends Component<Props> {
  render() {
    const {noNotifText, mainContainer} = styles;

    // const {params} = this.state.navigation.state;
    // console.log(params.tryingProps);
    return (
      <View style={mainContainer}>
        <Text> Participating Screen </Text>
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
