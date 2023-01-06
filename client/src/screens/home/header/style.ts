import {StyleSheet} from "react-native"
import {gray800} from "../../../static/styles/var"
import {wrapper} from "../../../static/styles/mixins"

const style = StyleSheet.create({
    header: {
        ...wrapper,
        flexDirection: "row",
        alignItems: "center",
    },
    btn: {
        flexDirection: "row",
        alignItems: 'center',
    },
    icon: {color: gray800},
})

export const styles = {
    header: {
        container: style.header,
        btn: style.btn,
        icon: style.icon,
    }
}
