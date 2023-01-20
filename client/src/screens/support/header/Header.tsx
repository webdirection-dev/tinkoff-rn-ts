import {Image, Text, View} from "react-native"
import {styles} from "./style"

const Header = () => {
    const {container, img, title, subtitle} = styles

    return(
        <View style={container}>
            <Image source={require('../../../../assets/logo-mini.png')} style={img}/>
            <View>
                <Text style={title}>Support</Text>
                <Text style={subtitle}>We are there 24/7</Text>
            </View>
        </View>
    )
}
export default Header
