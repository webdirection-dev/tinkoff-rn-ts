import {ScrollView, Text, View} from "react-native"
import {styles} from "./style"
import Main from "../../../layout/main/Main"
import Header from "../header/Header"
import MessagesList from "../messgesList/MessagesList"
import Field from "../field/Field"

const Support = () => {
    const {container} = styles

    return(
        <Main isScrollView={false}>
            <Header />
            <ScrollView style={container}>
                <MessagesList />
            </ScrollView>
            <Field />
        </Main>
    )
}
export default Support
