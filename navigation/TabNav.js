import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoardScreen from '../screens/DashBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AddListScreen from '../screens/AddListScreen';
import SearchScreen from '../screens/SearchScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();
const CustomTabBarButtion = ({children, onPress}) => (
    <TouchableOpacity
    style={{
        top: -30,
        alignItems: 'center',
        justifyContent: 'center',
        ...styles.shadow    
    }}
    onPress={onPress}>
    
         <View style={{
             width: 70,
             height: 70,
             borderRadius: 35,
             backgroundColor: "black"
         }}>
            {children}
        </View>
    </TouchableOpacity>
);

const MessageScreen =({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen name="Messages" component={MessagesScreen}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>
    </Stack.Navigator>
);

const HomeTabs = () => {
    return (
        <NavigationContainer independent>
            <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    backgroundColor: "white",
                    height: "11%",
                    bottom: "3%",
                    left: "4%",
                    right: "4%",
                    elevation: 0,
                    borderRadius: 15,
                    ...styles.shadow
                }
            }}>
                <Tabs.Screen name="Home" component={DashBoardScreen} 
                options={{
                        tabBarIcon: ({focused}) => (
                            <View style={{alignItems: 'center', justifyContent: 'center', top: "2%"}}>
                                <Image 
                                source={require('../assets/home2.jpg')}
                                resizeMode="contain"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? 'black' : '#748c94'
                                }}/>
                            <Text style={{color: focused ? "black" : '#748c94', fontSize: 12}}>Home</Text>
                        </View>                 
                    )
                }}/>
                <Tabs.Screen name="Search" component={SearchScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: "2%"}}>
                            <Image 
                            source={require('../assets/search.png')}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: focused ? 'black' : '#748c94'
                            }}/>
                            <Text style={{color: focused ? "black" : '#748c94', fontSize: 12}}>Search</Text>
                        </View>
                    )
                }}/>
                <Tabs.Screen name="AddList" component={AddListScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source={require('../assets/plus.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#fff',
                            tintColor: focused ? 'transparent' : 'white'
                        }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButtion {...props}/>
                    )
                }}/>
                <Tabs.Screen name="Settings" component={FavoritesScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: "2%"}}>
                            <Image 
                            source={require('../assets/heart.jpg')}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: focused ? 'black' : '#748c94'
                            }}/>
                            <Text style={{color: focused ? "black" : '#748c94', fontSize: 12}}>Favorites</Text>
                        </View>
                    )
                }}/>
                <Tabs.Screen name="Messages" component={MessagesScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: "2%"}}>
                            <Image 
                            source={require('../assets/mail.png')}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: focused ? 'black' : '#748c94'
                            }}/>
                            <Text style={{color: focused ? "black" : '#748c94', fontSize: 12}}>Messages</Text>
                        </View>
                    )
                }}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
};


const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: {
            height: 10,
            width: 0   
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 5
    }
});




export default HomeTabs;