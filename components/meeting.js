import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Meeting extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Back arrow</Text>
        <Text>Notifications</Text>
        
        <Text>Calendar meeting info</Text>
        <Text>Notes and edit option</Text>
        <Text>Share documents</Text>

        {/* button to join meeting */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('VideoChat')}
        >
          <Text style={styles.buttonText}>Video Chat</Text>
        </TouchableOpacity>
        {/* button for call settings */}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#694fad',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  }, 
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})