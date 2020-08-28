import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const SaldoBox = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const ValorSaldo = styled.Text`
  color: green;
  font-size: 25px;
  font-weight: 500;
`;

const TextSaldo = styled.Text`
  color: #5E98DD;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;

function Saldo() {
  return (
    <SaldoBox>
      <TextSaldo>Saldo</TextSaldo>
      <ValorSaldo>R$ 12.740,91</ValorSaldo>
    </SaldoBox>
  );
}

export default Saldo;
