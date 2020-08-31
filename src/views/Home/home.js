import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "./header";
import CardCarousel from "./cardCarousel";
import Saldo from "../../components/saldo";
import ContactCarousel from "./contactCarousel";
import styled from "styled-components";
import DirectionButtons from "./directionButtons";
import { connect } from "react-redux";


const UnderLine = styled.View`
  border-color: rgba(56, 103, 223, 0.5);
  border-bottom-width: 2px;
  width: 70%;
  align-self: center;
  margin: 5px;
`;

function Home(props) {
  return (
    <View>
      <Header />
      <ScrollView>
        <UnderLine />
        <CardCarousel />
        <Saldo />
        <UnderLine />
        <ContactCarousel contatos={props.user.contatos} onPressCallback={(nome) => props.navigation.navigate('Perfil')}/>
        <DirectionButtons onPressCallback={(route) => props.navigation.navigate(route)}/>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return{
    user: state.transacao.user
  }
}

export default connect(mapStateToProps)(Home);


