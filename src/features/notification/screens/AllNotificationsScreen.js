// @flow

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Button from '../../../global/core-ui/Button';
import RowWith3Column from '../../../global/core-ui/RowWith3Column';
import {Ionicons, Octicons} from '@expo/vector-icons';
import {Avatar} from 'react-native-elements';
import {NotificationList} from '../../../global/core-ui/NotificationList';

import type {NotificationDataType} from '../reducers/notificationReducer';

import {ButtonGroup} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import fetchJSON from '../../../global/helpers/fetchJSON';

type Props = {
  markAsRead: (selectedNotificationID: number) => void;
  markAllAsRead: () => void;
  handleAction: (action: Object) => void;
  allNotificationData: *;
  unreadNotificationData: *;
  participatingNotificationData: *;
};

type NotifListType = {
  id: number;
  reposID: number;
  reposFullName: string;
  reposOwner: string;
  reposAvatar: string;
  subjectTitle: string;
  subjectURL: toString;
  subjectType: string;
  isUnread: boolean;
  isFork: boolean;
};
type State = {
  unreadNotifList: Array<NotifListType>;
  readNotifList: Array<NotifListType>;
  participatingNotifList: Array<NotifListType>;
  getNotifList: Array<NotifListType>;
  selectedIndex: number;
  endpoint: string;
};

export class AllNotificationsScreen extends Component<Props, State> {
  state = {
    unreadNotifList: [],
    readNotifList: [],
    participatingNotifList: [],
    selectedIndex: 0,
    endpoint: '',
    getNotifList: [],
  };

  async componentDidMount() {
    await this._getNotifications();
  }

  async _getNotifications() {
    try {
      let notificationState = await fetchJSON('notifications', 'GET');
      this.props.handleAction({
        type: 'GET_UNREAD_NOTIFICATION',
        payload: notificationState,
      });
    } catch (err) {
      console.log(err);
    }

    try {
      let notificationState = await fetchJSON(
        'notifications?participating=true',
        'GET',
      );
      this.props.handleAction({
        type: 'GET_PARTICIPATING_NOTIFICATION',
        payload: notificationState,
      });
    } catch (err) {
      console.log(err);
    }

    try {
      let notificationState = await fetchJSON('notifications?all=true', 'GET');
      this.props.handleAction({
        type: 'GET_ALL_NOTIFICATION',
        payload: notificationState,
      });
    } catch (err) {
      console.log(err);
    }
  }

  updateIndex(selectedIndex: number) {
    this.setState({selectedIndex});
  }

  render() {
    let notificationDataForMap: Array<NotificationDataType> = [];

    if (this.state.selectedIndex === 0) {
      notificationDataForMap = this.props.unreadNotificationData;
    }
    if (this.state.selectedIndex === 1) {
      notificationDataForMap = this.props.participatingNotificationData;
    }
    if (this.state.selectedIndex === 2) {
      notificationDataForMap = this.props.allNotificationData;
    }

    // const {} = this.state;

    const {mainContainer} = styles;
    const buttons = ['Unread', 'Participating', 'All'];

    return (
      <View style={mainContainer}>
        <SafeAreaView />
        <ButtonGroup
          buttons={buttons}
          onPress={this.updateIndex.bind(this)}
          selectedIndex={this.state.selectedIndex}
        />

        <ScrollView>
          <Button
            backgroundColor={'#F1F1F1'}
            title={'MARK ALL AS READ'}
            underlayColor={'#E7E7E7'}
            onPress={this.props.markAllAsRead}
          />
          <View>
            {notificationDataForMap.map((item, i) => (
              <NotificationList key={i}>
                <RowWith3Column
                  style={{backgroundColor: '#F1F1F1'}}
                  left={
                    <Avatar small rounded source={{uri: item.reposAvatar}} />
                  }
                  content={<Text>{item.reposFullName}</Text>}
                />
                <RowWith3Column
                  left={
                    item.subjectType === 'PullRequest' ? (
                      <Octicons
                        name="git-pull-request"
                        size={25}
                        type="OCTICONS"
                      />
                    ) : (
                      <Octicons name="issue-opened" size={25} type="OCTICONS" />
                    )
                  }
                  content={<Text>{item.subjectTitle}</Text>}
                  right={
                    <TouchableOpacity
                      onPress={() => this.props.markAsRead(item.id)}
                    >
                      <Ionicons name="ios-checkmark" size={50} color="black" />
                    </TouchableOpacity>
                  }
                />
              </NotificationList>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    unreadNotificationData: state.notificationReducer.unreadNotificationData,
    participatingNotificationData:
      state.notificationReducer.participatingNotificationData,
    allNotificationData: state.notificationReducer.allNotificationData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleAction: (action: Object) => dispatch(action),
    markAllAsRead: () => ({type: 'MARK_ALL_AS_READ'}),
    markAsRead: (selectedNotificationID) =>
      dispatch({type: 'MARK_AS_READ', payload: selectedNotificationID}),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllNotificationsScreen);
