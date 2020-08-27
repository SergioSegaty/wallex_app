import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const ExtratoI = styled.View`
  margin-bottom: 20px;
  elevation: 6;
  background-color: #95c285;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
`;

const SubContainer = styled.View``;

const Documento = styled.Text`
  font-size: 13px;
  margin-left: 25px;
`;

const Data = styled.Text`
  color: black;
  font-size: 15px;
`;
const Title = styled.Text`
  align-self: flex-start;
  font-size: 24px;
  margin-left: 10px;
`;

const Valor = styled.Text`
  color: #c72222;
  font-size: 20px;
`;

function ExtratoItem(props) {
  return (
    <ExtratoI>
      <SubContainer>
        <Title>{props.item.title}</Title>
        <Documento>Documento: {props.item.documento}</Documento>
      </SubContainer>
      <SubContainer style={{marginRight: 10}}>
        <Valor>{props.item.valor}</Valor>
        <Data>{props.item.data}</Data>
      </SubContainer>
    </ExtratoI>
  );
}

export default ExtratoItem;
