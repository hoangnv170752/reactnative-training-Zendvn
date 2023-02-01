/* eslint-disable prettier/prettier */

import React from "react";
import { Text, TextInput } from 'react-native';
import styles from "./styles";
import colors from "../../constants/colors";
const Input = ({...props}) => {
    return (
        <TextInput 
        s
        {...props} 
        style={styles.input} 
        placeholderTextColor={colors.midgrey}
        />
    )
}

export default Input;