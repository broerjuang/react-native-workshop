// @flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

type Props = {
  children?: Array<React$Element<*>>;
};
type NotifHeaderProps = {
  avatar: string;
  title: string;
  id: number;
  onPress: (id?: any) => void;
};

type NotifDetailsProps = {
  detailText: string;
  isWarned: boolean;
};

export function NotificationList(props: Props) {
  let {mainList} = styles;
  let {children, ...otherProps} = props;
  return (
    <View style={mainList} {...otherProps}>
      {children}
    </View>
  );
}

export function NotificationHeader(props: NotifHeaderProps) {
  let {upperListPart, listDetails, listText} = styles;
  let {avatar, title, id, onPress, ...otherProps} = props;
  return (
    <View style={upperListPart} {...otherProps}>
      <View style={listDetails}>
        <Avatar small rounded source={{uri: avatar}} />
        <Text style={listText}> {title}</Text>
        <TouchableOpacity
          onPress={() => {
            onPress(id);
          }}
        >
          <Icon name="check" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function NotificationDetails(props: NotifDetailsProps) {
  let {bottomListPart, bottomDetailsText} = styles;
  let {detailText = '', isWarned, ...otherProps} = props;
  return (
    <View style={bottomListPart} {...otherProps}>
      {isWarned ? <Icon name="error" type="material-icons" /> : ''}
      <Text style={bottomDetailsText}>{detailText}</Text>
    </View>
  );
}

let styles = {
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
};
