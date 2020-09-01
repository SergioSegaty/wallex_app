import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/views/Login/login";
import Home from "./src/views/Home/home";
import Extrato from "./src/views/Extrato/extrato";
import Perfil from "./src/views/Perfil/perfil";
import Transacao from "./src/views/Transacoes/transacao";
import DadosPessoais from "./src/views/Transacoes/dadosPessoais";
import Confirmacao from "./src/views/Transacoes/confirmacao";
import Pagamento from "./src/views/Pagamento/pagamento";
import PagamentoFinalizado from "./src/views/Pagamento/pagamentoFinalizado";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./src/reducers/reducer";
import AvatarPicker from './src/components/imagePicker'

const Stack = createStackNavigator();
const store = createStore(rootReducer);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Extrato" component={Extrato} />
            <Stack.Screen name="Dados" component={DadosPessoais} />
            <Stack.Screen name="Transacao" component={Transacao} />
            <Stack.Screen name="Pagamento" component={Pagamento} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Confirmacao" component={Confirmacao} />
            <Stack.Screen name="Finalizado" component={PagamentoFinalizado} />
            <Stack.Screen name="ImgPicker" component={AvatarPicker}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
