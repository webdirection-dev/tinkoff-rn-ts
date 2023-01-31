import {Pressable, Text, View, Linking} from "react-native"
import {styles} from "./style"
import {FC} from "react";
import {IMoreItem} from "../../../static/types/types"
import {MaterialIcons} from "@expo/vector-icons"

const MenuItem:FC<{item: IMoreItem}> = ({item}) => {
    const {container, title, subtitle, icon} = styles

    return(
            <Pressable style={container} onPress={() => Linking.openURL(item.link)}>
                <View>
                    <Text style={title}>{item.title}</Text>
                    <Text style={subtitle}>{item.description}</Text>
                </View>

                <View style={icon}>
                    <MaterialIcons name={item.iconName} size={22} color='#EDF4FE'/>
                </View>
            </Pressable>
    )
}
export default MenuItem
