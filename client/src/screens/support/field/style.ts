import {StyleSheet} from "react-native"
import {wrapper} from "../../../static/styles/mixins"
import {gray100} from "../../../static/styles/var"

export const styles = StyleSheet.create({
    container: {
        ...wrapper,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingVertical: 20,
    },
    inputStyles: {
        width: '80%',
        backgroundColor: gray100,
        borderRadius: 18,
        padding: 13,
    }
})
