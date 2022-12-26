import {Text, SafeAreaView, View, ActivityIndicator, Pressable} from "react-native"
import {stylesAuth} from "./style"
import {useAuth} from "./use-auth"

import ErrorQuery from "../../components/errorQuery/ErrorQuery"
import Field from "../../components/field/Field"
import ButtonCustom from "../../components/buttonCustom/ButtonCustom"

const Auth = () => {
    const {container, wrapper, title, loader, switches} = stylesAuth
    const {isRegister, handleRegister, isLoading, isError, error, credentials, handleCredentials, handleAuth, message} = useAuth()

    return(
        <SafeAreaView style={container}>
            <View style={wrapper}>
                {!isLoading && (
                    <>
                        <Text style={title}>{isRegister ? 'Sing Up' : 'Sing In'}</Text>

                        <Field
                            name='username'
                            value={credentials.username}
                            placeholder='Enter username'
                            handleCredentials={handleCredentials}
                        />

                        <Field
                            name='password'
                            value={credentials.password}
                            placeholder='Enter password'
                            handleCredentials={handleCredentials}
                            isSecure={true}
                        />

                        <ButtonCustom handleAuth={handleAuth} title={'Let\'s go'}/>

                        <Pressable onPress={handleRegister}>
                            <Text style={switches}>{!isRegister ? 'Register' : 'Login'}</Text>
                        </Pressable>
                    </>
                )}

                {message && <Text style={{color: 'red', marginTop: 15}}>{message}</Text>}
                {!message && <Text style={{color: 'white', marginTop: 15}}>t</Text>}
                {isLoading && !isError && <ActivityIndicator size="large" color={loader.color}/>}
                {isError && <ErrorQuery error={error}/>}
            </View>
        </SafeAreaView>
    )
}
export default Auth
