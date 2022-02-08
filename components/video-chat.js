import React from 'react';
import { View, Text, Button } from 'react-native';

export default class VideoChat extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        
        <View style={styles.container}>
                <Text style={styles.text}>
                    7:00 pm - 7:30 pm
                    {eventStartTime}
                    {/* {eventEndTime}
                    {eventInvitees}
                    {eventNotes} */}
                    Video Call - Joanna
                </Text>
                <Text style={styles.subtext}>
                    
                </Text>
                <Text style={styles.subtext}>
                    7:00 pm - 7:30 pm
                </Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Meeting')}
                >
                    <Text style={styles.buttonText}>Meeting Information</Text>
                </TouchableOpacity>
            </View>

        <Text>Boxes to show video screens of participants</Text>
        
        <Text>menu to switch camera, mute camera, end call, mute mic, chat</Text>
        <Text>Swipe up menu with: reduced background noise, blur background, add participants </Text>
        
      </View>
    )
  }
}