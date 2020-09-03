import React, { Component, Fragment } from "react";
import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const BotaoVoltar = styled.TouchableHighlight`
  padding: 5px;
  width: 10%;
  border-radius: 6px;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: 10px
`;
const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  align-items: center;
  justify-content: center;
`;
export default function ArrowVoltar(props) {
  return (
    <Fragment>
      <BotaoVoltar
        onPress={() => props.navigateBack()}
        underlayColor='rgba(255,255,255,0.3)'
      >
        <BtnText>
          <FontAwesomeIcon color={'white'} size={25} icon={faAngleLeft}></FontAwesomeIcon>
        </BtnText>
      </BotaoVoltar>
    </Fragment>
  );
}
