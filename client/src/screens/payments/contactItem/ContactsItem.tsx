import {FC} from "react"
import {Text, Pressable, Alert} from "react-native"
import Avatar from "../../../components/avatar/Avatar"
import {IContact} from "../../../static/types/typesMongo"

interface IContactItemProps {item: IContact, index: number}

const ContactsItem:FC<IContactItemProps> = ({item: {username, cardNumber}, index}) => {
    const handleTransfer = () => {
        Alert.prompt(
            'Sum transfer',
            'Enter the transfer',
            async (sum) => {
                try {
                    if (sum.match(/^\d+$/)) Alert.alert('SUCCESS!', `${sum} has been successfully transferred!`)
                    else Alert.alert('ERROR!', 'Only numbers can be used. Please, try again.')
                } catch (e: any) {Alert.alert('Error transfer', e)}
            }
        )
    }

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
