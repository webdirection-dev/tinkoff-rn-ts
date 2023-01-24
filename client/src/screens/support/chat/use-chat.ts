import {useNavigation} from "@react-navigation/native"
import {useGetMessagesQuery} from "../../../features/messages-api"
import {useGetAllConversationsQuery} from "../../../features/conversations-api"
import {useAppSelector} from "../../../store"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"
import {useEffect, useState} from "react";

export const useChat = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    const {data: chat} = useGetAllConversationsQuery(owner._id)
    const navigate = useNavigation()
    const propsChat = navigate.getState().routes.find(i => i.name === 'Chat')
    const sender = propsChat ? propsChat.params.props.sender : undefined
    const conversationId = propsChat ? propsChat.params.props.conversationId : undefined
    const [noMessage, setNoMessage] = useState<any>(false)
    const [conversation, setConversation] = useState('')
    const {data: messages, status} = useGetMessagesQuery(conversationId || conversation)

    useEffect(() => {
        if (chat && !chat.length) setNoMessage(true)

        if (chat && chat.length) {
            setNoMessage(false)
            setConversation(chat[0]._id)
        }
    }, [chat])

    return {
        senderName: sender ? sender.username : 'support',
        messages,
        success: {status, noMessage},
        sending: {
            conversationId: conversationId ? conversationId : conversation.length ? conversation : '',
            sender: owner._id
        }
    }
}
