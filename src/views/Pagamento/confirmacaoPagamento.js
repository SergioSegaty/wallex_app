import React, { Component } from "react";
import { Text, View, Share } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

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
  // Dispatches
  props.navigation.navigate("Home");
};

const _handleCompartilhar = (pagamento) => {
  let msg = `
  Pagamento completo. 
  
  Banco: ${pagamento.banco}
  Data: ${pagamento.data}
  Valor: ${pagamento.valor}
  
  Muito obrigado por usar o Wall-Ex
  `
  Share.share(msg);
}

function confirmacaoPagamento() {
  return (
    <BG>
      <Title>Confirmação Pagamento</Title>
      <MainContainer>
        <StyledLabel>
          Valor: <StyledOutput>{props.pagamento.valor}</StyledOutput>
        </StyledLabel>
        <StyledLabel>
          Data: <StyledOutput>DATA</StyledOutput>
        </StyledLabel>
        <StyledLabel>
          Banco: <StyledOutput>BANCO</StyledOutput>
        </StyledLabel>
      </MainContainer>
      <View style={{flexDirection: 'row'}}>
        <Btn
          underlayColor="rgba(255,255,255,0.4)"
          onPress={() => _handleFinalizar(props, pagamento)}
        >
          <BtnText>Finalizar</BtnText>
        </Btn>

        <Btn
        underlayColor="rgba(255,255,255,0.4)"
          onPress={() => _handleCompartilhar(props, pagamento)}
        >
          <BtnText>Compartilhar</BtnText>
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
