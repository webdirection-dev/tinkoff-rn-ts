import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"

import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from '@reduxjs/toolkit'
import {authApi} from "./features/auth/auth-api"

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
    devTools: true,
})
