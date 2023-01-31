import {StyleSheet} from "react-native"
import {BOX_SHADOW} from "../../../static/styles/style"
import {gray500, gray800} from "../../../static/styles/var";

export const styles = StyleSheet.create({
    container: {
        ...BOX_SHADOW,
        marginVertical: 30,
        flexDirection: "row",
        backgroundColor: 'white',
        paddingVertical: 13,
        justifyContent: "center",
        borderRadius: 20,
    },
    item: {
        fontSize: 21,
        width: '33.33%',
        flexDirection: "row",
        justifyContent: "center",
    },
    title: {color: gray500, marginRight: 5,},
    subtitle: {color: gray800},
})
