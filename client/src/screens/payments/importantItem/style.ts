import {StyleSheet} from "react-native"
import {BOX_SHADOW} from "../../../static/styles/style";

export const styles = StyleSheet.create({
    container: {
        ...BOX_SHADOW,
        width: 110,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 15,
        marginRight: 20,
        padding: 10,
    },
    txt: {
        fontSize: 12,
        marginTop: 6,
    }
})
