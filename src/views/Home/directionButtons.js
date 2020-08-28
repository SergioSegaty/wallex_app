import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const BtnExtrato = styled.TouchableHighlight`
  height: 100px;
  width: 45%;
  border-radius: 6px;
  border-color: #95c285;
  border-width: 2px;
  padding: 0px 10px;
`;

const BtnTransf = styled.TouchableHighlight`
  height: 100px;
  width: 45%;
  border-radius: 6px;
  border-color: #95c285;
  border-width: 2px;
  padding: 0px 10px;
`;

const BtnPagamento = styled.TouchableHighlight`
  height: 100px;
  width: 45%;
  border-radius: 6px;
  border-color: #95c285;
  border-width: 2px;
  padding: 0px 10px;
`;

const BtnBox = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MainContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  margin-right: 10px;
  margin-left: 5px;
`;

const BtnText = styled.Text`
  color: #95c285;
  font-size: 23px;
`;

function DirectionButtons() {
  return (
    <View style={{paddingBottom: 100}}>
      <MainContainer>
        <BtnExtrato>
          <BtnBox>
            <BtnText>Extrato</BtnText>
          </BtnBox>
        </BtnExtrato>

        <BtnPagamento>
          <BtnBox>
            <BtnText>Pagamento</BtnText>
          </BtnBox>
        </BtnPagamento>
      </MainContainer>

      <MainContainer>
        <BtnTransf>
          <BtnBox>
            <BtnText>Transferencia</BtnText>
          </BtnBox>
        </BtnTransf>
      </MainContainer>
    </View>
  );
}

export default DirectionButtons;
