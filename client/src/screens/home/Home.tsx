import {SafeAreaView, View, TouchableOpacity, Text} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {styles} from "./style"
import {Entypo} from '@expo/vector-icons'
import {useHome} from "./use-home"

import Main from "../../layout/main/Main"
import Avatar from "../../components/avatar/Avatar"

const Home = () => {
    const {navigate} = useNavigation()
    const {header, btn, title, icon} = styles
    const {owner} = useHome()

    return(
        <Main>
            <View style={header}>
                <Avatar username={owner.username} isSmall={true}/>

                <TouchableOpacity style={btn} onPress={() => navigate('Profile', {owner} as never) }>
                    <Text style={title}>{owner.username}</Text>
                    <Entypo name={'chevron-small-right'} size={28} style={icon}/>
                </TouchableOpacity>
            </View>
        </Main>
    )
}
export default Home
