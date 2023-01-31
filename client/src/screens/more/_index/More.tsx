import {Text, View} from "react-native"
import {styles} from "./style"
import Main from "../../../layout/main/Main"
import Heading from "../../../components/heading/Heading"
import Currencies from "../currencies/Currencies"
import MenuList from "../menuList/MenuList";

const More = () => {
    const {container, copyright} = styles
    return(
        <Main isScrollView={false}>
            <View style={container}>
                <Heading title={'More'} />
                <Currencies />
                <MenuList />
                <Text style={copyright}>Version 5.21.0</Text>
            </View>
        </Main>
    )
}
export default More
