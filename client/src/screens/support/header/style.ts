import {StyleSheet} from "react-native"
import {gray800, gray500} from "../../../static/styles/var"
import {wrapper} from "../../../static/styles/mixins"

export const styles = StyleSheet.create({
    container: {
        ...wrapper,
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 10,
        marginVertical: 10,
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        color: gray800,
        fontWeight: 'bold',
        textTransform: "capitalize",
    },
    subtitle: {
        fontSize: 13,
        color: gray500,
        marginTop: 3,
    },
})
