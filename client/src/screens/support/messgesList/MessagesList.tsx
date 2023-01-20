import {ScrollView, View} from "react-native"
import {styles} from "./style"
import Loading from "../../../components/loading/Loading"
import MessageItem from "../messgeItem/MessageItem"

import {useMessagesList} from "./useMessagesList"

const MessagesList = () => {
    const {container} = styles
    const {ownerId, messages} = useMessagesList()

    return(
        <View style={container}>
            {
                messages && messages.length > 0 ? (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {messages.map(i => <MessageItem key={i._id} item={i} ownerId={ownerId}/>)}
                    </ScrollView>
                ) : <Loading />
            }
        </View>
    )
}
export default MessagesList
