import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");

  const data = [{
    id:1,
    name:'task 1',
    description:'Description of task 1'
  },
  {
    id:2,
    name:'task 1',
    description:'Description of task 1'
  }];
  
  return (
    <View style={styles.container}>

    <Text style={styles.text}>Simple todo</Text>
    <TextInput
     placeholder='Enter name of task'
     value={name}
     onChangeText={(text)=>setName(text)}
     style={styles.input}
     placeholderTextColor="white"
     ></TextInput>

    <TextInput
     placeholder='Enter name of description'
     value={desc}
     onChangeText={(text)=>setDesc(text)}
     style={styles.input}
     placeholderTextColor="white"
     ></TextInput>
     <FlatList
     data={data}
     keyExtractor={(item) => item.id.toString()}
     renderItem={({ item }) => todoDetails(item)}
     />
    </View>
  )
}

export default App;

const todoDetails =(item)=>{
  return  (<View style={styles.list}>
    <Text style={styles.text}>{item.id}</Text>
    <Text style={styles.text}>{item.name}</Text>
    <Text style={styles.text}>{item.description}</Text>

  </View>);
};



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems:'center',
    padding:5,
    // justifyContent:'center',

  },
  text:{
    marginTop:40,
    fontSize:20,
    fontWeight:'700',
    color:'white'
  },
  input:{
    marginTop:20,
    height:50,
    borderColor:'gray',
    borderWidth:2,
    paddingHorizontal:15,
    width:350,
    borderRadius:20,
    color:'white',
  },
  list:{
    flex:1,
    flexDirection:'column'
  }

})
