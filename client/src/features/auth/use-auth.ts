import {useEffect, useState} from "react"
import {useAppDispatch} from "../../store"
import {setOwner} from "./auth-slice"
import {useCreateUserMutation, useLoginUserMutation} from "./auth-api"

const initialCredentials = {username: '', password: ''}
const initialError = {status: '', code: '', description: ''}

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const [isRegister, setIsRegister] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const [error, setError] = useState(initialError)
    const [credentials, setCredentials] = useState(initialCredentials)
    const [message, setMessage] = useState('')

    const [loginUser, {isError: isErrLogin, error: errLogin, isSuccess: successLogin, data}] = useLoginUserMutation()
    const [registerUser, {isError: isErrRegister, error: errRegister, isSuccess: successRegister}] = useCreateUserMutation()

    const handleCredentials = (name, value) => {
        setCredentials({...credentials, [name]: value})
    }

    const handleAuth = async () => {
        if (credentials.username && credentials.password) {
            setMessage('')
            setIsLoading(true)
            setIsError(false)
            setError(initialError)
            if (!isRegister) await loginUser(credentials).unwrap()
            if (isRegister) await registerUser(credentials).unwrap()
            setCredentials(initialCredentials)
        } else {
            setMessage('To get an access please write login and password.')
            setIsError(false)
            setError(initialError)
        }
    }

    const handleRegister = () => {
        setIsRegister(!isRegister)
        setIsLoading(false)
        setIsError(false)
        setError(initialError)
        setMessage('')
    }

    //LOADING
    useEffect(() => {
        if (!isRegister && successLogin) setIsLoading(false)
        if (isRegister && successRegister) setIsLoading(false)
    }, [isRegister, successLogin, successRegister])

    //SET OWNER
    useEffect(() => {
        if (data) dispatch(setOwner(data))
    }, [data])

    //ERRORS
    useEffect(() => {
        if (errLogin) {
            setIsError(true)
            setIsLoading(false)

            const {originalStatus, status, error, data} = errLogin as any
            setError({
                status: originalStatus,
                code: status,
                description: error || data,
            })
        }

        if (errRegister) {
            setIsError(true)
            setIsLoading(false)

            const {originalStatus, status, error, data} = errRegister as any
            setError({
                status: originalStatus,
                code: status,
                description: error || data,
            })
        }
    }, [errLogin, errRegister])

    return {isRegister, handleRegister, isLoading, isError, error, credentials, handleCredentials, handleAuth, message}
}
