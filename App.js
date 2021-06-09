import React, {useState, useEffect } from 'react';
import * as firebase from 'firebase';
import MainStack from './navigation/RootNav';
import {View, Text, ActivityIndicator} from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import rootReducer from './components/redux/reducers';
import thunk from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(thunk))

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
    constructor(props) {
        super(props);
        this.state= {
            loaded: false,
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                this.setState({
                    loggedIn: false,
                    loaded: true
                })
            } else {
                this.setState({
                    loggedIn: true,
                    loaded: true 
                })
        1    }
        })
    }


    render() {
        const { loggedIn, loaded } = this.state;
        if (!loaded) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="black"/>
                </View>
            )
        }
        if (!loggedIn) {
            return (
                <MainStack/>
            )
        }
        return (
            <Provider store={store}>
               <MainStack />
            </Provider>
            
        )
    }
}



