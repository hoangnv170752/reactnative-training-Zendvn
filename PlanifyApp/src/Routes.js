/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import Onboarding from './screens/auth/Onboarding';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Signin';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();
const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return null;

  if (user) {
    return (
      <Onboarding />
    );
  }
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding } />
        <Stack.Screen name="Signup" component={Signup } />
        <Stack.Screen name="Signin" component={Signin } />
      </Stack.Navigator>
  );
}

export default Routes;
