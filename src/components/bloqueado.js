import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

const BloqueioBox = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

const ValorBloqueio = styled.Text`
  color: red;
  font-size: 20px;
  font-weight: 500;
`;

const TextBloqueio = styled.Text`
  color: #5e98dd;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

function Bloqueio(props) {
  return (
    <BloqueioBox>
      <TextBloqueio>Bloqueado</TextBloqueio>
      <ValorBloqueio>R$ {props.bloqueado}</ValorBloqueio>
    </BloqueioBox>
  );
}

const mapStateToProps = (state) => {
  return {
    bloqueado: state.transacao.user.bloqueado
  }
}

export default connect(mapStateToProps)(Bloqueio);
