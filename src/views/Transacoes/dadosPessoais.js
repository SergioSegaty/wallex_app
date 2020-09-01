import React, { useState } from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import { TextInputMask } from "react-native-masked-text";

const styles = StyleSheet.create({
  cpfInput: {
    height: 35,
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    width: "80%",
    marginBottom: 15,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});

const BG = styled.ScrollView`
  background-color: #95c285;
  height: 100%;
`;

const FormularioContainer = styled.View`
  width: 94%;
  align-self: center;
  border-radius: 12px;
  margin-top: 20%;
  border-color: white;
  border-width: 2px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 27px;
  font-weight: bold;
  color: white;
  margin-bottom: 35px;
  margin-top: 10px;
`;

const StyledLabel = styled.Text`
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
`;

const ContaView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const BtnTrasnferencia = styled.TouchableHighlight`
  width: 40%;
  padding: 10px;
  align-items: center;
  align-self: center;
  margin-top: 25px;
  border-radius: 7px;
  border-color: white;
  border-width: 2px;
`;

const _validaDados = (dados) => {
  let mensagens = "";
  let valid = false;

  if (dados.nome.length < 5 || dados.nome.length > 15) {
    mensagens += "Nome deve ter entre 5 à 15 caracteres \n\n";
  }
  if (dados.cpf.length !== 14) {
    mensagens += "Cpf inválido \n\n";
  }
  if (dados.agencia.length !== 4) {
    mensagens += "Agencia inválida \n\n";
  }
  if (dados.tipoConta.length !== 3) {
    mensagens += "Tipo de conta é inválido \n\n";
  }
  if (dados.numeroConta.length < 5 || dados.numeroConta.length > 11) {
    mensagens += "Número da conta é inválido \n\n";
  }
  if (mensagens === "") {
    valid = true;
  }

  return { errors: mensagens, valid: valid };
};

function DadosPessoais(props) {
  const _handleDados = () => {
    let dados = {
      nome: nome,
      cpf: CPF,
      agencia: agencia,
      tipoConta: tipoConta,
      numeroConta: numeroConta,
    };

    let result = _validaDados(dados);

    if (!result.valid) {
      Alert.alert("Falha ao Autenticar", result.errors, [{ text: "Ok" }]);
      return;
    }
    props.dispatch({ type: "transacao/novaTransacao/favorecido", item: dados });
    props.navigation.navigate("Transacao");
  };
  const [nome, setNome] = useState("");
  const [CPF, setCPF] = useState("");
  const [agencia, setAgencia] = useState("");
  const [tipoConta, setTipoConta] = useState("");
  const [numeroConta, setNumeroConta] = useState("");
  const [cleanCPF, setCleanCPF] = useState("");

  return (
    <BG>
      <FormularioContainer>
        <Title> Dados Pessoais </Title>

        <StyledLabel>Nome</StyledLabel>
        <StyledInput onChangeText={(text) => setNome(text)} value={nome} />

        <StyledLabel>CPF</StyledLabel>
        {/* <StyledInput onChangeText={(text) => setCPF(text)} value={CPF} /> */}
        <TextInputMask
          style={styles.cpfInput}
          type={"cpf"}
          value={CPF}
          includeRawValueInChangeText={true}
          onChangeText={(maskedText, rawText) => {
            setCPF(maskedText);
            setCleanCPF(rawText);
          }}
        />

        <StyledLabel>Agencia</StyledLabel>
        <StyledInput
          onChangeText={(text) => setAgencia(text)}
          value={agencia}
        />

        <ContaView>
          <View style={{ marginRight: 30, alignItems: "center" }}>
            <StyledLabel>Tipo de Conta</StyledLabel>
            <StyledInput
              onChangeText={(text) => setTipoConta(text)}
              value={tipoConta}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <StyledLabel>Numero da Conta</StyledLabel>
            <StyledInput
              onChangeText={(text) => setNumeroConta(text)}
              value={numeroConta}
            />
          </View>
        </ContaView>
      </FormularioContainer>
      <BtnTrasnferencia
        underlayColor="rgba(255,255,255,0.4)"
        onPress={() => _handleDados()}
      >
        <StyledLabel>Continuar</StyledLabel>
      </BtnTrasnferencia>
    </BG>
  );
}

export default connect()(DadosPessoais);
