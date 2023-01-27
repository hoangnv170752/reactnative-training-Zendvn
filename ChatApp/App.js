import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigation from './navigation'
import AuthStackScreen from './navigation/Auth'

export default function App() {
  return (
    <NavigationContainer>
        <MyNavigation />
    </NavigationContainer>
  )
}

