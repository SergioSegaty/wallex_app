import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import importedPic from "../../../assets/profilePics/will-smith.jpg";
import { FlatList } from "react-native-gesture-handler";

const MainContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: #3d992e;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-left: -5px;
`;

const ProfileContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

const ProfileAvatar = styled.Image`
  border-radius: 15px;
  width: 100px;
  height: 100px;
`;

const ProfileBox = styled.TouchableHighlight`
  align-items: center;
  margin-right: 15px;
`;

const ProfileName = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-top: 5px;
`;

const mockContatos = {
  nome: "Will Smith",
  profilePic: importedPic,
};

function ContactCarousel(props) {
  const renderContato = ({item}) => {
    return (
      <ProfileBox
        underlayColor="none"
        onPress={() => props.onPressCallback(mockContatos.nome)}
      >
        <>
          <ProfileAvatar source={mockContatos.profilePic} />
          <ProfileName>{item.nome}</ProfileName>
        </>
      </ProfileBox>
    );
  };

  return (
    <MainContainer>
      <Title> Contatos </Title>
      <ProfileContainer>
        <FlatList
        contentContainerStyle={
          {justifyContent: 'center', padding: 5, flexGrow: 1}
        }
          horizontal={true}
          data={props.contatos}
          renderItem={renderContato}
          keyExtractor={(item) => item.cpf}
        />
      </ProfileContainer>
    </MainContainer>
  );
}

export default ContactCarousel;
