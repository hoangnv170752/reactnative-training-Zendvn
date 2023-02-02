/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    outlined: {
        backgroundColor: colors.white,
        borderColor: colors.blue,
        borderWidth: 1,
        paddingHorizontal: 24,
        paddingVertical: 13,
        borderRadius: 10,
        color: colors.black,
        marginVertical: 12,
        fontSize: 15,
        flexDirection: 'row',
        margin: 24
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    text: {
        fontSize: 15,
        color: colors.grey,
    },
});

export default styles;