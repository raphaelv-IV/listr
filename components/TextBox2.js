import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Textbox2(props) {
  const whatStyle = (props.ios ? styles.iphoneStyle: styles.androidStyle)
  return (
    
    <View style={[styles.container, props.style]}>
  
      <Icon name="mail" style={styles.iconStyle}></Icon>
      <TextInput placeholder="Email" style={whatStyle}>
      </TextInput>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: 'center'
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingLeft: 8
  },
  androidStyle: {
    color: "#000",
    marginLeft: 15,
    paddingRight: 5,
    fontSize: 16,
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom:8
  },
  iphoneStyle: {
    color: "#000",
    marginLeft: 15,
    paddingRight: 5,
    fontSize: 14,
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 2,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8
  }
});

export default Textbox2;
