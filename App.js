import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './components/dashboard';
import Connect from './components/connect';
import Calendar from './components/calendar';
import Meeting from './components/meeting';
import VideoChat from './components/video-chat';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
        >
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen
            name="Connect"
            component={Connect}
          />
          <Stack.Screen
            name="Calendar"
            component={Calendar}
          />
          <Stack.Screen
            name="Meeting"
            component={Meeting}
          />
          <Stack.Screen
            name="VideoChat"
            component={VideoChat}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
