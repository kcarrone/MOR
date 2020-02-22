import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import EmailAndPassword from "./EmailAndPassword";
export default class LoginForm extends Component {
  render(){
  return (
    <View style={styles.container}>
      <Text> LoginForm </Text>
      <View style={styles.emailAndPassword}>
        <EmailAndPassword {...this.props}/>
      </View>
      <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <Text
            style={styles.signupButton}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            Signup
          </Text>
        </View>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#2c3e50"
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 20,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(225,225,255,0.7)",
    fontSize: 16
  },
  signupButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "500"
  },
  emailAndPassword: {
    flex: 2
  }
});
