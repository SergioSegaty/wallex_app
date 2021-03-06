import React, { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const LoginLabel = styled.Text`
  font-size: 25px;
  margin-top: 25px;
  margin-left: 70px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  align-self: flex-start;
`;

const LoginInput = styled.TextInput`
  border-radius: 10px;
  width: 60%;
  height: 40px;
  background-color: white;
  font-size: 15px;
  font-weight: bold;
`;

const LoginBox = styled.View`
  width: 90%;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  border-color: white;
  border-width: 2px;
`;

const BtnLogin = styled.TouchableHighlight`
  width: 35%;
  height: 55px;
  margin-top: 40px;
  border-width: 2px;
  border-color: white;
  border-radius: 6px;
  padding: 15px;
  justify-content: center;
  margin-bottom: 10px;
`;

const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

function LoginPanel(props) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  let senhaInput;

  return (
    <View style={{ alignItems: "center" }}>
      <LoginBox>
        <LoginLabel>Login</LoginLabel>
        <LoginInput
          paddingLeft={5}
          onChangeText={(text) => setLogin(text)}
          onSubmitEditing={() => senhaInput.focus()}
          value={login}
        />

        <LoginLabel>Senha</LoginLabel>
        <LoginInput
          onChangeText={(text) => setSenha(text)}
          ref={(ref) => (senhaInput = ref)}
          paddingLeft={5}
          secureTextEntry={true}
          value={senha}
          onSubmitEditing={() =>
            props.onLoginCallback({ login: login, senha: senha })
          }
        />

        <View style={{ marginTop: 20 }}>
          <BtnLogin
            color="#58cc4d"
            underlayColor="rgba(255,255,255,0.3)"
            onPress={() =>
              props.onLoginCallback({ login: login, senha: senha })
            }
          >
            <BtnText>Entrar</BtnText>
          </BtnLogin>
        </View>
      </LoginBox>
    </View>
  );
}

export default LoginPanel;
