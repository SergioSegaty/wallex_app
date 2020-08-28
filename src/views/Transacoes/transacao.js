import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

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
  color: #146d28;
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

const FormularioContainer = styled.View`
  margin-top: 25px;
  background-color: #a0cdd0;
  width: 94%;
  align-self: center;
  border-radius: 6px;
  align-items: center;
  margin-top: 40%;
  elevation: 10;
`;

const BtnTrasnferencia = styled.TouchableHighlight`
  background-color: #95c285;
  width: 40%;
  padding: 10px;
  align-items: center;
  align-self: center;
  margin-top: 25px;
  border-radius: 26px;
  elevation: 10;
`;

export default function Transacao(props) {
  return (
    <View>
      <FormularioContainer>
        <Title> Dados da Transação </Title>

        <StyledLabel>Valor</StyledLabel>
        <StyledInput />

        <StyledLabel>Descrição</StyledLabel>
        <StyledInput />
      </FormularioContainer>

      <BtnTrasnferencia>
        <StyledLabel>Confirmar</StyledLabel>
      </BtnTrasnferencia>
    </View>
  );
}
