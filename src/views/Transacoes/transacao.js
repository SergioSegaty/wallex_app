import React, { Component, useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

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
  text-align: center;
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

const _validarDados = (dados) =>{
  let valid = false;
  let mensagens = '';

  if(!Number.isInteger(dado.valor)){
    mensagens += 'O valor não é um número válido \n\n';
    
  }



}


function Transacao(props) {
  const [valor, setValor] = useState('');
  const [desc, setDesc] = useState('');
  
  
  const _handleContinuar = () => {
    dados = {
      valor: valor,
      desc: desc,
    }

   result = _validarDados(dados);
  }


  return (
    <BG>
      <FormularioContainer>
        <Title> Dados da Transação </Title>

        <StyledLabel>Valor</StyledLabel>
        <StyledInput 
          onChangeText={text => setValor(text)}
          value={valor}
        />

        <StyledLabel>Descrição</StyledLabel>
        <StyledInput 
          onChangeText={text => setDesc(text)}
          value={desc}
        />

        <BtnTrasnferencia 
        underlayColor='rgba(255,255,255,0.4)'
        onPress={() => props.navigation.navigate('Confirmacao')}>
          <StyledLabel>Confirmar</StyledLabel>
        </BtnTrasnferencia>
      </FormularioContainer>
    </BG>
  );
}

export default connect()(Transacao);