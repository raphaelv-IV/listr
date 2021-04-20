import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ImageBackground, Text, TextInput} from 'react-native';
import Button from '../components/Button';



const WelcomeScreen = () => (
  <View style={styles.container}>

    <ImageBackground source={require('../assets/nyc700.jpg')} style={styles.image}>
      <Image style={styles.logo} source={require('../assets/logo2.png')}/>
      <Button text="Login"></Button>
    </ImageBackground>
    

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logo: {
    bottom: 230
 
  }
});




export default WelcomeScreen;
