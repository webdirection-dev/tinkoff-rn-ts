import {StyleSheet} from "react-native"
import {blue500} from "../../../static/styles/var"

export const styles = StyleSheet.create({
    currOut: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: blue500,
    },
    currIn: {
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#EDF4FE',
    },
    balanceWrapper: {
        width: '67%',
        height: '100%',
    },
    mini: {
        justifyContent: "flex-end",
        backgroundColor: 'lightgray',
        width: 60,
        height: 35,
        borderRadius: 2,
        padding: 4,
    }
})
