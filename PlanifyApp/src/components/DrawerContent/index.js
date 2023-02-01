/* eslint-disable prettier/prettier */

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Text, Linking } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import styles from './styles';
import auth  from '@react-native-firebase/auth';
import { TERMS_CONDITIONS_LINK } from '../../constants/links';
import { PRIVACY_POLICY_LINK } from '../../constants/links';
function DrawerContent(props) {
    const {navigation} = props;
    const logout = () => {
        auth()
        .signOut()
        .then(() => {
            console.log('User signed out!')
        });
    };
    return (
        <DrawerContentScrollView {...props}>
            <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Home</Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>Tasks</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>Privacy Policy</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>Terms & Conditions</Text>
            <Text style={styles.link} onPress={logout}>
                Log out
            </Text>
        </DrawerContentScrollView>
    )
}

export default DrawerContent;
