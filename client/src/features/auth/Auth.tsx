import {Text, SafeAreaView} from "react-native"
import {useAppTailwind, styleCenter} from "../../static/styles/style"

const Auth = () => {
    const style = useAppTailwind()(styleCenter)

    return(
        <SafeAreaView style={style}>
            <Text>Auth Auth</Text>
        </SafeAreaView>
    )
}

export default Auth
