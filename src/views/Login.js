import React, { Component } from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import * as firebase from "firebase";

import PrimaryTitle from "../components/primaryTitle";
import Input from "../components/input";
import Button from "../components/button";

export default class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.errorMessage }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={{ fontSize: 12, color: "red" }}>
              {this.state.errorMessage}{" "}
            </Text>
          )}
        </View>
        <PrimaryTitle titleText="Giriş Yap" />
        <Input
          title="E-posta"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
        ></Input>

        <Input
          title="Parola"
          secureTextEntry={true}
          autoCorrect={false}
          keyboardType="default"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          style={styles.input}
        ></Input>

        <Text style={styles.errorMessage}>{this.state.error}</Text>

        <Button title="Giriş Yap" onPress={this.handleLogin}></Button>

        <View style={styles.textButton}>
          <Text style={{ fontSize: 18 }}>Hesabın yok mu ?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={{ fontWeight: "bold", marginLeft: 10, fontSize: 18 }}>
              Kayıt Ol
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  errorMessage: {
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
};
