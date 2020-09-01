import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import styled from "styled-components";
import ItemsHistorico from "./itemsHistorico";

const mockHist = [
  {
    data: "08/09/2020",
    desc: "Almoço",
    valor: "-15,60",
    id: "1",
  },
  {
    data: "05/03/2020",
    desc: "Emprestado",
    valor: "-17,50",
    id: "2",
  },
  {
    data: "02/03/2020",
    desc: "Almoço",
    valor: "-15,60",
    id: "3",
  },
  {
    data: "02/03/2020",
    desc: "Almoço",
    valor: "-15,60",
    id: "4",
  },
  {
    data: "02/03/2020",
    desc: "Almoço",
    valor: "-15,60",
    id: "5",
  },
  {
    data: "02/03/2020",
    desc: "Almoço",
    valor: "-15,60",
    id: "6",
  },
  {
    data: "02/03/2020",
    desc: "Almoço U",
    valor: "-15,60",
    id: "7",
  },
];

const HistoricoBg = styled.View`
  margin-top: 25px;
  background-color: #a0cdd0;
  border-radius: 6px;
  width: 94%;
  margin-left: 3%;
`;

function Historico(props) {
  return (
    <>
      <HistoricoBg>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 440,
            marginRight: "2%",
            marginTop: 15,
          }}
          data={props.extrato}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemsHistorico item={item} />}
        />
      </HistoricoBg>
    </>
  );
}

export default Historico;
