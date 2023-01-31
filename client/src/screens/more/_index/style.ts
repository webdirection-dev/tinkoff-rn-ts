import {StyleSheet} from "react-native"
import {wrapper} from "../../../static/styles/mixins"
import {gray500} from "../../../static/styles/var";

export const styles = StyleSheet.create({
    container: {...wrapper},
    copyright: {
        textAlign: "center",
        color: gray500,
        marginVertical: 20,
        opacity: .7,
    }
})
