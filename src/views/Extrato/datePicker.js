import React, { Component, Fragment } from "react";
import { Text, View, Modal, Button } from "react-native";
import styled from "styled-components";

const BG = styled.View`
  background-color: #95c285;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const BtnText = styled.Text`
  color: white;
  font-size: 17px;
`;

const Title = styled.Text`
  color: white;
  font-size: 20px;
  margin-top: 30%;
  margin-bottom: 15px;
`;

const Btn = styled.TouchableHighlight`
  border-radius: 6px;
  border-color: white;
  border-width: 2px;
  padding: 15px;
  margin: 5px;
  width: 120px;
  align-items: center;
  justify-content: center;
`;

const BtnFechar = styled.TouchableHighlight`
  border-radius: 6px;
  border-color: white;
  border-width: 2px;
  width: 50px;
  padding: 15px;
  margin: 5px;
  align-items: center;
`;

const _handleCLick = (param, props) => {
  let today = new Date();
  let multiDias = 1000 * 60 * 60 * 24;
  let valor;

  switch (param) {
    case "oneWeek":
      valor = today - (multiDias * 7);
      valor = new Date(valor);
      props.setFiltro(valor, 'Esta semana');
      props.onCallBack();
      break;
    case "twoWeek":
      valor = today - (multiDias * 15);
      valor = new Date(valor);
      props.setFiltro(valor, 'Ultimos 15 dias');
      props.onCallBack();
      break;
    case "oneMonth":
      let esseMes = new Date(`${today.getMonth() + 1}/01/${today.getFullYear()}`)
      valor = (new Date(esseMes));
      props.setFiltro(valor, 'Este Mês');
      props.onCallBack();
      break;
    case "twoMonth":
      let mesPassado = new Date(`${today.getMonth()}/01/${today.getFullYear()}`)
      valor = (new Date(mesPassado));
      props.setFiltro(valor, 'Mês passado até hoje');
      props.onCallBack();
      break;
    default:
      throw "É necessário ter um parametro";
  }
};

export default function DatePicker(props) {
  return (
    <View style={{ flex: 1, heigh: "100%", width: "100%" }}>
      <Modal visible={props.visible}>
        <BG>
          <Title>Escolha um Periodo</Title>
          <Row>
            <Btn
              underlayColor="rgba(255,255,255,0.4)"
              onPress={() => _handleCLick("oneWeek", props)}
            >
              <BtnText>Ultimos 7 Dias </BtnText>
            </Btn>
            <Btn
              underlayColor="rgba(255,255,255,0.4)"
              onPress={() => _handleCLick("twoWeek", props)}
            >
              <BtnText>Ultimos 15 Dias </BtnText>
            </Btn>
          </Row>
          <Row>
            <Btn
              underlayColor="rgba(255,255,255,0.4)"
              onPress={() => _handleCLick("oneMonth", props)}
            >
              <BtnText>Esse Mês </BtnText>
            </Btn>
            <Btn
              underlayColor="rgba(255,255,255,0.4)"
              onPress={() => _handleCLick("twoMonth", props)}
            >
              <BtnText>Mês Passado </BtnText>
            </Btn>
          </Row>
          <BtnFechar
            onPress={() => props.onCallBack()}
            underlayColor="rgba(255,255,255,0.4)"
          >
            <BtnText>X</BtnText>
          </BtnFechar>
        </BG>
      </Modal>
    </View>
  );
}
