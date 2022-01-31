import { TabActions } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Connect extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>menu</Text>
        <Text>Title</Text>
        <Text>Notifications</Text>
        
        <Text>Connect</Text>
        <Text>Team & Community options</Text>
        <Text>Maybe firebase for backend. category : team/ or client to switch between sections</Text>
        <Text>Search</Text>
        <Text>List of contacts</Text>
      </View>
    )
  }
}