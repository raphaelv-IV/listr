import React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Image } from 'react-native';
import TextBox2 from '../components/TextBox2';
import TextBox3 from '../components/TextBox3';
import Button from '../components/Button';

const ios = (Platform.OS == "ios" ? true : false);
const LoginScreen = ({navigation}) => {    
    return (
    <KeyboardAvoidingView
    behavior={ios ? "padding" : "height"}
    keyboardVerticalOffset={ios ? 0 : 20}
    enabled= {ios}
    style={styles.screen}>
        <></>
        <TextBox2 ios={ios}/>
        <TextBox3 ios={ios}/>
        <View style={styles.btn}>
        <Button title="Login" />
        <Button title="Sign Up" onPress={() => navigation.navigate("Sign Up")}/>
        </View>
    </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '7%'
    },
    btn: {
        padding: '5%'

    }
});

export default LoginScreen;



