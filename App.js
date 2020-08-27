import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/views/Login/login';
import Home from './src/views/Home/home';


export default function App() {
  return (
    <View>
      <StatusBar/>
      <Home/>
    </View>
  );
}
