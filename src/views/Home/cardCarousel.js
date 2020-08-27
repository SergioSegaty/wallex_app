import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components";

const CardBox = styled.View`
  width: 100%;
  height: 260px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CardImage = styled.Image`
  resize-mode: contain;
  height: 260px;
  width: 260px;
`;

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

function CardCarousel() {
  return (
    <CardBox style={styles.boxShadow}>
      <CardImage source={require("../../../assets/CreditCard/CC-T.png")} />
    </CardBox>
  );
}

export default CardCarousel;
