import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Text, Image, TextInput } from 'react-native';
import TextBox2 from '../components/TextBox2';
import TextBox3 from '../components/TextBox3';
import Button from '../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import auth from "@react-native-firebase/auth";
import firebase from 'firebase';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email: " ",
            password: " "
        }
       
    }

    onLogin() {
        const { email, password } = this.state;
        const {navigate} = this.props.navigation 
        firebase.auth().signInWithEmailAndPassword(email.trim(), password)
        .then((result) => {
            console.log(result)
            navigate("Home")
        })
       .catch((error) => {
           console.log(error)

       })
    }
    


    render() {
        const ios = (Platform.OS == "ios" ? true : false);
        const {navigate} = this.props.navigation 
        const whatStyle = (Platform.OS == "ios" ? styles.iphoneStyle: styles.androidStyle)
        return (
            <KeyboardAvoidingView
            behavior={ios ? "padding" : "height"}
            keyboardVerticalOffset={ios ? 0 : 20}
            enabled= {ios}
            style={styles.screen}>
                <Image source={require('../assets/logoMAIN1.png')} style={{resizeMode: 'contain', width: "50%", top: "10%"}}/>
                <View style={styles.container}>
                    <Icon name="mail" style={styles.iconStyle}></Icon>
                    <TextInput placeholder="Email" style={whatStyle}  onChangeText={(email) => this.setState({email})} value={this.state.email.placeholder}></TextInput>
                </View>
                <View style={styles.container}>
                    <Icon name="lock" style={styles.iconStyle}></Icon>
                    <TextInput placeholder="Password" style={whatStyle} onChangeText={(password) => this.setState({password})} value={this.state.password.placeholder}  ></TextInput> 
                </View>
    
                <View style={styles.btn}>
                    <Button title="Login" onPress={() => this.onLogin()} />
                    <TouchableOpacity style={styles.signup} onPress={() => navigate("Sign Up")}>
                    <Text>New to Listr?</Text><Text style={{color: "red"}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
    
            </KeyboardAvoidingView>
        )
    }

}



const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '-60%'
    },
    btn: {
        padding: '5%'

    },
    signup: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    signup2: {
        alignItems: 'center',
        flexDirection: 'row'

    },
    txt: {
        padding: "2%"
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
    androidStyle: {
        flex: 1,
        color: "#000",
        marginLeft: 15,
        paddingRight: 5,
        fontSize: 16,
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
        paddingTop: 14
    },
    iconStyle: {
        color: "#616161",
        fontSize: 24,
        paddingLeft: 10
    }
});



