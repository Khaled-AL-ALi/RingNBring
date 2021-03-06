import * as React from "react";
import Register from './pages/register'
import Profile from "./pages/profile";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signeup";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login or sign up">
        <Stack.Screen name="Share your experience" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login or sign up" component={Register} />
        <Stack.Screen name="Log In" component={Login} />
        <Stack.Screen name="Create New Account" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}