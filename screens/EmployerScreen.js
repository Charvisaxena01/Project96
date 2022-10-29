import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity , ImageBackground} from 'react-native';
import AppHeader from "./AppHeader"
import Form2 from '../components/form2'

export default class EmployerScreen extends React.Component{
  render(){
    return(
      <View>
       <AppHeader/>
         <Form2/>
      </View>
    )
  }
}