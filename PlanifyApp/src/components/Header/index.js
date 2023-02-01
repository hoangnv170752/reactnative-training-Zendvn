/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Header = ({title}) => {
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <View style={styles.container}>
            <Pressable hitSlop={8} onPress={openDrawer}>
                <Image source = {require('../../assets/menu.png')}  style={styles.icon}/>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.icon}/>
        </View>
    );
};

export default Header; 