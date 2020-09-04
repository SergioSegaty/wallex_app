import React, { Component, useState } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import styled from "styled-components";
import ExtratoItem from "./extratoItem";
import { connect } from "react-redux";
import datePicker from "./datePicker";
import DatePicker from "./datePicker";
import Moment from "moment";

let meses = [
  { english: "January", portuguese: "Janeiro" },
  { english: "February", portuguese: "Fevereiro" },
  { english: "March", portuguese: "Março" },
  { english: "April", portuguese: "Abril" },
  { english: "May", portuguese: "Maio" },
  { english: "June", portuguese: "Junho" },
  { english: "July", portuguese: "Julho" },
  { english: "August", portuguese: "Agosto" },
  { english: "September", portuguese: "Setembro" },
  { english: "October", portuguese: "Outubro" },
  { english: "November", portuguese: "Novembro" },
  { english: "December", portuguese: "Dezembro" },
];

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
  border-radius: 6px;
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
  font-size: 25px;
  margin-top: 10px;
  font-weight: 700;
`;

const Filtro = styled.Text`
  color: #4388db;
  font-size: 15px;
  font-weight: 700;
`;

const ExtratoI = styled.View`
  margin-bottom: 20px;
  margin-top: 20px;
  elevation: 6;
  background-color: #95c285;
  border-radius: 7px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const SemExtratoText = styled.Text`
  font-size: 22px;
  font-weight: bold;
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

const renderExtratoItens = ({ item }) => {
  return <ExtratoItem item={item} />;
};

function ExtratoBox(props) {
  const [modalVis, setModalVis] = useState(false);
  const [filtro, setFiltro] = useState(undefined);
  const [buscaLabel, setBuscaLabel] = useState(undefined);

  /**
   * Takes a date and returns the filtered items.
   * @param {Date} dataInicio
   */

  const esteMes = () => {
    let today = new Date();
    let mesIngles = Moment(today).format("MMMM");

    let mesPt = meses.find((e) => e.english === mesIngles);
    return mesPt.portuguese;
  };

  const _handleFiltro = (data, msg) => {
    setBuscaLabel(msg);
    setFiltro(data);
  };

  const filterExtrato = (dataInicio = undefined) => {
    let listaFiltrada = [];

    if (dataInicio === undefined) {
      return props.extrato;
    } else {
      let fromRange = dataInicio.getTime();
      listaFiltrada = [...props.extrato].filter(
        (e) => new Date(formatDate(e.data)).getTime() > fromRange
      );
      console.log("\n\n Lista Filtrada:");
      console.log(listaFiltrada);
    }
    return listaFiltrada;
  };

  return (
    <MainContainer>
      <DatePicker
        visible={modalVis}
        onCallBack={() => setModalVis(false)}
        setFiltro={(data, msg) => _handleFiltro(data, msg)}
      />
      <Title>Extrato</Title>
      <UnderLine />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Mes>{esteMes()}</Mes>
        <BtnDatePicker
          underlayColor="rgba(160, 205, 208,0.4)"
          onPress={() => setModalVis(true)}
        >
          <BtnText>Editar</BtnText>
        </BtnDatePicker>
        {buscaLabel && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Filtro>{buscaLabel}</Filtro>
            <BtnDatePicker
              underlayColor="rgba(160, 205, 208,0.4)"
              onPress={() => {
                setBuscaLabel(undefined);
                setFiltro(undefined);
              }}
            >
              <Filtro>X</Filtro>
            </BtnDatePicker>
          </View>
        )}
      </View>
      <View>
        {filterExtrato(filtro).length >= 1 ? (
          <FlatList
            contentContainerStyle={{
              paddingBottom: 500,
              marginRight: "10%",
              marginTop: 15,
            }}
            data={filterExtrato(filtro)}
            renderItem={renderExtratoItens}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <ExtratoI>
            <SemExtratoText>Sem nenhum extrato</SemExtratoText>
          </ExtratoI>
        )}
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
