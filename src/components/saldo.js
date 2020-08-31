import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

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
  color: #5e98dd;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;

function Saldo(props) {
  return (
    <SaldoBox>
      <TextSaldo>Saldo</TextSaldo>
      <ValorSaldo>R$ {props.saldo}</ValorSaldo>
    </SaldoBox>
  );
}

const mapStateToProps = (state) => {
  return {
    saldo: state.transacao.user.saldo
  };
};

export default connect(mapStateToProps)(Saldo);
