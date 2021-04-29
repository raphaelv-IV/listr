import React from 'react';
import { Apploading, Asset, Font } from 'expo';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './navigation/RootNav';
var firebaseConfig = {
    apiKey: "AIzaSyBA8473wfKUb1AokPxuoaoAZSs5tv5i70c",
    authDomain: "listr-ecbe5.firebaseapp.com",
    databaseURL: "https://listr-ecbe5-default-rtdb.firebaseio.com",
    projectId: "listr-ecbe5",
    storageBucket: "listr-ecbe5.appspot.com",
    messagingSenderId: "1053803065760",
    appId: "1:1053803065760:web:29af2fe7d51eb3a18f74c5",
    measurementId: "G-T8G6VVEM5H"
};


if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig)};




export default class App extends React.Component {
    render() {
        return (
            <MainStack/>
        )
    }
}



