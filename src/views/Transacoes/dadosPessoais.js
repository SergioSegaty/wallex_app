import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const BG = styled.View`
background-color: #95C285;
height: 100%;
`

const FormularioContainer = styled.View`
  margin-top: 15px;
  width: 94%;
  align-self: center;
  border-radius: 12px;
  align-items: center;
  margin-top: 40%;
  border-color: white;
  border-width: 2px;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: black;
  margin-bottom: 35px;
  margin-top: 10px;
`;

const StyledLabel = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
`;

const StyledInput = styled.TextInput`
  height: 35px;
  background-color: #e5e5e5;
  border-radius: 12px;
  width: 80%;
  margin-bottom: 15px;
  text-align: center;
`;

const ContaView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const BtnTrasnferencia = styled.TouchableHighlight`
width: 40%;
padding: 10px;
align-items: center;
align-self: center;
margin-top: 25px;
border-radius: 7px;
border-color: white;
border-width: 2px;
`;

export default function DadosPessoais() {
  return (
    <BG>
      <FormularioContainer>
        <Title> Dados Pessoais </Title>

        <StyledLabel>Nome</StyledLabel>
        <StyledInput />

        <StyledLabel>CPF</StyledLabel>
        <StyledInput />

        <StyledLabel>Agencia</StyledLabel>
        <StyledInput />
        <ContaView>
          <View style={{ marginRight: 30, alignItems: "center" }}>
            <StyledLabel>Tipo de Conta</StyledLabel>
            <StyledInput />
          </View>
          <View style={{ alignItems: "center" }}>
            <StyledLabel>Numero da Conta</StyledLabel>
            <StyledInput />
          </View>
        </ContaView>
      </FormularioContainer>
      <BtnTrasnferencia>
        <StyledLabel>Continuar</StyledLabel>
      </BtnTrasnferencia>
    </BG>
  );
}
