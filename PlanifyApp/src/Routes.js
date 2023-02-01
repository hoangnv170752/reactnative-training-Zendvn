/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Onboarding from './screens/auth/Onboarding';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Signin';
import auth from '@react-native-firebase/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/app/Home';
import AddTask from './screens/app/AddTask';
import Tasks from './screens/app/Tasks';
import DrawerContent from './components/DrawerContent';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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

  const Tabs = () => (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen name="Home" component={Home} 
        options={{tabBarIcon: ({focused}) => (
        <Image source={focused ? require('./assets/home_active.png') : require('./assets/home_inactive.png')} style={styles.icon}/>
        )}}
      />
      <Tab.Screen name="Tasks" component={Tasks} 
        options={{tabBarIcon: ({focused}) => (
          <Image source={focused ? require('./assets/calendar_active.png') : require('./assets/calendar_inactive.png')} style={styles.icon}/>
        )}}
      />
    </Tab.Navigator>
  );
  if (user) {
    // const logout = () => {
    //   auth()
    //   .signOut()
    //   .then(() => console.log('User signed out'));
    // };
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator> 
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

const styles =StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
})
export default Routes;
