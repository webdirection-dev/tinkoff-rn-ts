import {Alert} from "react-native"

//RANDOM NUMBERS
export const getRandomCardNumber = () => {
    let out = ''
    for (let i = 0; i < 4; i++) {
        const random = Math.round(1000 + Math.random() * 9000)
        if (i !== 0) out += ' '
        out += random
    }
    return out
}

//ALERTING
export const defaultAlert = (title, message, btnTitle = 'OK') => Alert.alert(title, message, [ {text: btnTitle} ])

//PROMISE
export const promiseChoosingCreditCard = ({title, message, btnTxt}) => new Promise((resolve, reject) => {
    Alert.alert(title, message, [
            {text: btnTxt.titleLeft, onPress: () => {resolve(btnTxt.txtOutLeft)}},
            {text: btnTxt.titleRight, onPress: () => {resolve(btnTxt.titleRight)}},
        ], {cancelable: false})
})
