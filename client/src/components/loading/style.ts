import {StyleSheet} from "react-native"
import {h3} from "../../static/styles/mixins"

export const styles = StyleSheet.create({
    h3: {
        ...h3,
        marginLeft: 10,
    },
    loading: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 5,
    },
})
