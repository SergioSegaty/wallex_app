import React, { Component } from "react";
import { Text, View, Share, Alert } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import ArrowVoltar from "../../components/arrowVoltar";

const BG = styled.View`
  background-color: #95c285;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  align-self: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
  color: white;
`;

const StyledOutput = styled.Text`
  margin-left: 5px;
  font-size: 17px;
  font-weight: bold;
  color: black;
`;

const StyledLabel = styled.Text`
  color: white;
  margin-left: 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const MainContainer = styled.View`
  padding: 6px;
  border-radius: 6px;
  border-width: 2px;
  border-color: white;
  justify-content: flex-start;
  width: 75%;
`;

let props = {
  pagamento: {
    valor: 23.0,
  },
};

const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Btn = styled.TouchableHighlight`
  min-height: 70px;
  min-width: 100px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  border-color: white;
  border-width: 2px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  padding: 10px;
`;

const _handleFinalizar = (props) => {
  let msg = _handleCompartilhar(props.pagamento);
  props.dispatch({ type: "pagamento/sucesso", item: props.pagamento });
  Alert.alert("Deposito Finalizado", msg, [{ text: "Compartilhar", onPress: () => share(msg, props)},
    { text: "Ok", onPress: () => props.navigation.navigate('Home')}
  ]);
  
};

/**
 * Takes the props and a message. Uses the React Native Share.
 * @param {string} msg 
 * @param {any} props 
 */
const share = async (msg, props) => {
  try {
    const result = await Share.share({
      message: msg,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
        props.navigation.navigate("Home");
      }
    } else if (result.action === Share.dismissedAction) {
      props.navigation.navigate("Home");
    }
  } catch (error) {
    alert(error.message);
  }
};

/**
 * Makes the message to use with Share.
 * @param {any} pagamento 
 */
const _handleCompartilhar = (pagamento) => {
  return `
Pagamento completo. 
  
Banco: ${pagamento.banco}
Data: ${pagamento.vencimento}
Valor: R$ ${pagamento.valor}
  
Muito obrigado por usar o Wall-Ex
`;
};

function confirmacaoPagamento(props) {
  return (
    <BG>
      <ArrowVoltar navigateBack={() => props.navigation.pop()}/>
      <Title>Confirmação Pagamento</Title>
      <MainContainer>
        <StyledLabel>
          Valor: <StyledOutput>R$ {props.pagamento.valor}</StyledOutput>
        </StyledLabel>
        <StyledLabel>
          Data: <StyledOutput>{props.pagamento.vencimento}</StyledOutput>
        </StyledLabel>
        <StyledLabel>
          Banco: <StyledOutput>{props.pagamento.banco}</StyledOutput>
        </StyledLabel>
      </MainContainer>
      <View style={{ flexDirection: "row" }}>
        <Btn
          underlayColor="rgba(255,255,255,0.4)"
          onPress={() => _handleFinalizar(props, props.pagamento)}
        >
          <BtnText>Finalizar</BtnText>
        </Btn>
      </View>
    </BG>
  );
}

const mapStateToProps = (state) => {
  return {
    pagamento: state.transacao.user.novoPagamento,
  };
};

export default connect(mapStateToProps)(confirmacaoPagamento);
