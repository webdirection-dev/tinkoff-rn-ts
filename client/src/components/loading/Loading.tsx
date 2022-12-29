import {ActivityIndicator, Text, View} from "react-native"
import {styles} from "./style"
const {loading, h3} = styles

const Loading = () => (
    <View style={loading}>
        <ActivityIndicator size="small"/>
        <Text style={h3}>Loading...</Text>
    </View>
)
export default Loading
