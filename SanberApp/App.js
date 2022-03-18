import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Telegram from './Tugas/Tugas9/Telegram';
import TelegramUI from './Tugas/Tugas9/App'


export default function App() {
  return (
  <TelegramUI />
  // <View style={styles.container}>
  // <Text>Open up App.js to start working on your app!</Text>
  // </View>
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