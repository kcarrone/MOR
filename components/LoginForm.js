import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text> LoginForm </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    // alignItems: "center",
    // backgroundColor: "#2c3e50"
  }
});
export default LoginForm;
