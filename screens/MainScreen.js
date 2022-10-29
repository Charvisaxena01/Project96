import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity , ImageBackground} from 'react-native';
import AppHeader from './AppHeader';
import EmployeeScreen from "./EmployeeScreen"
import EmployerScreen from './EmployerScreen'

export default class MainScreen extends React.Component {
  constructor(props){
super(props)
  }
  render() {
    return (
      <View style={styles.container}>
 <AppHeader />
    <ImageBackground source={require("../images/Bg")}
    style = {styles.img}
      >
        <View style={styles.body}>
        <Text style={styles.txt}>Choose what you are-</Text>
          <TouchableOpacity style={styles.button1} 
           onPress={() => this.props.navigation.navigate("EmployeeScreen")}
          >
            <Text> Employee </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}
          onPress={() => this.props.navigation.navigate("EmployerScreen")}
         >
          <Text> Employer </Text>
          </TouchableOpacity>
        </View>
      //  </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   // flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 1,
  },
  body: {
  flex: 1,
    justifyContent: 'center',
width:315,

  //backgroundColor: 'black',
    padding: 30,
  },
  button1: {
     width:150,
    height:100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'brown',
    backgroundColor:'magenta',
    marginTop:20,  
    marginLeft:60
  },
  button2:{
     width:150,
    height:100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'brown',
    backgroundColor:'cyan',
    marginTop:20,
    marginLeft:60
    
  
  },
  txt:{
    color: "white"
  }
});
