import {StyleSheet} from "react-native"
import {blue500, gray500, gray800} from "../../../static/styles/var"

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(186,215,239,0.29)',
        borderTopColor: gray500,
        padding: 20,
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    txt: {
        fontWeight: "bold",
        fontSize: 16,
        color: gray800,
        textTransform: "capitalize",
    },
    counter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        backgroundColor: blue500,
        borderRadius: 50,
    }
})
