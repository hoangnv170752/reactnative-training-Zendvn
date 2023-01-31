import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.purple,
        borderRadius: 3,
        height: 16,
        width: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerSquare: {
        width: 10,
        height: 10,
        backgroundColor: colors.purple
    },
    checkedBox: {
        borderWidth: 1,
    }
});

export default styles;