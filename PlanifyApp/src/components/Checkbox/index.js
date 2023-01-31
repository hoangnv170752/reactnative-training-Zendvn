import React from "react";
import { Text, TextInput, View, Pressable } from 'react-native';
import styles from "./styles";
import colors from "../../constants/colors";
const Checkbox = ({checked, onPress}) => {
    return (
        <Pressable style={[styles.container, checked ? styles.checkedBox : {}]} onPress={onPress}>
            {
                checked ? (
                    <View style={styles.innerSquare}/>
                ) : null
            }
        </Pressable>
    )
}

export default Checkbox;