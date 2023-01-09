import {ScrollView, View} from "react-native"
import {styles} from "./style"
import {useContactsList} from "./useContactsList"
import ContactsItem from "../contactItem/ContactsItem"
import Loading from "../../../components/loading/Loading"

const ContactsList = () => {
    const {contacts} = useContactsList()
    const {container} = styles

    return(
        <View style={container}>
            {
                contacts.length ? (
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {contacts.map((i, index) => <ContactsItem key={i._id} item={i} index={index}/>)}
                    </ScrollView>
                ) : <Loading />
            }
        </View>
    )
}
export default ContactsList
