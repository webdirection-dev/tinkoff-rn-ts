import {Text, View} from "react-native"
import {styles} from "./style"
import {FC} from "react";

const Percent:FC<{percent: string}> = ({percent}) => {
    const {container, txt} = styles
    return(
        <View style={container}>
            <Text style={txt}>{percent}%</Text>
        </View>
    )
}
export default Percent
