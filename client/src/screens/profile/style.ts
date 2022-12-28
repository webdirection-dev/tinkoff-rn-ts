import {StyleSheet} from "react-native"
import {h2, wrapper} from "../../static/styles/mixins"
import {colorLoader} from "../../static/styles/var"

import {Dimensions} from "react-native"
const dimensions = Dimensions.get('window')

export const styles = StyleSheet.create({
    wrapper,
    h2: {
        ...h2,
        textAlign: "center",
    },
    loading: {
        height: dimensions.height,
        justifyContent: "center",
    },
    loader: {
        color: colorLoader
    },
})
