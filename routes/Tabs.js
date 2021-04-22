import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import DashBoard from './screens/DashBoard';




const Tabs = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tabs.Navigator
    tabBarOptions={{
        showLabel: false,
        style: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: 15,
            height: 90,
            ...styles.shadow
        }
    }}>
      <Tabs.Screen name="Home" component={DashBoard} options={{
          tabBarIcon: ({focused}) => (
              <View>
                <Image 
                source={require('../assests/home.png')} 
                resizeMode='contain' 
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94'
                }}/>
                <Text style={{color: focused ? '#e32f45' : '#748c94' }}>HOME</Text>
              </View>
          )
      }} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="AddList" component={AddList} />
      <Tabs.Screen name="Messages" component={Messages} />
      <Tabs.Screen name="Settings" component={Settings} />

    </Tabs.Navigator>
  );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5

    }
});

export default TabNav; 