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
    console.log(this.props.perfil);
  }

  getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
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
        this.props.dispatch({ type: "add/foto", item: perfilAtualizado});
        this.props.navigation.navigate('Perfil');
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
