import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import EmailAndPassword from "./EmailAndPassword";
const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text> LoginForm </Text>
      <View style={styles.emailAndPassword}>
        <EmailAndPassword />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    // alignItems: "center",
    // backgroundColor: "#2c3e50"
  },
  emailAndPassword: {
    flex: 2
  }
});
export default LoginForm;
