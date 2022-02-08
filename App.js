import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// screens
import Fundraising from './components/fundraising';
import Connect from './components/connect';
import ConnectMessage from './components/connectMessage'; 
import CalendarScreen from './components/calendar';
import Meeting from './components/meeting';
import VideoChat from './components/video-chat';
import TopBar from './components/topBar';
import LoginScreen from './components/login';
import SignupScreen from './components/signup';

// screen name
const homeScreen = "Connect";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
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
              name="currency-usd"
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
              name="message" 
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
  );
}

function App() {
  const { colors } = useTheme();
    return (
      <NavigationContainer>
        <View style={styles.statusBar} />
        <TopBar />

        <Stack.Navigator
          initialRouteName={Home}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
        >

        {/* {isLoggedIn ? ( 
          <Stack.Navigator
          initialRouteName={Home}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
        >
          ) : (
            <Stack.Navigator
          initialRouteName={LoginScreen}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
        >
            Login/ signup options
            )} */}

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen 
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Connect"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Message"
            component={ConnectMessage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Fundraising"
            component={Fundraising}
          />
          <Stack.Screen
            name="Calendar"
            component={CalendarScreen}
          />
          <Stack.Screen
            name="VideoChat"
            component={VideoChat}
          />
          <Stack.Screen
            name="Meeting"
            component={Meeting}
          />
        
        </Stack.Navigator>
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
  statusBar: {
    backgroundColor: '#bab1d2',
    height: Constants.statusBarHeight
  }
});

export default App;