import {Pressable, TextInput, View} from "react-native"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {styles} from "./style"
import {blue400} from "../../../static/styles/var"

import {useField} from "./use-field"

const Field = () => {
    const {container, inputStyles} = styles
    const {handleSendMessage, message, setMessage} = useField()


    return(
        <View style={container}>
            <TextInput
                style={inputStyles}
                placeholder='Enter your message'
                onChangeText={setMessage}
                value={message}
                showSoftInputOnFocus={false}
                autoCapitalize='none'
            />

            <Pressable
                onPress={handleSendMessage}
            >
                <MaterialCommunityIcons name='send-circle-outline' size={42} style={{color: blue400, marginLeft: 10}}/>
            </Pressable>
        </View>
    )
}
export default Field
