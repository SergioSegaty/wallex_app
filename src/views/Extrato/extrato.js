import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import Saldo from "../../components/saldo";
import Bloqueio from "../../components/bloqueado";
import ExtratoBox from "./extratoBox";

const StyledBG = styled.View`
  width: 96%;
  elevation: 15;
  background-color: #a0cdd0;
  height: 320px;
  margin-top: 30px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-left: 2%;
`;

const Separator = styled.View`
  margin-top: 55px;
  margin-bottom: 55px;
`;

function Extrato() {
  return (
    <>
      <StyledBG>
        <Saldo></Saldo>
        <Separator />
        <Bloqueio></Bloqueio>
      </StyledBG>
      <ExtratoBox />
    </>
  );
}

export default Extrato;
