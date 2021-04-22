import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/LoginScreen';


const AuthStack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login}/>
            <AuthStack.Screen name="SignUp" component={Signup}/>
        </AuthStack.Navigator>
    </NavigationContainer>
);