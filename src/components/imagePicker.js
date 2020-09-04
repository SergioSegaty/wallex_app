import * as React from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { connect } from "react-redux";
import styled from "styled-components";

const BtnFoto = styled.TouchableHighlight`
  height: 150px;
  width: 250px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: white;
`;

const BtnText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

class AvatarPicker extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#95c285",
        }}
      >
        <BtnFoto
          onPress={this._pickImage}
          underlayColor={"rgba(255,255,255, 0.4)"}
        >
          <BtnText>Escolha uma Imagem</BtnText>
        </BtnFoto>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert(
          "Desculpe, mas precisamos da permissão da câmera para funcionar!"
        );
      }
    }
  };

  updateState = (perfilAtualizado) => {
    this.props.dispatch({ type: "perfil/selecao", item: perfilAtualizado });
    this.props.dispatch({ type: "add/foto", item: perfilAtualizado });
    this.props.navigation.pop();
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        let perfilAtualizado = this.props.perfil;
        perfilAtualizado.profilePic = result.uri;
        this.updateState(perfilAtualizado);
      }
    } catch (E) {
      throw E;
    }
  };
}

const mapStateToProps = (state) => {
  return {
    perfil: state.perfil.selecao,
  };
};

export default connect(mapStateToProps)(AvatarPicker);
