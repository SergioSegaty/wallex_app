import * as React from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { connect } from "react-redux";

class AvatarPicker extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
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
        alert("Sorry, we need camera roll permissions to make this work!");
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
      console.log(E);
    }
  };
}

const mapStateToProps = (state) => {
  return {
    perfil: state.perfil.selecao,
  };
};

export default connect(mapStateToProps)(AvatarPicker);
