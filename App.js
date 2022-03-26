/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';


const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          component={HomeScreen}
          name="Home"
        />
        <Stack.Screen 
          component={FirstScreen}
          name="First"
        />
        <Stack.Screen 
          component={SecondScreen}
          name="Second"
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
