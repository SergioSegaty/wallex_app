import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import styled from "styled-components";
import LoginPanel from "./loginPanel";
import { connect } from "react-redux";

const LoginImage = styled.Image`
  height: 300px;
  width: 80%;
`;

const ImageView = styled.View`
  align-items: flex-start;
`;

const BG = styled.ScrollView`
  background-color: #95c285;
  padding: 20px;
`;

function Login(props) {
  const user = {
    login: props.user.login,
    senha: props.user.senha
  }

  const _handleLogin = (loginData) => {
    // if (loginData.login === user.login && loginData.senha === user.senha) {
    //   props.navigation.navigate("Home");
    // } else {
    //   Alert.alert("Autenticação", "Login ou senha não conferem", [
    //     { text: "Ok" },
    //   ]);
    // }
    props.navigation.navigate("Home");
  };

  return (
    <BG>
      <ImageView>
        <LoginImage source={require("../../../assets/hostess.png")} />
      </ImageView>
      <LoginPanel onLoginCallback={(loginData) => _handleLogin(loginData)} />
    </BG>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
};

export default connect(mapStateToProps)(Login);
