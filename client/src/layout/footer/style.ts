import {StyleSheet} from "react-native"
import {wrapper} from "../../static/styles/mixins"
import {gray50} from "../../static/styles/var"

export const styles = StyleSheet.create({
    container: {
        ...wrapper,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: gray50,
        borderTopWidth: 1,
        borderTopColor: '#E1E1E1',
        paddingTop: 2,
        paddingBottom: 5
    }
})
