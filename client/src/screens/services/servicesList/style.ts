import {StyleSheet} from "react-native"
import {wrapper} from "../../../static/styles/mixins";

export const styles = StyleSheet.create({
    container: {
        ...wrapper,
        flexDirection: "row",
        flexWrap: "wrap",
    },
})
