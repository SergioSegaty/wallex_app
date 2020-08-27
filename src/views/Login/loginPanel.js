import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const LoginLabel = styled.Text`
  font-size: 25px;
  margin-top: 25px;
  margin-left: 70px;
  color: white;
  font-weight: bold;
  align-self: flex-start;
`;

const LoginInput = styled.TextInput`
  border-radius: 10px;
  width: 60%;
  height: 55px;
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

const BtnLogin = styled.Button`
  width: 30%;
  height: 55px;
  margin-top: 10px;
  font-weight: bold;
`;

function LoginPanel() {
  return (
    <View style={{ alignItems: "center" }}>
      <LoginBox>
        <LoginLabel>Login</LoginLabel>
        <LoginInput></LoginInput>

        <LoginLabel>Senha</LoginLabel>
        <LoginInput></LoginInput>

        <View style={{marginTop: 20}}>
          <BtnLogin color="#58cc4d" title="Entrar" />
        </View>
      </LoginBox>
    </View>
  );
}

export default LoginPanel;
