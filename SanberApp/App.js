<<<<<<< HEAD
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Tugas11/LoginScreen';
import About from './Tugas11/AboutScreen';
const Stack = createStackNavigator();

=======
import React  from 'react';
import { Settings, StyleSheet, Text, View } from 'react-native';
import Tugas13 from './Tugas13/index'


export default function App() {
  return (
  <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    Color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
>>>>>>> f56a5d5594bb3c49af56f2ae7c42903ee25267ce
