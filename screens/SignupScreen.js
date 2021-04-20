import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../AppStyles";
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      fullname: "",
      phone: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    this.authSubscription = auth().onAuthStateChanged(user => {
      this.setState({
        loading: false,
        user
      });
    });
  }

  componentWillUnmount() {
    this.authSubscription && this.authSubscription();
  }




const SignupScreen = () => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})
