import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const BtnNovaTransf = styled.TouchableHighlight`
  background-color: #a0cdd0;
  width: 50%;
  height: 70px;
  align-self: center;
  justify-content: center;
  border-radius: 4px;
  align-items: center;
  margin-top: 25px;
  elevation: 10;
`;

function NovaTransferencia() {
  return (
    <>
      <BtnNovaTransf>
        <View>
          <Text>Nova Transferencia</Text>
        </View>
      </BtnNovaTransf>
    </>
  );
}

export default NovaTransferencia;
