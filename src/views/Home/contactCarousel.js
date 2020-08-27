import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const MainContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: #3d992e;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const ProfileContainer = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

const ProfileAvatar = styled.Image`
  border-radius: 15px;
  resize-mode: stretch;
  width: 100px;
  height: 100px;
`;

const ProfileBox = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const ProfileName = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-top: 5px;
`;

const GreenBox = styled.View`
  background-color: rgba(147, 223, 86, 0.44);
  width: 100%;
  height: 100%;
`;

function ContactCarousel() {
  return (
    <MainContainer>
      <Title> Contatos </Title>
      <ProfileContainer>
        <ProfileBox>
          <ProfileAvatar
            source={require("../../../assets/profilePics/will-smith.jpg")}
          />
          <ProfileName>Will W. Smith</ProfileName>
        </ProfileBox>
        <ProfileBox>
          <ProfileAvatar
            source={require("../../../assets/profilePics/will-smith.jpg")}
          />
          <ProfileName>Will W. Smith</ProfileName>
        </ProfileBox>
        <ProfileBox>
          <ProfileAvatar
            source={require("../../../assets/profilePics/will-smith.jpg")}
          />
          <ProfileName>Will W. Smith</ProfileName>
        </ProfileBox>
      </ProfileContainer>
    </MainContainer>
  );
}

export default ContactCarousel;
