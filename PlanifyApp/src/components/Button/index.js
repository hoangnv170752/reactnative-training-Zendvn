/* eslint-disable prettier/prettier */

import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ onPress, type, children, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, type === 'blue' ? styles.blueBg : {}, style]}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;