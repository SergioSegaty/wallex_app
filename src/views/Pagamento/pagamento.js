import React, { Component, useState } from "react";
import { Text, View, Alert } from "react-native";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import ArrowVoltar from "../../components/arrowVoltar";

const PagamentoBackground = styled.View`
  background-color: #95c285;
  width: 100%;
  height: 100%;
  border-radius: 7px;
`;

const MainContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 10%;
  color: white;
`;

const StyledLabel = styled.Text`
  font-size: 17px;
  font-weight: 700;
  margin-left: 15px;
  color: white;
`;

const Btn = styled.TouchableHighlight`
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 15px;
  margin: 10px;
  border-color: white;
  border-width: 2px;
`;

const InputCodigo = styled.TextInput`
  width: 70%;
  height: 45px;
  background-color: rgba(246, 240, 240, 0.7);
  border-radius: 6px;
  margin: 10px;
  padding: 10px;
`;

const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const BtnFinalizar = styled.TouchableHighlight`
  height: 70px;
  width: 100px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  border-color: white;
  border-width: 2px;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.View`
  margin: 10px;
  margin-top: 25px;
  flex-direction: row;
  align-self: center;
  justify-content: space-evenly;
  width: 100%;
`;

const _handleFinalizar = (props, codigoBarras) => {
  if (codigoBarras.length < 10) {
    Alert.alert("Falha ao Finalizar", "Codigo de Barras não é valido", [
      { text: "Ok" },
    ]);
    return;
  }

  props.navigation.navigate("ConfirmacaoPagamento");
};

export default function Pagamento(props) {
  const [codigoBarras, setCodigoBarras] = useState("");
  return (
    <PagamentoBackground>
      <ArrowVoltar navigateBack={() => props.navigation.pop()}/>
      <MainContainer>
        <Title>Pagamento de Contas</Title>
        <View>
          <Btn>
            <View style={{ alignItems: "center" }}>
              <BtnText>Ler código de barras</BtnText>
              <FontAwesomeIcon
                icon={faCamera}
                size={35}
                style={{ marginTop: 10 }}
              />
            </View>
          </Btn>
          <Btn>
            <View style={{ alignItems: "center" }}>
              <StyledLabel>Ou digite o código de barras</StyledLabel>
              <InputCodigo
                onChangeText={(text) => setCodigoBarras(text)}
                value={codigoBarras}
              />
            </View>
          </Btn>
        </View>
        <BtnFinalizar
          underlayColor="rgba(255,255,255,0.4)"
          onPress={() => _handleFinalizar(props, codigoBarras)}
        >
          <BtnText>Finalizar</BtnText>
        </BtnFinalizar>
      </MainContainer>
    </PagamentoBackground>
  );
}
