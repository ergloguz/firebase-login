import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as firebase from "firebase";

import SignUpScreen from "./src/views/SignUp";
import LoginScreen from "./src/views/Login";

var firebaseConfig = {
  apiKey: "***",
  authDomain: "***",
  databaseURL: "***",
  projectId: "***",
  storageBucket: "***",
  messagingSenderId: "***",
  appId: "***",
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => {
          return { headerMode: "none", header: () => {} };
        }}
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        options={() => {
          return { headerMode: "none", header: () => {} };
        }}
        headerShown="false"
        name="SignUp"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
