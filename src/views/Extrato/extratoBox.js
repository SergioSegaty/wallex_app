import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import styled from "styled-components";
import ExtratoItem from "./extratoItem";
import { connect } from "react-redux";

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

const renderExtratoItens = ({item}) =>{
 return (
  <ExtratoItem item={item} />
 )
}

function ExtratoBox(props) {
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
