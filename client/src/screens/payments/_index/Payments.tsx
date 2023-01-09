import {View} from "react-native"
import {styles} from "./style"

import Main from "../../../layout/main/Main"
import Heading from "../../../components/heading/Heading"
import SubHeading from "../../../components/subHeading/SubHeading"
import ContactsList from "../contactsList/ContactsList"
import ImportantList from "../importantList/ImportantList"

const Payments = () => {
    const {container} = styles

    return(
        <Main>
            <View style={container}>
                <Heading title='Payments' />
            </View>

            <View style={{...container, marginTop: 40}}>
                <SubHeading title={'phone transfers'} />
            </View>

            <ContactsList />

            <View style={container}>
                <SubHeading title={'important transfers'} />
            </View>

            <ImportantList />
        </Main>
    )
}
export default Payments
