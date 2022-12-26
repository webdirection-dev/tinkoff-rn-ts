import {Text, SafeAreaView, View} from "react-native"
import {styles} from "./style"
import Avatar from "../../components/avatar/Avatar"

const Home = () => {
    const {header} = styles

    return(
        <SafeAreaView>
            <View style={header}>
                <Avatar name='Test' isSmall={true}/>
            </View>

        </SafeAreaView>
    )
}
export default Home
