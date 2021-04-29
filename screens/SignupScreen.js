import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, TextInput } from 'react-native';
import Button from '../components/Button';
import auth from "@react-native-firebase/auth";
import { NavigationEvents, StackNavigator } from 'react-navigation';
import TabNav from '../navigation/TabNav';
import firebase from 'firebase';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const ios = (Platform.OS == "ios" ? true : false);

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: " ",
            email: " ",
            password: " "
        }
        this.onSignup = this.onSignup.bind(this)

    }


    onSignup() {
        const { email, password, name } = this.state;
        const {navigate} = this.props.navigation 
        firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
        .then((result) => {
            console.log(result)
            navigate("Home")
        })
       .catch((error) => {
           console.log(error)

       })
    }
    

    render() {
        const whatStyle = (Platform.OS == "ios" ? styles.iphoneStyle: styles.androidStyle)
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
                enabled={Platform.OS === "ios" ? true : false}
                style={styles.screen}>
                <Image source={require('../assets/logoMAIN1.png')} style={{resizeMode: 'contain', width: "50%", top: "10%"}}/>
                <View style={styles.container}>
                    <Icon name="account-box" style={styles.iconStyle}></Icon>
                    <TextInput placeholder="Name" style={whatStyle} onChangeText={(name) => this.setState({name})} value={this.state.name.placeholder}></TextInput> 
                </View>    
                <View style={styles.container}>
                    <Icon name="mail" style={styles.iconStyle}></Icon>
                    <TextInput placeholder="Email" style={whatStyle}  onChangeText={(email) => this.setState({email})} value={this.state.email.placeholder}></TextInput>
                </View>
                <View style={styles.container}>
                    <Icon name="lock" style={styles.iconStyle}></Icon>
                    <TextInput placeholder="Password" style={styles.inputStyle} onChangeText={(password) => this.setState({password})} value={this.state.password.placeholder}></TextInput> 
                </View>
                <View style={styles.btn}>
                    <Button title="Sign Up" onPress={() => this.onSignup()}/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginTop: '-60%'
    },
    btn: {
        padding: "5%"
    },
    errorMess: {
        height: 72,
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: "red",
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center"
    },
    container: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: 'center'
    },
    inputStyle: {
        color: "#000",
        marginLeft: 15,
        paddingRight: 15,
        fontSize: 16,
        flex: 1,
        lineHeight: 15,
        borderBottomWidth: 1,
        borderColor: "#D9D5DC",
        paddingTop: 14,
        paddingBottom: 8
    },
    iconStyle: {
        color: "#616161",
        fontSize: 24,
        paddingLeft: 10
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
        paddingBottom:15
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






