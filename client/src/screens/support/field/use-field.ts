import {useState} from "react";
import {Alert} from "react-native"

export const useField = () => {
    const [message, setMessage] = useState('')

    const handleSendMessage = async () => {
        try {
            // await
        }
        catch (e) {Alert.alert('ERROR', e)}
        finally {setMessage('')}
    }

    return {handleSendMessage, message, setMessage}
}
