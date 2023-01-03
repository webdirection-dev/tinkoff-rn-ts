import {View, TouchableOpacity, Text} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {styles} from "./style"
import {Entypo} from '@expo/vector-icons'
import {useHeader} from "./use-header"

import Avatar from "../../../components/avatar/Avatar"

const Header = () => {
    const {navigate} = useNavigation()
    const {header} = styles
    const {owner} = useHeader()

    return(
        <View style={header.container}>
            <Avatar username={owner.username || 'T'} isSmall={true}/>

            <TouchableOpacity style={header.btn} onPress={() => navigate('Profile', {owner} as never) }>
                <Text style={header.title}>{owner.username || 'Tinkoff'}</Text>
                <Entypo name={'chevron-small-right'} size={28} style={header.icon}/>
            </TouchableOpacity>
        </View>
    )
}
export default Header
