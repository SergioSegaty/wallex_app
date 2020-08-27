import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/views/Login/login';
import Home from './src/views/Home/home';
import Extrato from './src/views/Extrato/extrato';
import Perfil from './src/views/Perfil/perfil';


export default function App() {
  return (
    <>
      <StatusBar/>
      <Perfil/>
    </>
  );
}
