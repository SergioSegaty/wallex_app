import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const ItemContainer = styled.View`
  background-color: #95c285;
  elevation: 10;
  margin-bottom: 15px;
  border-radius: 6px;
  margin-left: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

`;

const Data = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

const Desc = styled.Text`
  font-size: 22px;
  font-weight: 600;
  text-align: left;
`;

const Valor = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: #c72222;
  width: 20%;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
`;

export default function ItemsHistorico(props) {
  return (
    <>
      <ItemContainer>
        <Data>{props.item.data}</Data>
        <Desc>{props.item.desc}</Desc>
        <Valor>{props.item.valor}</Valor>
      </ItemContainer>
    </>
  );
}
