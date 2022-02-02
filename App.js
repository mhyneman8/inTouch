import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// screens
import Fundraising from './components/fundraising';
import Connect from './components/connect';
import CalendarScreen from './components/calendar';
import Meeting from './components/meeting';
import VideoChat from './components/video-chat';

// screen name
const homeScreen = "Connect";

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

function App() {
  const { colors } = useTheme();
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeScreen}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
          >
          <Tab.Screen
            name="Fundraising"
            component={Fundraising}
            options={{
              tabBarLabel: 'Fundraising',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="bell"
                  color={color}
                  size={26}
                  />
              ),
            }}
          />
          <Tab.Screen
            name="Connect"
            component={Connect}
            options={{
              tabBarLabel: 'Connect',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons 
                  name="group" 
                  color={color} 
                  size={26} 
                />
              )
            }}
          />
          {/* <Tab.Screen
            name="add"
          /> */}
          <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              tabBarLabel: 'Calendar',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="calendar"
                  color={color}
                  size={26}
                />
              )
            }}
          />
          {/* <Tab.Screen
            name="Meeting"
            component={Meeting}
          />
          <Tab.Screen
            name="VideoChat"
            component={VideoChat}
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;