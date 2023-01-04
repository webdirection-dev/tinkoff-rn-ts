import {Alert} from "react-native"
import {useEffect, useState} from "react"
import {useNavigation} from "@react-navigation/native"
import {useUpdateUserMutation} from "../../features/users/users-api"
import {useAppDispatch, useAppSelector} from "../../store"
import {cleanOwner, setOwner, selectOwnerInfo} from "../../features/auth/auth-slice"
import {gray300} from "../../static/styles/var"

import {defaultAlert} from "../../static/helpers"

export const useProfile = () => {
    const dispatch = useAppDispatch()
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    const navigate = useNavigation()
    const {owner: {accessToken, _id}} = navigate.getState().routes[1].params as never
    const [changeName, setChangeName] = useState(owner.username)
    const [updateUser, {isSuccess, error: updateError, isLoading, data: updateData}] = useUpdateUserMutation()

    const handleUpdate = async () => {
        if (changeName && changeName !== owner.username) {
            await updateUser({id: _id, token: accessToken, credentials: {username: changeName}}).unwrap()
        }
    }

    const handleChangeUserName = (name, value) => {setChangeName(value)}
    const handleLogout = () => {dispatch(cleanOwner())}

    useEffect(() => {
        if (updateData) dispatch(setOwner(updateData))
    }, [updateData])

    useEffect(() => {
        setChangeName(owner.username)
    }, [owner.username])

    //ALERTING SUCCESS
    useEffect(() => {
        isSuccess && defaultAlert('Success!', 'Username has been changed.')
    }, [isSuccess])
    //ALERTING ERROR
    useEffect(() => {
        if (updateError) {
            const {originalStatus, status, error, data} = updateError as any
            isSuccess && defaultAlert('ERROR!', `${originalStatus}: ${status} \n${error || data}`)
        }
    }, [updateError])

    return {
        info: {isLoading, isSuccess, updateError},
        handlers: {handleChangeUserName, handleLogout, handleUpdate},
        content: {changeName, gray300,}
    }
}
