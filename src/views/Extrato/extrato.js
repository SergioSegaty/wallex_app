import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import Saldo from "../../components/saldo";
import Bloqueio from "../../components/bloqueado";
import ExtratoBox from "./extratoBox";
import ArrowVoltar from "../../components/arrowVoltar";
import DatePicker from "./datePicker";

const StyledBG = styled.View`
  width: 90%;
  elevation: 15;
  background-color: #a0cdd0;
  margin-top: 30px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  align-self: center;
`;


function Extrato(props) {
  return (
    <>
      <StyledBG>
        <ArrowVoltar navigateBack={() => props.navigation.pop()}/>
        <Saldo></Saldo>
        <Bloqueio></Bloqueio>
      </StyledBG>
      <ExtratoBox />
    </>
  );
}

export default Extrato;
