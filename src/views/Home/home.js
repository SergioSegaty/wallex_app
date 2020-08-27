import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "./header";
import CardCarousel from "./cardCarousel";
import Saldo from "../../components/saldo";
import ContactCarousel from "./contactCarousel";
import styled from "styled-components";
import DirectionButtons from "./directionButtons";

const UnderLine = styled.View`
  border-color: rgba(56, 103, 223, 0.5);
  border-bottom-width: 2px;
  width: 70%;
  align-self: center;
  margin: 5px;
`;

function Home() {
  return (
    <View>
      <Header />
      <ScrollView>
        <UnderLine />
        <CardCarousel />
        <Saldo />
        <UnderLine />
        <ContactCarousel />
        <DirectionButtons />
      </ScrollView>
    </View>
  );
}

export default Home;
