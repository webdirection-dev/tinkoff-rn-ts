import {StyleSheet} from "react-native"
import {wrapper} from "../../../static/styles/mixins"

export const styles = StyleSheet.create({
    container: {
        ...wrapper
    },
    card: {
        borderBottomColor: '#E0E1E2',
        marginBottom: 24,
    }
})
