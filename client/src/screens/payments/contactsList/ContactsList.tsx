import {ScrollView, View} from "react-native"
import {styles} from "./style"
import {useContactsList} from "./useContactsList"
import ContactsItem from "../contactItem/ContactsItem"
import Loading from "../../../components/loading/Loading"

const ContactsList = () => {
    const {container} = styles
    const {contacts, ownerName, ownerCard} = useContactsList()

    return(
        <View style={container}>
            {
                contacts && contacts.length > 0 ? (
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {contacts.map((i, index) => {
                            if (i.username !== ownerName) return <ContactsItem key={i._id} item={i} index={index} ownerCard={ownerCard}/>
                        })}
                    </ScrollView>
                ) : <Loading />
            }
        </View>
    )
}
export default ContactsList
