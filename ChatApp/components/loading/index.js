import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
import { COLORS } from '../../contains';
const Loading = () => {
    return (
        <View style = {[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default Loading;