import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ShadowPropTypesIOS,
  Alert,
} from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import { TextInputMask } from "react-native-masked-text";
import Moment from "moment";
import ArrowVoltar from "../../components/arrowVoltar";

const styles = StyleSheet.create({
  maskedInput: {
    height: 35,
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    width: "80%",
    marginBottom: 15,
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

const DepositoBG = styled.View`
  background-color: #95c285;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  align-items: center;
`;

const MainContainer = styled.View`
  padding: 20px 10px;
  border-radius: 6px;
  border-width: 2px;
  border-color: white;
  margin-top: 20%;
  width: 75%;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20%;
  color: white;
`;

const StyledLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  margin-left: 10%;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
`;

const StyledInput = styled.TextInput`
  height: 35px;
  background-color: #e5e5e5;
  border-radius: 12px;
  width: 80%;
  margin-bottom: 15px;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  align-self: center;
`;

const BtnTrasnferencia = styled.TouchableHighlight`
  width: 40%;
  padding: 10px;
  align-self: center;
  margin-top: 25px;
  border-radius: 7px;
  border-color: white;
  border-width: 2px;
  align-items: center;
`;

function Deposito(props) {
  const [valor, setValor] = useState("");
  let moneyMask;

  /**
   * Takes the props, create a new object to dispatch and calls the router navigation.
   * @param {any} props 
   */
  const _handleConfirma = (props) => {
    let today = Date.now();

    let deposito = {
      valor: valor.substr(2).trim(),
      valorClean: moneyMask.getRawValue(),
      title: "Transferência via Boleto",
      documento: "Deposito",
      ehDeposito: true,
      data: Moment(today).format("DD/MM/YYYY"),
    };

    props.dispatch({ type: "deposito/sucesso", item: deposito });

    Alert.alert("Deposito Finalizado", "Muito obrigado por usar o Wall-Ex.", [
      { text: "Ok", onPress: () => props.navigation.navigate("Home") },
    ]);
  };

  return (
    <DepositoBG>
      <ArrowVoltar navigateBack={() => props.navigation.pop()}/>
      <Title>Deposito</Title>
      <MainContainer>
        <StyledLabel>Valor</StyledLabel>
        <TextInputMask
          style={styles.maskedInput}
          value={valor}
          type={"money"}
          includeRawValueInChangeText={true}
          options={{
            precision: 2,
            separator: ",",
            delimiter: ".",
            unit: "R$ ",
          }}
          paddingLeft={15}
          onChangeText={(text) => setValor(text)}
          ref={(ref) => (moneyMask = ref)}
        />
        <BtnTrasnferencia
          underlayColor="rgba(255,255,255,0.4)"
          onPress={() => _handleConfirma(props, valor)}
        >
          <StyledText>Finalizar</StyledText>
        </BtnTrasnferencia>
      </MainContainer>
    </DepositoBG>
  );
}

export default connect()(Deposito);
