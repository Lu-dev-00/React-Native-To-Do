import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/Task';
import { Platform } from '@unimodules/core';

export default function App() {

  const[task, setTask] = useState();
  const[taskItems,setTaskItems] = useState([]);
  
 


  const handleAddTask = () => {
    Keyboard.dismiss();
    if(task != null){
      setTaskItems([...taskItems,task]);
      setTask(null);
    }else{
      console.log("task is empty")
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
       <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Things I Need To Do</Text>
      <View style={styles.items}>
        { 
          taskItems.map((item, index) =>{
            return (
            <TouchableOpacity key={index} onLongPress={() => completeTask(index)}>
              <Task  text={item} /> 
            </TouchableOpacity>
            )
          })
        }
      </View>
      
    </View>

    <KeyboardAvoidingView behaviour={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTasksWrapper}>
        <TextInput style={styles.input} placeholder={"New Task"} value={task} onChangeText={text => setTask(text)}>
        </TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
   

    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
      backgroundColor: "#1a1a1a",
  },
    tasksWrapper: {
      flex: 1,
      backgroundColor: "#1a1a1a",
      paddingTop: "25px",
      paddingHorizontal: "40px",
      
    },
    sectionTitle: {
      color: "white",
      fontWeight:"bold",
      marginBottom: '15px',
      fontSize: 24,
    },
    items: {
      
    },
    writeTasksWrapper: {
        position: "absolute",
        bottom: 60,
        width:'100%',
        flexDirection: 'row',
        justifyContent:"space-around",
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: "#242424",
      borderColor: "#0d0d0d",
      borderWidth: 1,
      borderRadius: 60,
      textAlign:"left",
      width:250,
      fontSize: 12,
      color: "white",
    },
    addWrapper: {
      width: 50,
      borderRadius: 60,
      height: 50,
      backgroundColor: "#242424",
      borderColor: "#0d0d0d",
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',    
    },
    addText: {
      fontSize: 12,
      color: "white",
      alignItems: 'center',
      justifyContent: 'center',   
      fontWeight: '100'
    }
});
