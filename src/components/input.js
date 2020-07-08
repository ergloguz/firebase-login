import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({ title, placeholder, onChangeText, value }) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      ></TextInput>
    </View>
  );
};

const styles = {
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: "#767676",
    borderRadius: 10,
    width: "100%",
    paddingLeft: 15,
  },
  label: {
    marginTop: 30,
    marginBottom: "2%",
    marginLeft: "1%",
    fontSize: 16,
    fontWeight: "bold",
  },
};

export default Input;
