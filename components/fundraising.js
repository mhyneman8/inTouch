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
    const [projectName, setProjectName] = useState();
    const [projectArray, setProjectArray] = useState([
      {title: "title1", description: "Des1"},
      {title: "title2", description: "Des2"},
      {title: "title3", description: "Des3"},
    ]);

    // const pName = projectArray.map(project => project.title)

    const list = () => {
      return projectArray.map((project) => {
        return (
          <View key={project.title} style={{margin: 10}}>
            <Text>{project.title}</Text>
            <Text>{project.description}</Text>
          </View>
        );
      })
    }
 
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

        <Text>{list()}</Text>
        
        <TextInput
          style={styles.input}
          value={projectName}
          placeholder={"Enter new project name"}
          onChangeText={setProjectName}
          onSubmitEditing={() => setProjectArray((projectArray) => 
              [...projectArray, {title: projectName, description: 'testing'}]
            )}
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