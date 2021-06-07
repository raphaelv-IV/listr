import React from 'react';
import { Apploading, Asset, Font } from 'expo';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './navigation/RootNav';
import auth from "@react-native-firebase/auth";
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import rootReducer from './components/redux/reducers';
import thunk from 'redux-thunk';
import AddListScreen from './screens/AddListScreen';

const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createStackNavigator();

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
                    loaded: false
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
                    <Text>Loading</Text>
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





