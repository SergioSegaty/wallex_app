import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

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
  color: #5E98DD;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

function Bloqueio() {
  return (
    <BloqueioBox>
      <TextBloqueio>Bloqueado</TextBloqueio>
      <ValorBloqueio>R$ 740,91</ValorBloqueio>
    </BloqueioBox>
  );
}

export default Bloqueio;
