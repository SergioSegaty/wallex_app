import React, { Component, useState } from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import ArrowVoltar from "../../components/arrowVoltar";
import dadosFromBoleto from "../../js/dadosFromBoleto";
import { TextInputMask } from "react-native-masked-text";
import { connect } from "react-redux";
import Moment from "moment";

const styles = StyleSheet.create({
  codigoBarras: {
    width: "100%",
    height: 45,
    backgroundColor: "rgba(246, 240, 240, 0.7)",
    borderRadius: 6,
    margin: 10,
    padding: 10,
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
  },
});

const InputCodigo = styled.TextInput`
  width: 70%;
  height: 45px;
  background-color: rgba(246, 240, 240, 0.7);
  border-radius: 6px;
  margin: 10px;
  padding: 10px;
`;

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
  margin-top: 20px;
`;

/**
 * Takes a BarCode and Props, cleans the barcodes from spaces and sends it to another function
 * that extract the data from it.
 * Then it dispatches the action and routes the user to confirmation.
 * @param {any} props 
 * @param {string} codigoBarras 
 */
const _handleFinalizar = (props, codigoBarras) => {
  let dados;
  codigoBarras = codigoBarras.replace(/ /g, "");
  if (codigoBarras.length < 10) {
    Alert.alert("Falha ao Finalizar", "Codigo de Barras não é valido", [
      { text: "Ok" },
    ]);
    return;
  }
  try {
    dados = dadosFromBoleto(codigoBarras);
  } catch (e) {
    throw e;
  }

  let today = Date.now();

  let boleto = {
    title: "Pagamento Boleto",
    documento: "817 - " + dados.banco,
    valor: `-${dados.valor}`,
    data: Moment(today).format("DD/MM/YYYY"),
    ehDeposito: false,
  };

  dados.boleto = boleto;

  props.dispatch({ type: "pagamento/novo", item: dados });
  props.navigation.navigate("ConfirmacaoPagamento");
};

function Pagamento(props) {
  const [codigoBarras, setCodigoBarras] = useState("");
  return (
    <PagamentoBackground>
      <ArrowVoltar navigateBack={() => props.navigation.pop()} />
      <MainContainer>
        <Title>Pagamento de Contas</Title>
        <View style={{ width: "80%", alignItems: "center" }}>
          <StyledLabel>Ou digite o código de barras</StyledLabel>
          <TextInputMask
            type={"custom"}
            options={{
              mask: "99999.99999 99999.999999 99999.999999 9 99999999999999",
            }}
            value={codigoBarras}
            keyboardType={'decimal-pad'}
            onChangeText={(text) => {
              setCodigoBarras(text);
            }}
            style={styles.codigoBarras}
          />
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

export default connect()(Pagamento);
