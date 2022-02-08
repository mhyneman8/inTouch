import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.toggleCategory}>
          <Text style={styles.toggleLeft}>TEAM</Text>
          <Text style={styles.toggleRight}>CLIENTS</Text>
        </View>

        <View style={styles.search}>
          <MaterialCommunityIcons name="account-search" color={'gray'} size={16}/>
          <Text style={{paddingLeft: 10, color: 'gray'}}>Search</Text>
        </View>

        <View   
        style={[styles.container, { backgroundColor: 'white' }]}
        shadowOffset={{ width: 0, height: 2}}
        shadowColor='#000'
        shadowOpacity={0.5}
        shadowRadius={2}
        >
          <View>
            {this.state.chatRooms.map(({ _id, user2 }) => (
              <View style={styles.row}>
                <MaterialCommunityIcons name="account-circle" color={'darkgray'} size={30}/>
                <TouchableOpacity style={styles.button}
                  onPress={() => this.props.navigation.navigate('Message')}>
                  <Text style={styles.chats} key={_id}>{user2}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  toggleCategory: {
    marginTop: 70,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    width: 335,
    height: 40,
  },
  toggleLeft: {
    textAlign: 'center',
    paddingTop: 10,
    width: 166,
    fontWeight: 'bold',
    opacity: .35,
    // borderWidth: 1,
    // borderTopLeftRadius: 20,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
    // shadowOffset: { width: 0, height: 2},
    // shadowColor:'#000',
    // shadowOpacity:0.5,
    // shadowRadius:2,
  },
  toggleRight: {
    paddingTop: 10,
    textAlign: 'center',
    width: 166,
    fontWeight: 'bold',
    borderRadius: 20,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    width: 335,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
    backgroundColor: 'white'
  },
  container: {
    width: 355,
    height: 500,
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    paddingTop: 10,
    paddingLeft: 10,
  },
  button: {
    left: 20,
    width: 190,
  },
  chats: {
    fontSize: 18
  }
});