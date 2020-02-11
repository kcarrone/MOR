import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";
class App extends Component {
  state = {
    loggedIn: false
  };
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
