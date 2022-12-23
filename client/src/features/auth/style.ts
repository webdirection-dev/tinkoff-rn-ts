import {StyleSheet} from "react-native"
import {generalContainer} from "../../static/styles/mixins"
import {gray800, colorLoader} from "../../static/styles/var"

export const stylesAuth = StyleSheet.create({
    container: {
        ...generalContainer,
        justifyContent: "center",
        alignItems: "center"
    },
    wrapper: {
        width: '80%',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        textAlign: "center",
        color: gray800,
        marginBottom: 2,
    },
    loader: {
        color: colorLoader
    },
    switches: {
        color: gray800,
        opacity: .3,
        textAlign: 'right',
        marginTop: 15
    },
})
