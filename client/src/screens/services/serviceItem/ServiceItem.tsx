import {FC} from "react"
import {Text, View} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {MaterialIcons} from '@expo/vector-icons'
import Percent from "../percent/Percent"
import {styles} from "./style"
import {IService} from "../../../static/types/types"
import {getRandomGradient} from "../../../static/helpers"

const ServiceItem:FC<{item:IService}> = ({item: {title, iconName, percent}}) => {
    const {container, txt, gradient} = styles

    return(
        <View style={{marginBottom: 30}}>
            <View style={container}>
                <LinearGradient colors={getRandomGradient()} style={gradient}>
                    <Percent percent={percent}/>
                    <MaterialIcons name={iconName} color={'white'} size={30}/>
                </LinearGradient>
            </View>

            <Text style={txt}>{title}</Text>
        </View>
    )
}
export default ServiceItem
