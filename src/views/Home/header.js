import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;
  margin-top: 25px;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  background-color: grey;
  border-radius: 80px;
`;

const ProfileName = styled.Text`
  color: #95C285;
  font-weight: bold;
  font-size: 20px;
  margin-left: -40px;
`;

function Header() {
  return (
    <Container>
      <Avatar />
      <View>
        <ProfileName>Sérgio Segaty</ProfileName>
      </View>
      <View></View>
    </Container>
  );
}

export default Header;
