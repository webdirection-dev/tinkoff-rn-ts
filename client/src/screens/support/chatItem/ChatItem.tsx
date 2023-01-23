import {FC} from "react"
import {Text, Pressable, Image, View} from "react-native"
import {styles} from "./style"
import {IConversation} from "../../../static/types/typesMongo"
import Loading from "../../../components/loading/Loading"
import {useChatItem} from "./use-chat-item"

const ChatItem:FC<{item: IConversation, index: number}> = ({item: {_id, members}, index}) => {
    const {container, img, txt, counter} = styles
    const {navigate, isSuccess, sender} = useChatItem(members)

    return(
        <Pressable
            style={{...container, borderTopWidth: index === 0 ? 0 : 2}}
            onPress={() => { navigate('Chat', {props: {sender, conversationId: _id}}) }}
        >
            {!isSuccess ? <Loading /> : (
                <>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../../../assets/no-user-image.gif')} style={img}/>
                        <Text style={txt}>{sender && sender.username}</Text>
                    </View>
                    <View style={counter}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>2</Text>
                    </View>
                </>
            )}
        </Pressable>
    )
}
export default ChatItem
