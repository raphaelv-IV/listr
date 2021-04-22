import React from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import TextBox from '../components/TextBox';
import TextBox2 from '../components/TextBox2';
import TextBox3 from '../components/TextBox3';
import Button from '../components/Button';

const SignupScreen = ({navigation}) => {
    return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
    enabled={Platform.OS === "ios" ? true : false}
    style={styles.screen}>
        <TextBox />
        <TextBox2 />
        <TextBox3 />
        <View style={styles.btn}>
        <Button title="Sign Up" />
        </View>
    </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '7%',
    },
    btn: {
        padding: "5%"
    }
});

export default SignupScreen;



