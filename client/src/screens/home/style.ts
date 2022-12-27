import {StyleSheet} from "react-native"
import {gray800} from "../../static/styles/var"

export const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    btn: {
        flexDirection: "row",
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: gray800,
        textTransform: "capitalize"
    },
    icon: {
        color: gray800,
    }
})
