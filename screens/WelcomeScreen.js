import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ImageBackground, Text, TextInput, onPress} from 'react-native';
import Button from '../components/Button';



const WelcomeScreen = ({navigation}) => (
  <ImageBackground source={require('../assets/nyc600.jpg')} style={styles.bckimage}>
    <View style={styles.logo}>
      <Image source={require('../assets/logoMAIN1.png')}/>
    </View>
    <Button onPress={() => navigation.navigate("Login")} title="Get Started"/>
  </ImageBackground>
);



const styles = StyleSheet.create({
  bckimage: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    marginTop: '-20%',
    left: '1.7%'
  }
});




export default WelcomeScreen;

