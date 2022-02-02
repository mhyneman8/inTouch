import { uniqueId } from 'lodash';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import projects from './project-data';

// export default class Fundraising extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       projectArray: [],
        // {
        //   name: "spider",
        //   description: ""
        // }
      // ],
  //     newProjectName: '',
  //   }
  // }
  
  // projectList =() => {
  //     return projects.map((project) => {
  //       return (
  //         <View key={Element.key} style={{margin: 10}}>
  //           <Text>{project.name}</Text>
  //           <Text>{project.description}</Text>
  //         </View>
  //       );
  //     });
  //   };


  export default function Fundraising() {
    const [projectName, setProjectName] = useState(null);
    const [projectArray, setProjectArray] = useState([]);
  // console.log(projectName + " name")
  // console.log(projectArray + " array")
  //   const addProject = () => {
  //     console.log(projectName)

  //     let title = projectName;

  //     AsyncStorage.getItem


  //     setProjectArray = [ ...projectArray, projectName] 
  //     // this.setState({ projectArray: [ projectName ] });
  //     console.log(projectArray)
  // }

  // const newName = () => {
  //   setProjectName
  //   console.log(projectName)
  // }

  // render() {
    // const project = projects;

    const addNewProject = async () => {
      setProjectArray({...projectArray, projectName})
    }

    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Title</Text>
        <Text>Notification</Text>
        <TextInput
          style={styles.input}
          value={projectName}
          placeholder={"Enter new project name"}
          onChangeText={setProjectName}
          onSubmitEditing={addNewProject}
          />

          {/* <TextInput
          name="goal"
            keyboardType='numeric'
          /> */}
          {/* <TextInput
            name="description"
            multiline
          /> */}

        {/* <Text>{this.state.projectList[0].name}</Text> */}
        <View>
          <Text>Array: {projectArray[1]}</Text>
          {/* { (projectArray === null) 
            ? <Text>Null</Text>
            : <Text>{projectArray}</Text>
          } */}
          
          {/* {this.state.projectList.map((item, index) => {
            return (
              <View key={item}>
                <Text>{item}</Text>
              </View>
            )
          })} */}
        </View>

          

        {/* <Text>Project Pics and progress bar</Text>
        <Text>Click on project to see updates and description of fundraising project</Text>

        <Text>Dashboard</Text>
        <Button title="add">+</Button> */}
        
      </View>
    )
  // }
}

const styles = StyleSheet.create({
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
  },
  dateText: {
      margin: 16,
  },
})