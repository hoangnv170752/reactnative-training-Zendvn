/* eslint-disable prettier/prettier */

import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    image: {
        width: '100%',
        flex: 1,
    },
    content: {
        padding: 46,
        backgroundColor: colors.white,
    },
    title: {
        color: colors.black,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 21
    },
    subtitle: {
        color: colors.grey,
        textAlign: 'center',
        fontSize: 15, 
        marginVertical: 16
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        width: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})

export default styles;