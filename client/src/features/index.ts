import {combineReducers} from "@reduxjs/toolkit"
import {ownerReducer} from "./auth/auth-slice"
import {usersReducer} from "./users/users-slice"
import {storyBoardingReducer} from "./storyBoarding/story-boarding-slice"
import {usersApi} from "./users/users-api"

export const rootReducer = combineReducers({
    ownerReducer,
    usersReducer,
    storyBoardingReducer,
    [usersApi.reducerPath]: usersApi.reducer,
})
export const rootApi = [
    usersApi.middleware,
]
