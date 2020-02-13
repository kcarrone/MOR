import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";
import firebase from "firebase";
import Loading from "./components/Loading";
class App extends Component {
  state = {
    loggedIn: null
  };
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyAvHslFrqopTvuW_jScOQXBmfG65Hjf7N8",
      authDomain: "mor411.firebaseapp.com",
      databaseURL: "https://mor411.firebaseio.com",
      projectId: "mor411",
      storageBucket: "mor411.appspot.com",
      messagingSenderId: "1020872581336",
      appId: "1:1020872581336:web:da336330b6a21bbe1f77ad"
    };
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
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
      case false:
        return <LoginForm />;
      case true:
        return <MainPage />;
      default:
        return <Loading />;
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
