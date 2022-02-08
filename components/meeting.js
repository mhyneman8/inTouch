import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Meeting({ navigation }) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <Text style={styles.time}>
              7:00 pm - 7:30 pm
          </Text>
          <Text style={styles.text}>
            {/* {eventEndTime}
            {eventInvitees}
            {eventNotes} */}
            Video Call - Joanna
          </Text>
          
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.subHeading}>
              2 Participants
          </Text>
          <Text style={styles.subHeading}>
              Notes
          </Text>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
              <Text style={styles.subtext}>
              Topics to be discussed
              </Text>
              <Text style={styles.subtext}>
                - Current funding status
              </Text>
              <Text style={styles.subtext}>
                - Next Event
              </Text>
              <Text style={styles.subtext}>
                - New strategy
              </Text>
            </View>
         
          <Text sytles={styles.subHeading}>
            Share documents
          </Text>
          
          <View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('VideoChat')}
            >
                <Text style={styles.buttonText}>
                  Join the meeting
                </Text>
            </TouchableOpacity>
          </View>

        {/* button to join meeting */}
        {/* <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('VideoChat')}
        >
          <Text style={styles.buttonText}>
            Video Chat
          </Text>
        </TouchableOpacity> */}
        {/* button for call settings */}
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#694fad',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    width: '90%',
    height: 47,
    // bottom: 0,
    // flex: 2,
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  subHeading: {
    fontSize: 20,
    margin: 20,
    marginLeft: 50,
    color: '#402F6B',
    borderTopColor: 'grey'
  },
  text: {
    fontSize: 20,
    color: '#402F6B',
    textAlign: 'center',
    marginTop: 50,
    justifyContent: 'center'
  },
  subtext: {
    // display: 'block'
    // marginLeft: 30
    // flex: 1,
    width: '10%',
    flexDirection: 'row'
  },
  time: {
    color: '#402f6b',
    fontSize: 12,
    left: 0,
    top: 0,
    // position: 'absolute',
    marginTop: 20,
    marginLeft: 40
  },
  bottomSection: {
    backgroundColor: '#f5f3f8',
    flex: 2,
    width: '100%'
  }
})