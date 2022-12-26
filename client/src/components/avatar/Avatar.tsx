import {FC} from "react"
import {Text, View} from "react-native"
import {styles} from "./style"

interface IAvatarProps {name?: string | null; isSmall?: boolean}

const Avatar: FC<IAvatarProps> = ({name, isSmall = false}) => {
    const {container} = styles
    const forSmall = isSmall && {width: 50, height: 50, marginRight: 10}

    return(
        <View style={{...container, ...forSmall}}>
            <Text style={{fontSize: isSmall ? 26 : 30, fontWeight: '700', color: 'white'}}>{name?.slice(0, 1)}</Text>
        </View>
    )
}
export default Avatar
