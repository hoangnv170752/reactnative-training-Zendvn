import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../constants/colors";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },  
    footerText: {
        color: colors.midgrey,
        fontSize: 15,
        textAlign: 'center'
    },
    footerLink: {
        paddingLeft: 4,
        color: colors.purple,
        fontWeight: 'bold'
    }
})

export default styles;