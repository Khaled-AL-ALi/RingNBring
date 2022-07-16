import * as React from "react";
import Register from './pages/register'
import Profile from "./pages/profile";
import Home from "./pages/home";
import Login from "./pages/login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Share your experience">
        <Stack.Screen name="Share your experience" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login or sign up" component={Register} />
        <Stack.Screen name="Create New Account" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}