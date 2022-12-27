import {FC} from "react"
import {Text, View} from "react-native"
import {styles} from "./style"

interface IAvatarProps {username: string, isSmall?: boolean}

const Avatar: FC<IAvatarProps> = ({username, isSmall = false}) => {
    const {container} = styles
    const forSmall = isSmall && {width: 50, height: 50, marginRight: 10}

    return(
        <View style={{...container, ...forSmall}}>
            <Text style={{fontSize: isSmall ? 26 : 30, fontWeight: '700', color: 'white'}}>{username && username.slice(0, 1).toUpperCase()}</Text>
        </View>
    )
}
export default Avatar
