import {FC} from "react"
import {Text, Pressable} from "react-native"
import Avatar from "../../../components/avatar/Avatar"
import {IContact} from "../../../static/types/typesMongo"
import {useContactItem} from "./use-contact-item"

interface IContactItemProps {item: IContact, index: number, ownerCard: string}

const ContactsItem:FC<IContactItemProps> = ({item: {username, cardNumber}, index, ownerCard}) => {
    const {handleTransfer} = useContactItem(cardNumber, ownerCard)

    return(
        <Pressable
            style={{marginRight: 20, alignItems: 'center', marginLeft: index === 0 ? 25 : 0}}
            onPress={handleTransfer}
        >
            <Avatar username={username} />
            <Text style={{marginTop: 10, textTransform:'capitalize'}}>{username}</Text>
        </Pressable>
    )
}
export default ContactsItem
