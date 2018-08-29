// @flow

import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Avatar, ButtonGroup} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import Button from '../../../global/core-ui/Button';
import RowWith3Column from '../../../global/core-ui/RowWith3Column';
import {Ionicons, Octicons} from '@expo/vector-icons';

type Props = {
  markAsRead: (selectedNotificationID: number) => void;
  markAllAsRead: () => void;
  handleAction: (action: Object) => void;
  allNotificationData: Array<*>;
  unreadNotificationData: Array<*>;
  participatingNotificationData: Array<*>;
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
  selectedIndex: number;
};

export class AllNotificationsScreen extends Component<Props, State> {
  state = {
    unreadNotifList: [],
    readNotifList: [],
    participatingNotifList: [],
    selectedIndex: 0,
  };

  async componentDidMount() {
    this.props.handleAction({type: 'NOTIFICATION_REQUESTED'});
  }

  updateIndex(selectedIndex: number) {
    this.setState({selectedIndex});
  }

  render() {
    let notificationDataForMap: Array<*> = [];

    if (this.state.selectedIndex === 0) {
      notificationDataForMap = this.props.unreadNotificationData;
    }
    if (this.state.selectedIndex === 1) {
      notificationDataForMap = this.props.participatingNotificationData;
    }
    if (this.state.selectedIndex === 2) {
      notificationDataForMap = this.props.allNotificationData;
    }

    var temporaryStoreForData = {};

    notificationDataForMap.forEach((item) => {
      if (
        typeof temporaryStoreForData[item.repository.full_name] === 'undefined'
      ) {
        temporaryStoreForData[item.repository.full_name] = [];
      }
      temporaryStoreForData[item.repository.full_name].push({
        id: item.id,
        subjectTitle: item.subject.title,
        subjectURL: item.subject.url,
        subjectType: item.subject.type,
        isUnread: item.unread,
        reposFullName: item.repository.full_name,
        reposAvatar: item.repository.owner.avatar_url,
      });
    });

    var newData = [];

    for (var reposID in temporaryStoreForData) {
      if (reposID) {
        newData.push({
          reposFullName: reposID,
          notifications: [],
        });

        var lastItem = newData.length - 1;

        temporaryStoreForData[reposID].forEach((item) => {
          newData[lastItem].notifications.push(item);
        });
      }
    }

    const buttons = ['Unread', 'Participating', 'All'];

    let showNotificationList;

    if (notificationDataForMap.length === 0) {
      showNotificationList = (
        <Text style={noNotificationStyle}>
          {`You don't have notifications of this type.`}
        </Text>
      );
    }

    return (
      <View style={mainContainer}>
        <SafeAreaView />
        <ButtonGroup
          buttons={buttons}
          onPress={this.updateIndex.bind(this)}
          selectedIndex={this.state.selectedIndex}
        />

        <ScrollView>
          {this.state.selectedIndex === 0 ? (
            <Button
              style={{
                flex: 1,
                shadowOffset: {width: 1, height: 1},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                borderColor: 'black',
              }}
              backgroundColor={'#F1F1F1'}
              title={'MARK ALL AS READ'}
              underlayColor={'#E7E7E7'}
              onPress={this.props.markAllAsRead}
            />
          ) : (
            ''
          )}

          <View>
            {newData.map((item, i) => (
              <View style={mainList} key={i}>
                <RowWith3Column
                  style={{backgroundColor: '#F1F1F1'}}
                  left={
                    <Avatar
                      small
                      rounded
                      source={{uri: item.notifications[0].reposAvatar}}
                    />
                  }
                  content={<Text>{item.reposFullName}</Text>}
                />

                {item.notifications.map((notif, i) => (
                  <RowWith3Column
                    style={{
                      borderBottomColor: '#F1F1F1',
                      borderBottomWidth: 2,
                    }}
                    key={i}
                    left={
                      notif.subjectType === 'PullRequest' ? (
                        <Octicons
                          name="git-pull-request"
                          size={25}
                          type="OCTICONS"
                        />
                      ) : (
                        <Octicons
                          name="issue-opened"
                          size={25}
                          type="OCTICONS"
                        />
                      )
                    }
                    content={<Text>{notif.subjectTitle}</Text>}
                    right={
                      notif.isUnread ? (
                        <TouchableOpacity
                          onPress={() => this.props.markAsRead(notif.id)}
                        >
                          <Ionicons
                            name="ios-checkmark"
                            size={50}
                            color="black"
                          />
                        </TouchableOpacity>
                      ) : (
                        ''
                      )
                    }
                  />
                ))}
              </View>
            ))}
            {showNotificationList}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mainContainer = {
  flex: 1,
};

const mainList = {
  flex: 1,
  margin: 10,
  shadowOffset: {width: 1, height: 1},
  shadowColor: 'black',
  shadowOpacity: 0.2,
};

const noNotificationStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
};

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
    markAllAsRead: () => {
      dispatch({
        type: 'MARK_ALL_NOTIFICATIONS_AS_READ',
      });
    },
    markAsRead: (selectedNotificationID: string) => {
      return dispatch({
        type: 'MARK_NOTIFICATION_AS_READ',
        payload: selectedNotificationID,
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllNotificationsScreen);
