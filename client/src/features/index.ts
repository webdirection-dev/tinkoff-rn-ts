import {combineReducers} from "@reduxjs/toolkit"
import {ownerReducer} from "./auth/auth-slice"
import {usersReducer} from "./users/users-slice"
import {authApi} from "./auth/auth-api"
import {usersApi} from "./users/users-api"

export const rootReducer = combineReducers({
    ownerReducer,
    usersReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
})
export const rootApi = [
    authApi.middleware,
    usersApi.middleware,
]
