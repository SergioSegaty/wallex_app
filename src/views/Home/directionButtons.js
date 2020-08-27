import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const BtnExtrato = styled.TouchableHighlight`
  background-color: green;
  width: 23%;
  height: 100px;
  border-radius: 6px;
  elevation: 10;
`;

const BtnTransf = styled.TouchableHighlight`
  background-color: green;
  width: 23%;
  height: 100px;
  border-radius: 6px;
  elevation: 10;
`;

const BtnPagamento = styled.TouchableHighlight`
  background-color: green;
  width: 23%;
  height: 100px;
  border-radius: 6px;
  elevation: 10;
`;

const BtnBox = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
  margin-left: 5px;
`;

function DirectionButtons() {
  return (
    <MainContainer>
      <BtnExtrato>
        <BtnBox>
          <Text>Extrato</Text>
        </BtnBox>
      </BtnExtrato>

    <BtnPagamento>
        <BtnBox>
            <Text>Pagamento</Text>
        </BtnBox>
    </BtnPagamento>

    <BtnTransf>
        <BtnBox>
            <Text>Transferencia</Text>
        </BtnBox>
    </BtnTransf>

    </MainContainer>
  );
}

export default DirectionButtons;
