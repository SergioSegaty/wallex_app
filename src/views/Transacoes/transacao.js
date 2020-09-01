import React, { Component, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import { TextInputMask } from "react-native-masked-text";
import Moment from 'moment';


const styles = StyleSheet.create({
  maskedInput: {
    height: 35,
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    width: "80%",
    marginBottom: 15,
    fontSize: 17,
    fontWeight: "bold",
  },
});

const BG = styled.ScrollView`
  background-color: #95c285;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 27px;
  font-weight: 500;
  color: white;
  margin-bottom: 35px;
  margin-top: 10px;
`;

const StyledLabel = styled.Text`
  font-size: 19px;
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
  font-size: 18px;
  font-weight: bold;
`;

const FormularioContainer = styled.View`
  margin-top: 25px;
  width: 94%;
  align-self: center;
  border-radius: 6px;
  align-items: center;
  margin-top: 40%;
  border-width: 2px;
  border-color: white;
`;

const BtnTrasnferencia = styled.TouchableHighlight`
  width: 40%;
  padding: 10px;
  align-items: center;
  align-self: center;
  margin-top: 25px;
  border-radius: 26px;
  margin-bottom: 15px;
  border-radius: 6px;
  border-width: 2px;
  border-color: white;
`;

const _validarDados = (dados) => {
  let valid = false;
  let mensagens = "";

  if (Number.isNaN(dados.valor)) {
    mensagens += "O valor não é um número válido. \n\n";
  } else if (dados.valor <= 0) {
    mensagens += "O valor não pode ser menor que R$ 1. \n\n";
  } else if (dados.valor > 300) {
    mensagens += "O valor não pode ser maior que R$ 300. \n\n";
  }

  if (dados.desc.length < 5) {
    mensagens += "A descrição deve ter no mínimo 5 caracteres. \n\n";
  } else if (dados.desc.length > 20) {
    mensagens += "A descrição deve ter no máximo 20 caracteres. \n\n";
  }

  if (mensagens === "") {
    valid = true;
  }

  return { errors: mensagens, valid: valid };
};

function Transacao(props) {
  const [valor, setValor] = useState("");
  const [desc, setDesc] = useState("");
  let moneyMask;

  const _handleContinuar = () => {
    let today = new Date();
    let dados = {
      valor: moneyMask.getRawValue(),
      valorString: valor,
      desc: desc,
      data: Moment(today).format('DD/MM/YYYY'),
      hora: today.toLocaleTimeString(),
    };

    let result = _validarDados(dados);

    if (!result.valid) {
      Alert.alert("Dados Incorretos", result.errors, [{ text: "Ok" }]);
      return;
    }

    props.dispatch({ type: "transacao/novaTransacao/valores", item: dados });
    props.navigation.navigate("Confirmacao");
  };

  return (
    <BG>
      <FormularioContainer>
        <Title> Dados da Transação </Title>

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

        <StyledLabel>Descrição</StyledLabel>
        <StyledInput
          paddingLeft={15}
          onChangeText={(text) => setDesc(text)}
          value={desc}
        />

        <BtnTrasnferencia
          underlayColor="rgba(255,255,255,0.4)"
          onPress={() => _handleContinuar()}
        >
          <StyledLabel>Confirmar</StyledLabel>
        </BtnTrasnferencia>
      </FormularioContainer>
    </BG>
  );
}

export default connect()(Transacao);
