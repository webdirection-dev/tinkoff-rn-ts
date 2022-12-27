import {StyleSheet} from "react-native"
import {h2, wrapper} from "../../static/styles/mixins"

export const styles = StyleSheet.create({
    wrapper,
    h2: {
        ...h2,
        textAlign: "center",
    }
})
