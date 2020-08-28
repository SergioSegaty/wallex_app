import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const transacao = {
  nomeFavorecido: "Jonathan Ribeiro",
  cpf: "058.409.301-09",
  agencia: "049",
  conta: "103944",
  valor: "130,90",
  data: "27/08/2020",
  hora: "11:32:55",
};

const ConfBackground = styled.View`
  background-color: #a0cdd0;
  width: 94%;
  align-self: center;
  border-radius: 6px;
  align-items: flex-start;
  margin-top: 20%;
  elevation: 10;
  padding: 15px;
`;

const StyledOutput = styled.Text`
  margin-left: 5px;
  font-size: 17px;
  font-weight: bold;
`;

const StyledLabel = styled.Text`
  margin-left: 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const BtnCancelar = styled.TouchableHighlight`
  height: 70px;
  width: 100px;
  background-color: #be1515;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;
const BtnFinalizar = styled.TouchableHighlight`
  height: 70px;
  width: 100px;
  background-color: #a0cdd0;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ButtonContainer = styled.View`
  margin: 10px;
  margin-top: 25px;
  flex-direction: row;
  align-self: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Title = styled.Text`
  align-self: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 30%;
`;

export default function Confirmacao(props) {
  return (
    <View>
      <Title> Confirmação </Title>
      <ConfBackground>
        <StyledLabel>
          Nome: <StyledOutput>{transacao.nomeFavorecido} </StyledOutput>{" "}
        </StyledLabel>
        <StyledLabel>
          CPF: <StyledOutput>{transacao.cpf}</StyledOutput>
        </StyledLabel>
        <StyledLabel>
          Agencia/Conta:{" "}
          <StyledOutput>
            {transacao.agencia} - {transacao.conta}
          </StyledOutput>{" "}
        </StyledLabel>
        <StyledLabel>
          Valor: <StyledOutput>R$ {transacao.valor}</StyledOutput>
        </StyledLabel>
        <StyledLabel>
          Data/Hora:{" "}
          <StyledOutput>
            {transacao.data} - {transacao.hora}
          </StyledOutput>
        </StyledLabel>
      </ConfBackground>
      <ButtonContainer>
        <BtnCancelar>
          <BtnText> Cancelar </BtnText>
        </BtnCancelar>
        <BtnFinalizar>
          <BtnText> Finalizar </BtnText>
        </BtnFinalizar>
      </ButtonContainer>
    </View>
  );
}
