import {Image, Text, View} from "react-native"
import {styles} from "./style"
import {FC} from "react";

const Header:FC<{senderName?: string}> = ({senderName}) => {
    const {container, img, title, subtitle} = styles

    return(
        <View style={container}>
            {senderName !== 'support' ? (
                <>
                    <Image source={require('../../../../assets/no-user-image.gif')} style={img}/>
                    <Text style={title}>{senderName}</Text>
                </>
            ) : (
                <>
                    <Image source={require('../../../../assets/logo-mini.png')} style={img}/>
                    <View>
                        <Text style={title}>{senderName}</Text>
                        <Text style={subtitle}>We are there 24/7</Text>
                    </View>
                </>
            )}
        </View>
    )
}
export default Header
