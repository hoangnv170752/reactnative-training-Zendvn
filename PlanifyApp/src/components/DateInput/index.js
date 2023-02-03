/* eslint-disable prettier/prettier */

import React , {useState} from "react";
import { Text, TextInput , Image} from 'react-native';
import styles from "./styles";
import colors from "../../constants/colors";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import moment from "moment";

const DateInput = ({value, onChange,  ...props}) => {
    const onDateOpen = () => {
        setOpen(true);
    };
    const [open, setOpen] = useState(false);
    return (
        <>
            <TouchableOpacity onPress={onDateOpen} style={styles.outlined}>
                <Image 
                resizeMode="contain"
                style={styles.icon}
                source={require('../../assets/calendar.png')}/>
                <Text style={styles.text}>
                    {moment(value).format('L') || 'Select Date ...'}
                </Text>
            </TouchableOpacity>
            <DatePicker
                modal
                mode="date"
                open={open}
                date={value}
                onConfirm={
                    date => {
                        setOpen(false)
                        onChange(date)
                    }
                }
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </>
    )
}

export default React.memo(DateInput);