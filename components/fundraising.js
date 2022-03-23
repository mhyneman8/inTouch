import { uniqueId } from 'lodash';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, SafeAreaView, KeyboardAvoidingView, Alert, TouchableOpacity, ScrollView } from 'react-native';
// import projects from './project-data';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { initializeApp } from 'firebase/app';

export default function Fundraising() {
 
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAWz9TnEzn8AcXTd9y_HGATKesMdXQtCn8',
  authDomain: 'intouch-62b9e.firebaseapp.com"',
  databaseURL: 'https://intouch-62b9e.firebaseio.com',
  projectId: 'intouch-62b9e',
  storageBucket: 'intouch-62b9e.appspot.com',
  messagingSenderId: '464637178122',
  appId: '1:464637178122:web:42f1d40d0aa18982a38af3',
  measurementId: 'G-KXP8BGGWZ8',
};

initializeApp(firebaseConfig);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <Text>Fundraising page</Text>

        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // justifyContent: 'center', 
    paddingTop: StatusBar.currentHeight,
    // alignItems: 'center' 
  },
  scrollView: {
    marginHorizontal: 20,
    width: '100%',
    height: '100%'
  },
  inputContainer: {
    flex: 1,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center'
  },
  input: {
      height: 40,
      width: '80%',
      margin: 12,
      borderWidth: 1,
      justifyContent: 'center', 
      alignItems: 'center',
      borderRadius: 8,
      padding: 10
  },
  dateText: {
      margin: 16,
  },
  add: {
    alignSelf: 'center',
    backgroundColor: "#c9b6fc", 
    borderRadius: 30, 
    overflow: 'hidden',
    width: 60, 
    height: 60,
    marginTop: 30, 
    left: -20,
    padding: 10,
    marginTop: 128,
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // flex: 1,
  },
  projectContainer: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    // width: '100%',
    // marginVertical: 10,
    // margin: 20
  },
  projectItems: {
    margin: 20,
    width: 40,
    height: 40,
    padding: 20,
  },
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