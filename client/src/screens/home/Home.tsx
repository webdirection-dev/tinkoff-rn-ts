import {View, TouchableOpacity, Text} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {styles} from "./style"
import {Entypo} from '@expo/vector-icons'
import {useHome} from "./use-home"

import Main from "../../layout/main/Main"
import Avatar from "../../components/avatar/Avatar"
import StoryList from "../../components/storyList/StoryList"

const Home = () => {
    const {navigate} = useNavigation()
    const {header, main} = styles
    const {owner} = useHome()

    return(
        <Main>
            <View style={header.container}>
                <Avatar username={owner.username || 'T'} isSmall={true}/>

                <TouchableOpacity style={header.btn} onPress={() => navigate('Profile', {owner} as never) }>
                    <Text style={header.title}>{owner.username || 'Tinkoff'}</Text>
                    <Entypo name={'chevron-small-right'} size={28} style={header.icon}/>
                </TouchableOpacity>
            </View>

            <StoryList />

            {/*<View style={main.container}>*/}
            {/*</View>*/}
        </Main>
    )
}
export default Home
