import {StyleSheet} from "react-native"
import {gray800} from "../../static/styles/var"
import {wrapper} from "../../static/styles/mixins"

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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: gray800,
        textTransform: "capitalize"
    },
    icon: {
        color: gray800,
    },
    main: {
        ...wrapper,
    }
})

export const styles = {
    header: {
        container: style.header,
        btn: style.btn,
        title: style.title,
        icon: style.icon,
    },

    main: {
        container: style.main,
    },
}
