import {StyleSheet} from "react-native"
import {centerItem} from "../../static/styles/style"
import {gray300} from "../../static/styles/var"

export const styles = StyleSheet.create({
    container: {
        ...centerItem,
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: gray300
    },
})
