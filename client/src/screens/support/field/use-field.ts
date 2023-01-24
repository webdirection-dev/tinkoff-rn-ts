import {useState} from "react";
import {Alert} from "react-native"
import {useCreateMessageMutation} from "../../../features/messages-api"

export const useField = (sending) => {
    const [text, setText] = useState('')
    const [createMessage, {data, error}] = useCreateMessageMutation()

    const handleSendMessage = async (e) => {
        e.preventDefault()

        if (text.length && sending.conversationId.length && sending.sender.length) {
            try {
                await createMessage({...sending, text})
            }
            catch (e) {Alert.alert('ERROR', e)}
            finally {setText('')}
        }
    }

    return {handleSendMessage, text, setText}
}
