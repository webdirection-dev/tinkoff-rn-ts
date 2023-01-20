import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 0,
        height: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderStyle: "solid",
        borderRightWidth: 30,
        borderTopWidth: 30,
        borderRightColor: 'transparent',
        borderTopColor: '#aaef00',
        transform: [{rotate: '90deg'}],
    },
    txt: {
        position: 'absolute',
        top: -29,
        left: 3,
        width: 25,
        height: 25,
        fontSize: 12,
        transform: [{rotate: '-40deg'}],
    }
})
