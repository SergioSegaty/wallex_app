import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const LoginLabel = styled.Text`
  font-size: 25px;
  margin-top: 25px;
  margin-left: 70px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  align-self: flex-start;
`;

const LoginInput = styled.TextInput`
  border-radius: 10px;
  width: 60%;
  height: 40px;
  background-color: white;
`;

const LoginBox = styled.View`
  width: 90%;
  height: 400px;
  background-color: #95c285;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
`;

const BtnLogin = styled.TouchableHighlight`
  width: 35%;
  height: 55px;
  margin-top: 10px;
  border-width: 2px;
  border-color: white;
  border-radius: 6px;
  padding: 15px;
  justify-content: center;
`;

const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

function LoginPanel() {
  return (
    <View style={{ alignItems: "center" }}>
      <LoginBox>
        <LoginLabel>Login</LoginLabel>
        <LoginInput></LoginInput>

        <LoginLabel>Senha</LoginLabel>
        <LoginInput></LoginInput>

        <View style={{ marginTop: 20 }}>
          <BtnLogin color="#58cc4d">
            <BtnText>Entrar</BtnText>
          </BtnLogin>
        </View>
      </LoginBox>
    </View>
  );
}

export default LoginPanel;
