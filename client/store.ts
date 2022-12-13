import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import {rootReducer} from './app/features'
import axios, {AxiosStatic,  AxiosInstance} from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axiosInstance,
            },
        },
    }),
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type DetailsExtra = {client: AxiosInstance}
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
