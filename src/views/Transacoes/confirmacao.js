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

const BG = styled.View`
  background-color: #95c285;
  height: 100%;
`;

const ConfBackground = styled.View`
  width: 94%;
  align-self: center;
  border-radius: 6px;
  align-items: flex-start;
  margin-top: 30%;
  padding: 15px;
  border-width: 2px;
  border-color: white;
`;

const StyledOutput = styled.Text`
  margin-left: 5px;
  font-size: 17px;
  font-weight: bold;
  color: black;
`;

const StyledLabel = styled.Text`
  color: white;
  margin-left: 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const BtnCancelar = styled.TouchableHighlight`
  height: 70px;
  width: 100px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: white;
`;
const BtnFinalizar = styled.TouchableHighlight`
  height: 70px;
  width: 100px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: white;
`;

const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
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
  margin-top: 15px;
  margin-bottom: 15px;
  color: white;
`;

export default function Confirmacao(props) {
  return (
    <BG>
      <ConfBackground>
        <Title> Confirmação </Title>
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
        <ButtonContainer>
          <BtnCancelar
            underlayColor="rgba(255,255,255,0.4)"
            onPress={() => props.navigation.navigate("Transacao")}
          >
            <BtnText> Cancelar </BtnText>
          </BtnCancelar>
          <BtnFinalizar
            underlayColor="rgba(255,255,255,0.4)"
            onPress={() => props.navigation.navigate("Finalizado")}
          >
            <BtnText> Finalizar </BtnText>
          </BtnFinalizar>
        </ButtonContainer>
      </ConfBackground>
    </BG>
  );
}
