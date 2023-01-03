import {combineReducers} from "@reduxjs/toolkit"
import {ownerReducer} from "./auth/auth-slice"
import {usersReducer} from "./users/users-slice"
import {storyBoardingReducer} from "./storyBoarding/story-boarding-slice"
import {usersApi} from "./users/users-api"
import {creditCardsApi} from "./creditCards/credit-cards-api"

export const rootReducer = combineReducers({
    ownerReducer,
    usersReducer,
    storyBoardingReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [creditCardsApi.reducerPath]: creditCardsApi.reducer,
})
export const rootApi = [
    usersApi.middleware,
    creditCardsApi.middleware,
]
