import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, ImageBackground, Text, TextInput, onPress} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from '../components/Button';


export default class WelcomeScreen extends React.Component {
    constructor(props) {
      super(props);
    }

    
    render() {
      const {navigate} = this.props.navigation
      return (
        <ImageBackground source={require('../assets/nyc600.jpg')} style={styles.bckimage}>
          <View style={styles.logo}>
          <Image source={require('../assets/logoMAIN1.png')}/>
          </View>
          <Button onPress={() => navigate("Login")} title="BEGIN"/>
        </ImageBackground>
      )
    }
};



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

