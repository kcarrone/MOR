import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
class SignUpForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Register </Text>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "#2c3e50"
    }
  });
export default SignUpForm;