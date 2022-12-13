import {Text, View} from "react-native"
import {useAppTailwind, styleCenter} from "../../static/styles/style"

const Auth = () => {
    const style = useAppTailwind()(styleCenter)

    return(
        <View style={style}>
            <Text>Auth Auth</Text>
        </View>
    )
}

export default Auth
