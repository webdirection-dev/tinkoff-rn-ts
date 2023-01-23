import {ScrollView, View, Text} from "react-native"
import {styles} from "./style"
import Loading from "../../../components/loading/Loading"
import MessageItem from "../messgeItem/MessageItem"

import {useMessagesList} from "./useMessagesList"
import {FC} from "react";
import {IMessage} from "../../../static/types/typesMongo";

const MessagesList:FC<{messages: IMessage[], success: any}> = ({messages, success}) => {
    const {container, noConversation} = styles
    const {ownerId} = useMessagesList()

    return(
        <View style={container}>
            {
                success.status === 'fulfilled' && (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {messages.map(i => <MessageItem key={i._id} item={i} ownerId={ownerId}/>)}
                    </ScrollView>
                )
            }

            {success.noMessage && <Text style={noConversation}>Please write us in a chat</Text>}
            {success.status !== 'fulfilled' && !success.noMessage && <Loading />}
        </View>
    )
}
export default MessagesList
