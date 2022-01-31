import React from 'react';
import { View, Text, Button } from 'react-native';

export default class VideoChat extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>menu</Text>
        <Text>Title</Text>
        <Text>Notifications</Text>
        
        <Text>Boxes to show video screens of participants</Text>
        
        <Text>menu to switch camera, mute camera, end call, mute mic, chat</Text>
        <Text>Swipe up menu with: reduced background noise, blur background, add participants </Text>
        
      </View>
    )
  }
}