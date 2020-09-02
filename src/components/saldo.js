import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import Intl from "intl";
import "intl/locale-data/jsonp/pt-BR";

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

const formatValor = (valor) => {
  const formatter = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(valor);
};

function Saldo(props) {
  return (
    <SaldoBox>
      <TextSaldo>Saldo</TextSaldo>
      <ValorSaldo>{props.saldo}</ValorSaldo>
    </SaldoBox>
  );
}

const mapStateToProps = (state) => {
  return {
    saldo: formatValor(state.transacao.user.saldo),
  };
};

export default connect(mapStateToProps)(Saldo);
