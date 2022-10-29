import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity , ImageBackground} from 'react-native';
import AppHeader from "./AppHeader"
import Form1 from '../components/form1'

export default class EmployeeScreen extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
  <Form1/>
      </View>
    )
  }
}