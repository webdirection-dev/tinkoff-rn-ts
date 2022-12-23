import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"

import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from '@reduxjs/toolkit'
import {ownerReducer} from "./features/auth/auth-slice"
import {authApi} from "./features/auth/auth-api"

const rootReducer = combineReducers({
    ownerReducer,
    [authApi.reducerPath]: authApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
