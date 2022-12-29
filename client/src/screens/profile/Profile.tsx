import {Text, View} from "react-native"
import {styles} from "./style"

import Main from "../../layout/main/Main"
import Loading from "../../components/loading/Loading"
import Field from "../../components/field/Field"
import ButtonCustom from "../../components/buttonCustom/ButtonCustom"

import {useProfile} from "./use-profile"

const Profile = () => {
    const {info, content, handlers} = useProfile()
    const {wrapper, h2} = styles

    return(
        <Main>
            {info.isLoading ? <Loading /> : (
                <>
                    <Text style={h2}>Profile</Text>
                    <View style={wrapper}>
                        <Field name='username' value={content.changeName} placeholder='your new username' handleChange={handlers.handleChangeUserName} />
                        <ButtonCustom title='Update Profile' handleClick={handlers.handleUpdate} />
                        <ButtonCustom title='Logout' handleClick={handlers.handleLogout} color={[content.gray300, '#D6D8DB']} />
                    </View>
                </>
            )}
        </Main>
    )
}

export default Profile
