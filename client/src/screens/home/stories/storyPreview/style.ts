import {StyleSheet} from "react-native"
import {blue400} from "../../../../static/styles/var"

const style = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    item: {
        width: 100,
        height: 100,
        borderRadius: 20,
        borderStyle: "solid",
        borderColor: blue400,
        borderWidth: 1,
        padding: 2,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        margin: 8
    },
})

export const styles = {
    main: {
        container: style.container,
        item: style.item,
        imgBackground: style.imgBackground,
        title: style.title,
    },
}
