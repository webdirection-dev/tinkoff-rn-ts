import {FC} from "react"
import {Pressable, TextInput, View} from "react-native"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {styles} from "./style"
import {blue400} from "../../../static/styles/var"

import {useField} from "./use-field"
const Field:FC<{sending: any}> = ({sending}) => {
    const {container, inputStyles} = styles
    const {handleSendMessage, text, setText} = useField(sending)


    return(
        <View style={container}>
            <TextInput
                style={inputStyles}
                placeholder='Enter your message'
                onChangeText={setText}
                value={text}
                showSoftInputOnFocus={false}
                autoCapitalize='none'
            />

            <Pressable onPress={e => handleSendMessage(e) }>
                <MaterialCommunityIcons name='send-circle-outline' size={42} style={{color: blue400, marginLeft: 10}}/>
            </Pressable>
        </View>
    )
}
export default Field
