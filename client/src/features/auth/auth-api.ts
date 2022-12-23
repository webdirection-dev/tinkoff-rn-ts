import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IUser} from "../../static/types/typesMongo"
import {TObjString} from "../../static/types/types"

interface IAllUsers {
    user: IUser[]
}

const PATH = process.env.REACT_APP_API_URL

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        createUser: build.mutation<IUser, TObjString>({
            query: (id) => ({
                url: '/auth/register',
            })
        }),

        loginUser: build.mutation<IUser, TObjString>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            })
        }),
    }),
})

export const {useCreateUserMutation, useLoginUserMutation} = authApi
