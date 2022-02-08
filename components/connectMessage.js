import { TabActions } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import NetInfo from '@react-native-community/netinfo';
// import CustomActions from './CustomActions';
// import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';


// const firebase = require('firebase');
// require('firebase/firestore');
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Stack = createStackNavigator();

export default class ConnectMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {
        _id: '',
      },
      uid: 0,
    };

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAWz9TnEzn8AcXTd9y_HGATKesMdXQtCn8",
        authDomain: "intouch-62b9e.firebaseapp.com",
        projectId: "intouch-62b9e",
        storageBucket: "intouch-62b9e.appspot.com",
        messagingSenderId: "464637178122",
        appId: "1:464637178122:web:42f1d40d0aa18982a38af3",
        measurementId: "G-KXP8BGGWZ8",
      });
    }
    this.referenceChatMessages = firebase.firestore().collection("messages");
  }

  async getMessages() {
    let messages = '';
    try {
      messages = await AsyncStorage.getItem('messages') || [];
      this.setState({
        messages: JSON.parse(messages)
      });
    }
    catch (error) {
      console.log(error.message);
    }
  };

  componentDidMount() {

    // determine whether user is online or not
    // NetInfo.fetch().then(connection => {
    //   if (connection.isConnected) {
    //     console.log('online');
    //     this.setState({ isConnected: true });

    // create a reference to the messages collection
    this.referenceMessages = firebase.firestore().collection('messages');

    // listen to authentication events
    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) { await firebase.auth().signInAnonymously(); }

      // update user state with currently active user data
      this.setState({
        messages: [],
        user: {
          _id: user.uid,
          // name: name,
        },
        // loggedInText: `${this.props.route.params.name} has entered the chat`,
      });
      this.unsubscribe = this.referenceMessages
        .orderBy('createdAt', 'desc')
        .onSnapshot(this.onCollectionUpdate);
    });

    //   } else {
    //     console.log('offline');
    //     this.setState({ isConnected: false });
    //     // load messages from asyncStorage
    //     this.getMessages();
    //   }
    // });
  }

  // retrieve current data in collection and store to state when there are updates to the collection
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      var data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
        image: data.image,
        location: data.location,
      });
    });
    this.setState({
      messages,
    });
  }

  addMessage() {
    const message = this.state.messages[0];
    // add a new message to the collection
    this.referenceMessages.add({
      _id: message._id,
      text: message.text || '',
      createdAt: message.createdAt,
      user: message.user,
      image: message.image || null,
      location: message.location || null,
    });
  }

  async saveMessages() {
    try {
      await AsyncStorage.setItem('messages',
        JSON.stringify(this.state.messages));
    } catch (error) {
      console.log(error.message);
    }
  }

  // append new messages to chat view
  onSend(messages = []) {
    this.setState(previousState => ({
      // Append new messages to the existing thread displayed on the UI
      messages: GiftedChat.append(previousState.messages, messages),
    }),
      // store new messages in firestore by calling the 'addMessage' function
      () => {
        this.addMessage();
        this.saveMessages();
      });
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#c9b6fc',
          },
          left: {
            backgroundColor: '#523d87',
          }
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
          left: {
            color: '#fff',
          }
        }}
        />
    );
  }

  // stop receiving updates about the collection once component is unmounted
  componentWillUnmount() {
    this.authUnsubscribe();
    this.unsubscribe();
  }

  render() {
    return (
      // <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ flex: 1 }}>
        <StatusBar style="auto" />
        {/* <Text>menu</Text>
        <Text>Title</Text>
        <Text>Notifications</Text> */}


        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={this.state.user}
        />
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null
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

        {/* 
        <Text>Connect</Text> 
        <Text>Team & Community options</Text>
        <Text>Maybe firebase for backend. category : team/ or client to switch between sections</Text> 
        <Text>Search</Text>
        <Text>List of contacts</Text>
        */}
      </View>
    )
  }
}
