import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert,KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import { useState } from 'react';

export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

   

  const handelAddTask=()=>{
    Keyboard.dismiss();
   setTaskItems([...taskItems,task]);
   setTask(null);
  }
  
  const completeTask=(index)=>{
   let itemscopy=[...taskItems];
   itemscopy.splice(index,1);
   setTaskItems(itemscopy);
  }
   
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle} >Today's Tasks</Text>
        <View style={styles.items}>
          {/* this is where task wil come */}
          {
            taskItems.map((item,index)=>{
           return (
            <TouchableOpacity  key={index} onPress={()=>completeTask(index)} >
              <Task text={item} />
            </TouchableOpacity>
           )
            })
          }
          {/* <Task text={'task 1'} />
          <Task text={'task 2'} />
          <Task text={'task 3'} /> */}
        
        </View>
      </View>
    {/* write the task  */}
   <KeyboardAvoidingView
   behavior={Platform.OS==="ios" ? "padding" : "height"}
   style={styles.writeTextwraper}
   >
     <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)} />

     <TouchableOpacity onPress={()=> handelAddTask()}>
      <View style={styles.addWraper}  >
        <Text style={styles.addText} >+</Text>
      </View>
     </TouchableOpacity>
     </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  taskWrapper: {
    paddingTop:80,
    paddingHorizontal:20,

  },
  
  sectionTitle: {
    fontSize:24,
    fontWeight:"bold",
   

  },
  items :{
    marginTop:30,
  },
  writeTextwraper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'

  },

  input:{
   paddingHorizontal:15,
   paddingVertical:15,
   backgroundColor:'#fff',
   borderRadius:60,
   borderColor:'#C0C0C0',
   borderWidth:1,
   width:250

  },
  addWraper:{
   width:60,
   height:60,
   backgroundColor:'#fff',
   borderRadius:60,
   justifyContent:'center',
   alignItems:'center',
   borderColor:'#C0C0C0',
   borderWidth:1,

  },
  
  addText:{

  }


});
