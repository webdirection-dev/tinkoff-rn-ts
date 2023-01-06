import {View} from "react-native"
import {styles} from "./style"
import Main from "../../../layout/main/Main"
import Heading from "../../../components/heading/Heading"
import Contacts from "../contacts/Contacts"
import Other from "../other/Other"

const Payments = () => {
    const {container} = styles

    return(
        <Main>
            <View style={container}>
                <Heading title='Payments' />
                <Contacts />
                <Other />
            </View>
        </Main>
    )
}

export default Payments
