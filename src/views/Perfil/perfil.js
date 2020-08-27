import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const NameContainer = styled.View`
  margin-top: 30px;
  align-items: center;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: #95C285;
  elevation: 10;
  width: 94%;
  align-self: center;

`;

const Name = styled.Text`
font-size: 35px;
`

function Perfil(props) {
  return (
    <>
      <NameContainer>
        <Name> Agatha Waillie </Name>
      </NameContainer>
    </>
  );
}

export default Perfil;
