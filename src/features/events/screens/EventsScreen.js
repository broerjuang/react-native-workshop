// @flow

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {EventCard} from '../../../components/index';

import type {NavigationScreenProp} from 'react-navigation';

type Event = {
  profilePicture: string,
  username: string,
  action: 'COMMENT_PR' | 'COMMENT_ISSUE' | 'PR' | 'ISSUE' | 'FORK',
  actionTarget: string,
  repoTarget: string,
  date: string,
  comment?: string,
};

type Object = {
  navigation: NavigationScreenProp<[]>,
};

class EventsScreen extends Component<Object> {
  render() {
    let eventList: Array<Event> = [
      {
        profilePicture:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
        username: 'zzzcielo',
        action: 'COMMENT_ISSUE',
        actionTarget: 'Parallax Header Bug',
        repoTarget: 'astridtamara/bootcamp',
        date: '1d',
        comment:
          '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time.' +
          '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time.' +
          '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time.' +
          '[Test Long Comment] The bug is bugging me a lot. Good job fixing it in such short time. ',
      },
      {
        profilePicture:
          'https://d2kwjcq8j5htsz.cloudfront.net/2016/08/16153058/hamster-health-center-2.jpg',
        username: 'astridtamara',
        action: 'ISSUE',
        actionTarget: 'kodefox/kfstart',
        repoTarget: 'astridtamara/bootcamp',
        date: '2d',
      },
      {
        profilePicture:
          'http://www.grosse.is-a-geek.com/robopics/roborovski01_1024.jpg',
        username: 'zzzcielo',
        action: 'COMMENT_PR',
        actionTarget: 'Quick bug fix',
        repoTarget: 'astridtamara/bootcamp',
        date: '4d',
        comment:
          'The bug is bugging me a lot. Good job fixing it in such short time. ',
      },
      {
        profilePicture:
          'https://d2kwjcq8j5htsz.cloudfront.net/2016/08/16153058/hamster-health-center-2.jpg',
        username: 'astridtamara',
        action: 'PR',
        actionTarget: 'kodefox/kfstart',
        repoTarget: 'astridtamara/bootcamp',
        date: '6d',
      },
      {
        profilePicture:
          'https://d2kwjcq8j5htsz.cloudfront.net/2016/08/16153058/hamster-health-center-2.jpg',
        username: 'astridtamara',
        action: 'FORK',
        actionTarget: 'kodefox/kfstart',
        repoTarget: 'astridtamara/bootcamp',
        date: '6d',
      },
    ];
    return (
      <View>
        {eventList.map((event, index) => {
          return (
            <EventCard
              key={index}
              event={event}
              openRepo={() => this._openRepo(event.repoTarget)}
              openUser={() => this._openUser(event.username)}
            />
          );
        })}
      </View>
    );
  }

  _openRepo = (repo: string) => {
    this.props.navigation.navigate('RepositoryDetailScreen');
  };
  _openUser = (user: string) => {
    this.props.navigation.navigate('UserScreen');
  };
}

export default EventsScreen;
