import React, { Component, useState } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import styled from "styled-components";
import ExtratoItem from "./extratoItem";
import { connect } from "react-redux";
import datePicker from "./datePicker";
import DatePicker from "./datePicker";

const MainContainer = styled.View`
  width: 100%;
`;

const UnderLine = styled.View`
  border-color: rgba(56, 103, 223, 0.5);
  border-bottom-width: 2px;
  width: 70%;
  align-self: center;
  margin: 5px;
  margin-top: 20px;
  elevation: 3;
`;

const BtnDatePicker = styled.TouchableHighlight`
  padding: 5px;
  margin-left: 10px;
  width: 20%;
  border-radius: 6px;
  align-self: flex-end;
`;

const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #4388db;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #146d28;
  font-size: 27px;
  align-self: center;
  margin-top: 5px;
`;

const Mes = styled.Text`
  color: #4388db;
  font-size: 20px;
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 10px;
  font-weight: 700;
`;

/**
 * Takes Date BR Date String and formats its to a American one. 
 * Changes the order from: DD/MM/YYYY to MM/DD/YYYY;
 * @param {String} date 
 */
const formatDate = (date) => {
  let data = date.split("/");
  return `${data[1]}/${data[0]}/${data[2]}`;
};

/**
 * Takes a date and returns the filtered items.
 * @param {Date} dataInicio 
 */
const filterExtrato = (dataInicio = "default") => {
  let listaFiltrada = [];

  let today = new Date.now();

  if (dataInicio === "default") {
    let tillRange = today.getTime();
    let fromRange = (today.getMonth() + 1).getTime();
    listaFiltrada = [...props.extrato].map(
      (e) =>
        new Date(formatDate(e.data)).getTime() >= fromRange &&
        new Date(formatDate(e.data)).getTime() <= tillRange
    );
  } else {
    let tillRange = today.getTime();
    let fromRange = dataInicio.getTime();
    listaFiltrada = [...props.extrato].map(
      (e) =>
        new Date(formatDate(e.data)).getTime() >= fromRange &&
        new Date(formatDate(e.data)).getTime() <= tillRange
    );
  }

  return listaFiltrada;
};

const renderExtratoItens = ({ item }) => {
  return <ExtratoItem item={item} />;
};

function ExtratoBox(props) {
  const [modalVis, setModalVis] = useState(false);

  return (
    <MainContainer>
      <DatePicker
        visible={modalVis}
        onCallBack={() => setModalVis(false)}
        setFiltro={(data) => console.log(new Date(data))}
      />
      <Title>Extrato</Title>
      <UnderLine />
      <View>
        <Mes>Agosto</Mes>
        <BtnDatePicker onPress={() => setModalVis(true)}>
          <BtnText>Editar</BtnText>
        </BtnDatePicker>
      </View>
      <View>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 500,
            marginRight: "10%",
            marginTop: 15,
          }}
          data={props.extrato}
          renderItem={renderExtratoItens}
          keyExtractor={(item) => item.id}
        />
      </View>
    </MainContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    extrato: state.transacao.user.extrato,
  };
};

export default connect(mapStateToProps)(ExtratoBox);
