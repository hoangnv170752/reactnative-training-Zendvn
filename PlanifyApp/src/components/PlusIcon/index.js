/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const PlusIcon = ({title}) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('AddTask');
    };
    return (
        <Pressable hitSlop={8} onPress={onPress} style={styles.container}>
            <Text style={styles.plus}>+</Text>
        </Pressable>
    );
};

export default PlusIcon; 