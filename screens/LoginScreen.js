import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Header from '../components/Header';

const LoginScreen = () => {
    return (
    <View style={styles.screen}>
            <TextInput style={styles.textInput} placeholder="Email"/>
            <TextInput style={styles.textInput} placeholder="User Name"/>
            <TextInput style={styles.textInput} placeholder="Password"/>
        </View>

    )
}


const styles = StyleSheet.create({
    screen:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        width: '80%',
        marginBottom: 10,
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        paddingHorizontal: 100      
    }
});

export default LoginScreen;




