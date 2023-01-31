import {StyleSheet} from "react-native"
import {BOX_SHADOW} from "../../../static/styles/style"
import {blue500, gray500, gray800} from "../../../static/styles/var"

export const styles = StyleSheet.create({
    container: {
        ...BOX_SHADOW,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    title: {fontSize: 21, color: gray800, fontWeight: "bold"},
    subtitle: {marginTop: 5, color: gray500, opacity: .9, fontSize: 13},
    icon: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: blue500,
    }
})
