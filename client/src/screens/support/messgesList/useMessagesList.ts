import {useState} from "react"
import {useAppSelector} from "../../../store"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"

export const useMessagesList = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    const initialState = [ {_id: '', text: 'Hello!', createdAt: new Date()} ]
    const [messages, setMessages] = useState(initialState)

    return {
        ownerId: owner._id,
        messages,
    }
}
