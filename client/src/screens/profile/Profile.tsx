import {Text, View} from "react-native"
import {styles} from "./style"

import Main from "../../layout/main/Main"
import Field from "../../components/field/Field"
import ButtonCustom from "../../components/buttonCustom/ButtonCustom"

import {useProfile} from "./use-profile"

const Profile = () => {
    const {changeName, handleChangeUserName, handleLogout, handleUpdate, error, isLoading, gray300} = useProfile()
    const {wrapper, h2} = styles

    return(
        <Main>
            <Text style={h2}>Profile</Text>
            <View style={wrapper}>
                <Field name='username' value={changeName} placeholder='your new username' handleChange={handleChangeUserName} />
                <ButtonCustom title='Update Profile' handleClick={handleUpdate} />
                <ButtonCustom title='Logout' handleClick={handleLogout} color={[gray300, '#D6D8DB']} />
            </View>
        </Main>
    )
}

export default Profile
