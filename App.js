import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/views/Login/login';
import Home from './src/views/Home/home';
import Extrato from './src/views/Extrato/extrato';
import Perfil from './src/views/Perfil/perfil';
import DadosPessoais from './src/views/Transacoes/dadosPessoais';
import Transacao from './src/views/Transacoes/transacao';
import Confirmacao from './src/views/Transacoes/confirmacao';
import Pagamento from './src/views/Pagamento/pagamento';
import PagamentoFinalizado from './src/views/Pagamento/pagamentoFinalizado';


export default function App() {
  return (
    <>
      <StatusBar/>
      <DadosPessoais/>
    </>
  );
}
