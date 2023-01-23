import {FC} from 'react'
import {Text, View} from "react-native"
import {styles} from "./style"
import {IMessage} from "../../../static/types/typesMongo"
import {blue500, gray300, gray800} from "../../../static/styles/var"
import {dateFormat} from "../../../static/helpers"

const MessageItem:FC<{item: IMessage, ownerId: string}> = ({item: {sender, text, createdAt}, ownerId}) => {
    const {container, time} = styles
    const isMsgByOwner = sender === ownerId

    return(
        <View style={{...container, backgroundColor: isMsgByOwner ? blue500 : gray300, alignSelf: isMsgByOwner ? 'flex-end' : 'flex-start'}}>
            <Text style={{color: isMsgByOwner ? 'white' : gray800}}>{text}</Text>
            <Text style={{...time, color: isMsgByOwner ? 'white' : gray800}}>{dateFormat(createdAt)}</Text>
        </View>
    )
}
export default MessageItem
