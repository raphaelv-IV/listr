import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeTabs from '../navigation/TabNav';

const Stack = createStackNavigator();


export default MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} /> 
                <Stack.Screen name="Login" component={LoginScreen} /> 
                <Stack.Screen name="Sign Up" component={SignupScreen} /> 
                <Stack.Screen name="Home" component={HomeTabs} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
};
