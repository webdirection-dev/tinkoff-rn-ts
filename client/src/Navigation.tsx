import {NavigationContainer, useNavigationContainerRef} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {useAppSelector} from "./store"
import {selectOwnerInfo} from "./features/auth/auth-slice"

import Auth from './features/auth/Auth'
import Home from "./screens/home/_index/Home"
import Profile from "./screens/profile/Profile"
import Payments from "./screens/payments/_index/Payments"
import More from "./screens/more/_index/More"
import Services from "./screens/services/_index/Services"
import Support from "./screens/support/_index/Support"
import Chat from "./screens/support/chat/Chat"
import Footer from "./layout/footer/Footer"
import {useState} from "react";

const Stack = createNativeStackNavigator()

const Navigation = () => {
    const navRef = useNavigationContainerRef()
    const {auth, owner} = useAppSelector(store => selectOwnerInfo(store))
    const [page, setPage] = useState('Home')

    return(
        <>
            <NavigationContainer ref={navRef}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {
                        auth ?
                            <>
                                <Stack.Screen name='Home' component={Home} />
                                <Stack.Screen name='Profile' component={Profile} />
                                <Stack.Screen name='Payments' component={Payments} />
                                <Stack.Screen name='Services' component={Services} />
                                {/*<Stack.Screen name='Support' component={Support} />*/}
                                <Stack.Screen name="Support">
                                    {() => <Support owner={owner}/>}
                                </Stack.Screen>
                                <Stack.Screen name='Chat' component={Chat} />
                                <Stack.Screen name='More' component={More} />
                            </>
                            : <Stack.Screen name='Auth' component={Auth} />
                    }
                </Stack.Navigator>
            </NavigationContainer>

            {auth && <Footer navigate={navRef.navigate} page={page} setPage={setPage} support={owner.username==='support'}/>}
        </>
    )
}
export default Navigation
