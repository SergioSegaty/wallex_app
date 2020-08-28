import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #95c285;
`;

const ImagemBoleto = styled.Image`
  height: 60%;
  width: 90%;
`;

const BtnVoltar = styled.TouchableHighlight`
  width: 115px;
  height: 80px;
  align-items: center;
  margin-bottom: 10px;
  border-color: white;
  border-width: 2px;
  border-radius: 7px;
  justify-content: center;
`;

const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 10%;
  color: white;
`;

export default function PagamentoFinalizado() {
  return (
    <Container>
        <Title>Finalizado</Title>
        <ImagemBoleto
          resizeMode="contain"
          source={require("../../../assets/boleto.png")}
          style={{ borderRadius: 4 }}
        />
      <BtnVoltar>
        <BtnText>Voltar</BtnText>
      </BtnVoltar>
    </Container>
  );
}
