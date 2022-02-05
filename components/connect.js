import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default class Connect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRooms: [],
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
    // this.referenceChatRooms = firebase.firestore().collection('chatRooms');
  }

  componentDidMount() {
    console.log('initial state: ', this.state);
    // console.log(this.referenceChatRooms)

    this.referenceChatRooms = firebase.firestore().collection('chatRooms');

    // listen to authentication events
    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) { await firebase.auth().signInAnonymously(); }
    })

    // update user state with currently active user data
    this.setState({
      chatRooms: [],
      user: {
        _id: '',
        // _id: user.uid,
        // name: name,
      },
    });

    // * what's happening here *
    this.unsubscribe = this.referenceChatRooms
      // .orderBy('createdAt', 'desc')
      .onSnapshot(this.onCollectionUpdate);
  }

  // retrieve current data in collection and store to state when there are updates to the collection
  onCollectionUpdate = (querySnapshot) => {
    const chatRooms = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      var data = doc.data();
      chatRooms.push({
        _id: data._id,
        user: data.user,
        user2: data.user2,
        // createdAt: data.createdAt.toDate(),

      });
    });
    this.setState({
      chatRooms,
      // chatRooms: JSON.parse(chatRooms),
    });

    console.log('updated state: ', this.state);
    console.log('chat rooms: ', this.state.chatRooms);
    console.log('chat room ids: ', JSON.stringify(this.state.chatRooms.user));
  }

  render() {
    return (
      // <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ flex: 1 }}>

        <GiftedChat
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

        <Text>Connect</Text>
        <Text>Team & Community options</Text>
        <Text>Search</Text>
        <Text>List of contacts</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    margin: 20,
  },
  subTitle: {
    fontSize: 30,
    margin: 20,
  },
  container: {
    width: 200,
    height: 200,
    margin: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    // flex: 1,
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: '#c5e8ec',
    width: 190,
    height: 25,
    margin: 3,
  }
});