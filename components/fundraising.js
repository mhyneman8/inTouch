import { uniqueId } from 'lodash';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, SafeAreaView, KeyboardAvoidingView, Alert, TouchableOpacity, ScrollView } from 'react-native';
// import projects from './project-data';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { initializeApp } from 'firebase/app';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function Fundraising() {
  const [projectName, setProjectName] = useState();
  const [projectGoal, setProjectGoal] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [shouldShow, setShouldShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  
  const [user, setUser] = useState();

  const [projectArray, setProjectArray] = useState(
    // {title: "title1", description: "Des1", goal: 200},
    // {title: "title2", description: "Des2", goal: 400},
    // {title: "title3", description: "Des3", goal: 3030},
  );

  const app = initializeApp({
    apiKey: "AIzaSyAWz9TnEzn8AcXTd9y_HGATKesMdXQtCn8",
    authDomain: "intouch-62b9e.firebaseapp.com",
    projectId: "intouch-62b9e",
    storageBucket: "intouch-62b9e.appspot.com",
    messagingSenderId: "464637178122",
    appId: "1:464637178122:web:42f1d40d0aa18982a38af3",
    measurementId: "G-KXP8BGGWZ8",
  });

  if (firebase.apps.length === 0) {
    // initializeApp(app);
    firebase.app({});
  }
  
  // const db = getFirestore(app);

  // if (!firebase.apps.length) {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyAWz9TnEzn8AcXTd9y_HGATKesMdXQtCn8",
  //     authDomain: "intouch-62b9e.firebaseapp.com",
  //     projectId: "intouch-62b9e",
  //     storageBucket: "intouch-62b9e.appspot.com",
  //     messagingSenderId: "464637178122",
  //     appId: "1:464637178122:web:42f1d40d0aa18982a38af3",
  //     measurementId: "G-KXP8BGGWZ8",
  //   });
    // const db = getFirestore(app);
  // }
  // this.referenceProjects = firebase.firestore().collection("projects");
  
  const createProjectArray = (userName) => {
    const projectsColRef = collection(db, 'projects')
    return addDoc(projectsColRef, {
      created: serverTimestamp(),
      users: [{ name: userName }]
    });
  };

  const getProjects = () => {
    let projects = '';
    try {
      projects = AsyncStorage.getItem('projects') || [];
      // uid = await AsyncStorage.getItem('uid');
      setProjectArray({
        projects: JSON.parse(projects)
      });
      // this.setState({
      //   messages: JSON.parse(messages),
        // uid: JSON.parse(uid),
      // });
    }
    catch (error) {
      console.log(error.message);
    }
    console.log(projects)
  };

  const onCollectionUpdate = (querySnapshot) => {
    const projects = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      var data = doc.data();
      projects.push({
        title: data._title,
        description: data.description,
        // createdAt: data.createdAt.toDate(),
        goal_amt: data.goal_amt,
        current_amt: data.current_amt
      });
    });
    setProjectArray(projects)
  }

  useEffect(() => {
    // this.referenceProjects = firebase.firestore().collection('projects');
    if (projectName) {
      FirestoreService.getProjects(projectName)
        .then(projects => {
          if (projects.exists) {
            setError(null);
            setProjectArray(projects.data());
          } else {
            setError('project list not found');
            setProjectArray();
          }
        })
        .catch(() => setError('project list get fail'))
    }
  }, [projectArray, setProjectArray]);

  const list = () => {
    return projectArray.map((project) => {
      return (
        <View key={project.title} style={ styles.projectContainer }>
          { showEdit ? (
            <View>
                <MaterialCommunityIcons
                  name="delete"
                  color="purple"
                  size={20}
                  onPress={deleteProject(project.title)}
                />
                {/* <MaterialCommunityIcons
                  name="pencil"
                  color="purple"
                  size={20}
                  onPress={editProject(project.title)}
                /> */}
            </View>
            ) : null }
            
            <View styles={styles.projectItems}>
              <Text>Cause: {project.title}</Text>
              {/* <Text>{project.description}</Text> */}
              <Text>Goal: ${project.goal}</Text>
            </View>
            
          </View>
        );
      })
    }

    // const showMore = (title) => e => {
    //   setShowEdit(!showEdit)
    // }

    const deleteProject = (title) => e => {
      return Alert.alert(
        "Are you sure you want to delete this project?",
        "This can't be undone",
        [
          {
            text: "Yes",
            onPress: () => {
              setProjectArray(projectArray.filter(project => project.title !== title))
            },
          },
          {
            text: "No",
          }
        ]
      )
    };

    // const editProject = (project) => e => {
      
      
      // setShowEdit(!showEdit);
      // console.log(projectName)
      // setProjectName(project.title);
      // setProjectDescription(project.description);
      // setProjectGoal(project.goal);
      // setShouldShow(!shouldShow);

      // let projects = [...projectArray];
      // let index = projects.findIndex(el => el.name === 'name');
      // projects[index] = {...projects[index], title: project.title};
      // setProjectArray( projects );
    // }

    const startNewProject = () => {
      if((projectName === '') 
        || (projectDescription === '') 
        || (projectGoal === '')
      ) {
        Alert.alert("Must fill out all inputs")
      } else {
        console.log(projectName)
        console.log(projectGoal)
        setProjectArray((projectArray) => 
          [...projectArray, {title: projectName, description: projectDescription, goal: projectGoal}]
        ),
        setProjectName('');
        setProjectDescription('');
        setProjectGoal('');
        setShouldShow(!shouldShow)
      }
    }

    const closeProject = () => {
      setShouldShow(!shouldShow);
      setProjectName('');
      setProjectDescription('');
      setProjectGoal('');
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={20}
            color="#c9b6fc"
            onPress={() => setShowEdit(!showEdit)}
          />
          <Text style={{ flex: 1, marginTop: 25 }} >
            {list()}
          </Text>
          
          {shouldShow ? (
              <KeyboardAvoidingView 
                style={styles.inputContainer}
              >
              
                <MaterialCommunityIcons
                  name="close"
                  color="grey"
                  size={30}
                  onPress={closeProject}
                />

                { projectName === "" ? (
                  <View>
                    <TextInput
                      style={styles.input}
                      value={projectName}
                      placeholder={"Enter Project Name"}
                      onChangeText={setProjectName}
                    />
                  
                    <TextInput
                      style={styles.input}
                      value={projectGoal}
                      onChangeText={setProjectGoal}
                      placeholder={"Enter Project Goal"}
                      name="goal"
                      keyboardType='numeric'
                    /> 
                
                    <TextInput
                      style={styles.input}
                      value={projectDescription}
                      onChangeText={setProjectDescription}
                      placeholder={"Enter project Description"}
                      name="description"
                      multiline
                    /> 
                    <Button 
                      title="Submit"
                      style={{ width: 50, height: 50 }}
                      // onPress={startNewProject}
                      onPress={getProjects}
                    />

                  </View>
                ) : (
                  <View>
                    <TextInput
                      style={styles.input}
                      value={projectName}
                      placeholder={projectName}
                      onChangeText={setProjectName}
                    />
                  
                    <TextInput
                      style={styles.input}
                      value={projectGoal}
                      onChangeText={setProjectGoal}
                      placeholder={projectGoal}
                      name="goal"
                      keyboardType='numeric'
                    /> 
                
                    <TextInput
                      style={styles.input}
                      value={projectDescription}
                      onChangeText={setProjectDescription}
                      placeholder={projectDescription}
                      name="description"
                      multiline
                    /> 
                    <TouchableOpacity
                      style={ styles.button }
                      onPress={startNewProject}
                    >
                      <Text style={ styles.buttonText }>
                        Submit
                      </Text>
                    </TouchableOpacity>

                    {/* <Button 
                      title="Submit"
                      style={ styles.button }
                      onPress={startNewProject}
                    /> */}
                  </View>
                  
                ) }
            </KeyboardAvoidingView>
          ) : (
            <View>
              <MaterialCommunityIcons
                style={ styles.add }
                name="plus"
                color="purple"
                size={40}
                onPress={() => setShouldShow(!shouldShow)}
              />  
            </View>
          ) }
          {/* <Text>Project Pics and progress bar</Text>
          <Text>Click on project to see updates and description of fundraising project</Text>
          */}

          
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