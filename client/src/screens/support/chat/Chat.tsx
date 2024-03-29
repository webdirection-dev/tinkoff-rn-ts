import {View} from "react-native"
import {styles} from "./style"
import Main from "../../../layout/main/Main"
import Header from "../header/Header"
import MessagesList from "../messgesList/MessagesList"
import Field from "../field/Field"
import {useChat} from "./use-chat"

const Chat = () => {
    const {container} = styles
    const {senderName, messages, success, sending} = useChat()

    return(
        <Main isScrollView={false}>
            <Header senderName={senderName}/>
            <View style={container}>
                <MessagesList messages={messages} success={success} />
            </View>

            <Field sending={sending}/>
        </Main>
    )
}
export default Chat
