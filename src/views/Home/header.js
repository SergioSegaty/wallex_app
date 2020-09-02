import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

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
  color: #95c285;
  font-weight: bold;
  font-size: 20px;
  margin-left: -55px;
`;


function Header(props) {
  return (
    <Container>
      <Avatar />
      <View>
        <ProfileName>{props.usuario.nome}</ProfileName>
      </View>
      <View></View>
    </Container>
  );
}


const mapStateToProps= (state) => {
  	return {
      usuario: state.transacao.user
    }
}

export default connect(mapStateToProps)(Header);
