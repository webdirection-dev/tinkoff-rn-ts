import {combineReducers} from "@reduxjs/toolkit"
import {ownerReducer} from "./auth/auth-slice"
import {usersReducer} from "./users/users-slice"
import {storyBoardingReducer} from "./storyBoarding/story-boarding-slice"
import {usersApi} from "./users/users-api"
import {creditCardsApi} from "./credit-cards-api"
import {contactsApi} from "./contacts-api"
import {conversationsApi} from "./conversations-api"
import {messagesApi} from "./messages-api"

export const rootReducer = combineReducers({
    ownerReducer,
    usersReducer,
    storyBoardingReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [creditCardsApi.reducerPath]: creditCardsApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [conversationsApi.reducerPath]: conversationsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
})
export const rootApi = [
    usersApi.middleware,
    creditCardsApi.middleware,
    contactsApi.middleware,
    conversationsApi.middleware,
    messagesApi.middleware,
]
