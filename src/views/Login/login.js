import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import LoginPanel from "./loginPanel";

const LoginImage = styled.Image`
  width: 100%;
  height: 400px;
  background-color: white;
  margin-bottom: 10px;
  
`;

function Login() {
  return (
    <View styles={{flexDirection: 'row'}}>
      <LoginImage />
      <LoginPanel />
    </View>
  );
}

export default Login;
