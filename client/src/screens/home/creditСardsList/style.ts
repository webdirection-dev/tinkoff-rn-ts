import {StyleSheet} from "react-native"
import {wrapper} from "../../../static/styles/mixins"
import {colorLoader} from "../../../static/styles/var"

export const styles = StyleSheet.create({
    container: {
        ...wrapper,
        marginTop: 20,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        borderBottomColor: '#E0E1E2',
        marginBottom: 30,
        paddingBottom: 30,
    },
    loader: {
        color: colorLoader
    },
})
