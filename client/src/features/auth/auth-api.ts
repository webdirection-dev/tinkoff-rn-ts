import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IUser} from "../../static/types/typesMongo"
import {TObjString} from "../../static/types/types"

const PATH = process.env.REACT_APP_API_URL

export const authApi = createApi({
    reducerPath: '@auth-api',
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        loginUser: build.mutation<IUser, TObjString>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            })
        }),
    }),
})

export const {useLoginUserMutation} = authApi
