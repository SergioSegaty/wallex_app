import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import styled from "styled-components";
import ExtratoItem from "./extratoItem";

const mockData = [
  {
    title: "Mc Donalds",
    documento: "717213913",
    valor: "-15,60",
    data: "22/08/2020",
    id: "1",
  },
  {
    title: "Burger King",
    documento: "817290237",
    valor: "-23,40",
    data: "12/08/2020",
    id: "2",
  },
  {
    title: "Riachuello",
    documento: "171294123",
    valor: "-73,50",
    data: "11/08/2020",
    id: "3",
  },
  {
    title: "Emporio da Saúde",
    documento: "9971761263",
    valor: "-60,40",
    data: "19/07/2020",
    id: "4",
  },
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

const ExtratosContainer = styled.View`
  margin-right: 10%;
  margin-top: 10px;
  padding-top: 10px;
  padding-right: 10px;
`;

function ExtratoBox() {
  return (
    <MainContainer>
      <Title>Extrato</Title>
      <UnderLine />
      <Mes>Agosto</Mes>
      <View>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 500,
            marginRight: "10%",
            marginTop: 15,
          }}
          data={mockData}
          renderItem={({ item }) => <ExtratoItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </MainContainer>
  );
}

export default ExtratoBox;
