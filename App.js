import React from 'react';
import { StyleSheet, ImageBackground, View} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';


export default function App() {
  return (
    <WelcomeScreen />

    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  }
});
