import {useState} from "react"
import {useAppDispatch} from "../../../store"
import {createMessage} from "../../../features/messages/messages-slice"

export const useField = (sending) => {
    const dispatch = useAppDispatch()
    const [text, setText] = useState('')

    const handleSendMessage = async (e) => {
        e.preventDefault()

        if (text.length && sending.conversationId.length && sending.sender.length) {
            dispatch(createMessage({...sending, text}))
            setText('')
        }
    }

    return {handleSendMessage, text, setText}
}
