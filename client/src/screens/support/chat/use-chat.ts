import {useNavigation} from "@react-navigation/native"
// import {useGetMessagesQuery} from "../../../features/messages/messages-api"
import {useGetAllConversationsQuery} from "../../../features/conversations-api"
import {useAppDispatch, useAppSelector} from "../../../store"
import {selectMessagesInfo} from "../../../features/messages/messages-slice"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"
import {useEffect, useState} from "react";
import {getMessages} from "../../../features/messages/messages-slice"
export const useChat = () => {
    const dispatch = useAppDispatch()
    const {messages, status, error} = useAppSelector(store => selectMessagesInfo(store))
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    const {data: chat} = useGetAllConversationsQuery(owner._id)
    const navigate = useNavigation()
    const propsChat = navigate.getState().routes.find(i => i.name === 'Chat')
    const sender = propsChat ? propsChat.params.props.sender : undefined
    const conversationId = propsChat ? propsChat.params.props.conversationId : undefined
    const [noMessage, setNoMessage] = useState<any>(false)
    const [conversation, setConversation] = useState('')
    // const {data: messages, status, isSuccess} = useGetMessagesQuery(conversationId || conversation)
    const [isFirsLoad, setIsFirstLoad] = useState(true)

    useEffect(() => {
        if (chat && !chat.length) setNoMessage(true)

        if (chat && chat.length) {
            setNoMessage(false)
            setConversation(chat[0]._id)
        }
    }, [chat])

    // useEffect(() => {
    //     if (isSuccess) setIsFirstLoad(false)
    // }, [isSuccess])

    useEffect(() => {
        if (conversationId && conversation.length === 0) dispatch(getMessages(conversationId))
        if (!conversationId && conversation.length > 0) dispatch(getMessages(conversation))
    }, [conversation])

    return {
        senderName: sender ? sender.username : 'support',
        messages,
        success: {status, noMessage, isFirsLoad},
        sending: {
            conversationId: conversationId ? conversationId : conversation.length ? conversation : '',
            sender: owner._id
        }
    }
}
