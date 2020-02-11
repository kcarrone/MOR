import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";
import firebase from "firebase";
class App extends Component {
  state = {
    loggedIn: null
  };
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDm4fVfSC56k_s3h9Jq6PuJdopdJ-Bak5Y",
      authDomain: "mor-maintain-our-road.firebaseapp.com",
      databaseURL: "https://mor-maintain-our-road.firebaseio.com",
      projectId: "mor-maintain-our-road",
      storageBucket: "mor-maintain-our-road.appspot.com",
      messagingSenderId: "315287565804",
      appId: "1:315287565804:web:521bdeffcabee3472abcc9",
      measurementId: "G-R2Q1FWHT3W"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }
  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return <LoginForm />;
      case false:
        return <MainPage />;
    }
  };
  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default App;
