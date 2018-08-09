// @flow

import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Button from '../../../general/core-ui/Button';
import {
  NotificationDetails,
  NotificationHeader,
  NotificationList,
} from '../../../general/core-ui/NotificationList';
import {connect} from 'react-redux';

type Props = {markAsRead: (itemID: number) => void; markAllAsRead: () => void};

type State = {
  itemID: number;
};

class UnreadScreen extends Component<Props, State> {
  render() {
    const {mainContainer} = styles;

    const list = [
      {
        id: 1,
        title: 'deandrasita/abcd',
        avatar: 'https://png.icons8.com/color/1600/person-male.png',
        subtitle:
          '(testing long lines) Potential security vulnedjfjldsfl sldjflkdsjf kdjs flksdjflkjljflkjsd fjsdlfslfjsdklfkjf lkdsj  lkjkrability found in the hoek dependency.',
        isWarned: false,
      },
      {
        id: 2,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
        isWarned: true,
      },
      {
        id: 3,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
        isWarned: false,
      },
      {
        id: 4,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
        isWarned: true,
      },
      {
        id: 5,
        title: 'deandrasita/abcd',
        avatar:
          'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600109/59070192-user-icon-woman-profile-businesswoman-avatar-person-icon-in-vector-illustration.jpg',
        subtitle:
          'Potential security vulnerability found in the hoek dependency.',
        isWarned: true,
      },
    ];
    return (
      <View style={mainContainer}>
        <ScrollView>
          <Button
            backgroundColor={'#E7E7E7'}
            title={'MARK ALL AS READ'}
            underlayColor={'#E7E7E7'}
            onPress={this.props.markAllAsRead}
          />

          {list.map((item, i) => (
            <NotificationList key={i}>
              <NotificationHeader
                avatar={item.avatar}
                title={item.title}
                id={item.id}
                onPress={() => this.props.markAsRead(item.id)}
              />
              <NotificationDetails
                isWarned={item.isWarned}
                detailText={item.subtitle}
              />
            </NotificationList>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markAllAsRead: () =>
      dispatch({
        type: 'MARK_ALL_AS_READ',
      }),
    markAsRead: (itemID: number) =>
      dispatch({type: 'MARK_AS_READ', payload: itemID}),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(UnreadScreen);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
