import {FC} from "react"
import {FlatList, View} from "react-native"
import {styles} from "./style"
import Main from "../../../layout/main/Main"
import Heading from "../../../components/heading/Heading"
import ChatItem from "../chatItem/ChatItem"
import { AntDesign } from '@expo/vector-icons'
import {useChatList} from "./use-chatList"

const ChatList:FC<{_id: string}> = ({_id}) => {
    const {container, iconWrapper, icon} = styles
    const {chats} = useChatList(_id)

    return(
        <Main isScrollView={false}>
            <View style={container}>
                <Heading title={'Chat List'} />
            </View>

            <FlatList
                data={chats}
                renderItem={i => <ChatItem item={i.item} index={i.index}/> }
                showsHorizontalScrollIndicator={false}
                keyExtractor={i => i._id}
            />

            <View style={iconWrapper}>
                <AntDesign name="pluscircle" style={icon}/>
            </View>
        </Main>
    )
}
export default ChatList
