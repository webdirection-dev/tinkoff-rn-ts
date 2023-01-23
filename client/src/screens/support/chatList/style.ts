import {StyleSheet} from "react-native"
import {wrapper} from "../../../static/styles/mixins"
import {blue500} from "../../../static/styles/var";

export const styles = StyleSheet.create({
    container: {
        ...wrapper,
        marginBottom: 20,
    },
    iconWrapper: {
        padding: 20,
        alignItems: "flex-end"
    },
    icon: {
        fontSize: 45,
        fontWeight: 'bold',
        color: blue500,

    }
})
