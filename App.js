import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from "./screens/LoginScreen"
import LoadingScreen from "./screens/LoadingScreen"
import EmployeeScreen from "./screens/EmployeeScreen"
import EmployerScreen from './screens/EmployerScreen'
import MainScreen from "./screens/MainScreen"

import {createAppContainer,createSwitchNavigator} from 'react-navigation'


export default class App extends React.Component {
  render(){
  return (
    <View>
     <AppContainer/>
    </View>
  );
}
}

var AppNavigator = createSwitchNavigator({
  //LoginScreen:LoginScreen,
  //LoadingScreen:LoadingScreen,
  //MainScreen:MainScreen,
 EmployeeScreen:EmployeeScreen,
  EmployerScreen:EmployerScreen,
  

})


const AppContainer = createAppContainer(AppNavigator)