/* eslint-disable prettier/prettier */

import React from "react";
import { Text, TextInput } from 'react-native';
import styles from "./styles";
import colors from "../../constants/colors";
const Input = ({outlined, ...props}) => {
    return (
        <TextInput 
        {...props} 
        style={[styles.input, outlined ? styles.outlined : {}]} 
        placeholderTextColor={colors.midgrey}
        />
    )
}

export default Input;