import React, { Component } from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import * as firebase from "firebase";

import PrimaryTitle from "../components/primaryTitle";
import Input from "../components/input";
import Button from "../components/button";

export default class SignUpScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null,
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
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
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Image
              style={styles.back}
              source={require("../icons/back.png")}
            ></Image>
          </TouchableOpacity>

          <PrimaryTitle titleText="Kayıt Ol" />
        </View>

        <Input
          title="Ad Soyad"
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
        ></Input>

        <Input
          title="E-posta Adresi"
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

        <Button title="Kayıt Ol" onPress={this.handleSignUp} />
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
  header: {
    alignItems: "center",
    flexDirection: "row",
  },
  back: {
    height: 30,
    width: 30,
    marginRight: 20,
    marginTop: 20,
  },
  errorMessage: {
    alignItems: "center",
    justifyContent: "center",
  },
};
