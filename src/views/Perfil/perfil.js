import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import NovaTransferencia from "./novaTransferencia";
import Historico from "./historico";
import { connect } from "react-redux";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useIsFocused } from '@react-navigation/native';

const PerfilContainer = styled.View`
  margin-top: 30px;
  align-items: center;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: #95c285;
  width: 94%;
  align-self: center;
  height: 75px;
  justify-content: center;
  elevation: 20;
`;

const Name = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const ProfilePicture = styled.Image`
  margin-top: 25px;
  border-radius: 120px;
  height: 200px;
  width: 200px;
  align-self: center;
`;

/**
 * Makes a Dispatch and Routes to the next Screen
 * @param {any} props 
 */
const _handleNovaTransf = (props) => {
  props.dispatch({
    type: "transacao/novaTransacao/favorecido",
    item: props.perfil,
  });
  props.navigation.navigate("Transacao");
};

function Perfil(props) {
  const isFocused = useIsFocused();

  return (
    <>
      <PerfilContainer>
        <Name>{props.perfil.nome}</Name>
      </PerfilContainer>
      {!props.perfil.profilePic ? (
        <ProfilePicture
          source={require("../../../assets/profilePics/avatar.png")}
        />
      ) : (
        <ProfilePicture source={{ uri: props.perfil.profilePic }} />
      )}
      <TouchableHighlight
        style={{ alignSelf: "center", borderRadius: 12, padding: 5 }}
        underlayColor={'rgba(12,145,146,0.6)'}
        onPress={() => {
          props.navigation.navigate("ImgPicker");
        }}
      >
        <Text>Editar Imagem</Text>
      </TouchableHighlight>
      <NovaTransferencia onPressCallback={() => _handleNovaTransf(props)} />
      <Historico extrato={props.perfil.transacoes} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    perfil: state.perfil.selecao,
  };
};

export default connect(mapStateToProps)(Perfil);
