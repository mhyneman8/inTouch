import { uniqueId } from 'lodash';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
// import projects from './project-data';
import { MaterialCommunityIcons } from '@expo/vector-icons';


  export default function Fundraising() {
    const [projectName, setProjectName] = useState();
    const [projectGoal, setProjectGoal] = useState();
    const [projectDescription, setProjectDescription] = useState();
    const [shouldShow, setShouldShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const [projectArray, setProjectArray] = useState([
      {title: "title1", description: "Des1", goal: 200},
      {title: "title2", description: "Des2", goal: 400},
      {title: "title3", description: "Des3", goal: 3030},
    ]);

    const list = () => {
      return projectArray.map((project) => {
        return (
          <View key={project.title} style={{margin: 10}}>
            {/* <MaterialCommunityIcons
              name="dots"
              color="purple"
              size={20}
            /> */}

            <Button
              title="..."
              onPress={() => setShowEdit(!showEdit)}
            />

            <Text>{project.title}</Text>
            <Text>{project.description}</Text>
            <Text>{project.goal}</Text>
            
            { showEdit ? (
              <View>
            <MaterialCommunityIcons
              name="delete"
              color="purple"
              size={36}
            />
            <MaterialCommunityIcons
              name="pencil"
              color="purple"
              size={36}
            />
            </View>
            ) : null }
          </View>
        );
      })
    }

    const startNewProject = () => {
      setProjectArray((projectArray) => 
        [...projectArray, {title: projectName, description: projectDescription, goal: projectGoal}]
      ),
      setShouldShow(!shouldShow)
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ flex: 2, marginTop: 25 }} >
          {list()}</Text>
        
        {shouldShow ? (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="close"
                size={30}
                onPress={() => setShouldShow(!shouldShow)}
              />
              
              <TextInput
                style={styles.input}
                value={projectName}
                placeholder={"Enter new project name"}
                onChangeText={setProjectName}
              />

            <TextInput
              style={styles.input}
              value={projectGoal}
              onChangeText={setProjectGoal}
              placeholder={"Enter Goal Amount"}
              name="goal"
              keyboardType='numeric'
            /> 
            
            <TextInput
              style={styles.input}
              value={projectDescription}
              onChangeText={setProjectDescription}
              placeholder={"Describe Project..."}
              name="description"
              multiline
            /> 

            <Button 
              title="Submit"
              style={{ width: 50, height: 50 }}
              onPress={startNewProject}
            />

          </View>
        ) : (
          <View>
            <MaterialCommunityIcons
              style={{ backgroundColor: "grey", borderRadius: 50, width: 60, height: 60}}
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

        
      </View>
    )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    width: '100%',
  },
  input: {
      height: 40,
      width: '80%',
      margin: 12,
      borderWidth: 1,
      justifyContent: 'center', 
      alignItems: 'center'
  },
  dateText: {
      margin: 16,
  },
})