import { TabActions } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Connect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          _id: 1,
          text: 'started from the bottom',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'El',
            // avatar: '',
          },
        },
      ],
    };
  }


  // append new messages to chat view
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      // <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ flex: 1 }}>
        <Text>menu</Text>
        <Text>Title</Text>
        <Text>Notifications</Text>


          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
            />
            { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
 }

{/* 
WILL NEED TO CHANGE FROM TEST MODE TO PRODUCTION MODE (eventually)(5.3)
Created 1/31/22; will need to change security rules after 30 days (so by 3/2)
5.3: https://careerfoundry.com/en/course/full-stack-immersion/exercise/real-time-apps#storing-chat-data-cloud-firestore

other features to consider adding: 
 - system messages for when new users join chat? (5.2) 
 - custom bubble colors (5.2)
 - ACCESSIBILITY (5.2) 
 
 5.2: https://careerfoundry.com/en/course/full-stack-immersion/exercise/chat-ui-accessibility#summary
 */}

        {/* <Text>Connect</Text> 
        <Text>Team & Community options</Text>
        <Text>Maybe firebase for backend. category : team/ or client to switch between sections</Text> */}
        <Text>Search</Text>
        <Text>List of contacts</Text>
      </View>
    )
  }
}