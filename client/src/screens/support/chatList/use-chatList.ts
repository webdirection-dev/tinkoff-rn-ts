import {useGetAllConversationsQuery} from "../../../features/conversations-api"

export const useChatList = (_id) => {
    const {data: chats} = useGetAllConversationsQuery(_id)
    return {chats}
}
