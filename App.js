import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// screens
import Fundraising from './components/fundraising';
import Connect from './components/connect';
import CalendarScreen from './components/calendar';
import Meeting from './components/meeting';
import VideoChat from './components/video-chat';

// screen name
const homeScreen = "Connect";

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

function App() {
  const { colors } = useTheme();
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeScreen}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if(rn = homeScreen) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === Fundraising) {
                iconName = focused ? 'list' : 'list-outline';
              } else if (rn === CalendarScreen) {
                iconName = focused ? 'settings' : 'settings-outline';
              } 
              
              return <Ionicons name={iconName} size={size} color={color} />;
              // else if (rn === Meeting) {
              //   iconName = focused ? '' : '-outline'
              // } else if (rn === VideoChat) {
              //   iconName = focused ? '' : '-outline'
              // }
            },
          })}
          screenOptions={
            {
              "tabBarActiveTintColor": "tomato",
              "tabBarInactiveTintColor": "grey",
              "tabBarLabelStyle": { 
                paddingBottom: 10, 
                fontSize: 10
              },
              "tabBarStyle": [
                {
                  "display": "flex",
                  "padding": 10, 
                  "height": 70
                },
                null
            ]
            }
          }
          >
          <Tab.Screen
            name="Fundraising"
            component={Fundraising}
          />
          <Tab.Screen
            name="Connect"
            component={Connect}
          />
          {/* <Tab.Screen
            name="add"
          /> */}
          <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
          />
          <Tab.Screen
            name="Meeting"
            component={Meeting}
          />
          {/* <Tab.Screen
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