import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import NovaTransferencia from "./novaTransferencia";
import Historico from "./historico";

const PerfilContainer = styled.View`
  margin-top: 30px;
  align-items: center;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: #95C285;
  width: 94%;
  align-self: center;
  height: 75px;
  justify-content: center;
  elevation: 20;

`;

const Name = styled.Text`
font-size: 30px;
font-weight: bold;
`

const ProfilePicture = styled.Image`
margin-top: 25px;
border-radius: 120px;
height: 200px;
width: 200px;
align-self: center;
`

function Perfil(props) {
  return (
    <>
      <PerfilContainer>
        <Name> Lanna Souza </Name>
        </PerfilContainer>
        <ProfilePicture
        source={require('../../../assets/profilePics/lanna-souza.jpg')}/>

        <NovaTransferencia/>

        <Historico/>
    </>
  );
}

export default Perfil;
