import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";

class EmailAndPassword extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };
  onBottomPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };
  onLoginSuccess = () => {
    this.setState({
      error: "",
      loading: false
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onBottomPress}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.errorText}>{this.state.error}</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <Text
            style={styles.signupButton}
            //onPress={() => this.props.navigation.navigate("Signup")}
          >
            Signup
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    justifyContent: "flex-end",

    padding: 20
    //backgroundColor: "#2c3e50"
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.5)",
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor: "red"
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 20,
    flexDirection: "row"
  },
  errorText: {
    fontSize: 18,
    color: "red",
    alignSelf: "center",
    marginTop: 10
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
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: "#3B3B98",
    padding: 15,
    borderRadius: 10
  }
});
export default EmailAndPassword;
