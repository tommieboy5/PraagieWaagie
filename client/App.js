import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import LoginScreen from './src/screens/LoginScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import DashBoardScreen from './src/screens/DashboardScreen'
import * as firebase from 'firebase'
import {firebaseConfig} from './config'

firebase.initializeApp(firebaseConfig)

export default class App extends React.Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen: LoginScreen, 
  DashBoardScreen: DashBoardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
