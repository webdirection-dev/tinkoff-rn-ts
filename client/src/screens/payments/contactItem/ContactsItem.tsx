import {FC} from "react"
import {Text, Pressable} from "react-native"
import Avatar from "../../../components/avatar/Avatar"
import {IContact} from "../../../static/types/typesMongo"

interface IContactItemProps {item: IContact, index: number}

const ContactsItem:FC<IContactItemProps> = ({item: {displayName}, index}) => (
    <Pressable style={{marginRight: 20, alignItems: 'center', marginLeft: index === 0 ? 25 : 0}}>
        <Avatar username={displayName} />
        <Text style={{marginTop: 10}}>{displayName}</Text>
    </Pressable>
)
export default ContactsItem
