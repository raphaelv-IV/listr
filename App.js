import React, {useState, useEffect } from 'react';
import * as firebase from 'firebase';
import MainStack from './navigation/RootNav';
import {View, Text, ActivityIndicator} from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import rootReducer from './components/redux/reducers';
import thunk from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(thunk))

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



