import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IUser} from "../../static/types/typesMongo"
import {TObjString} from "../../static/types/types"

interface IAllUsers {
    user: IUser[]
}

const PATH = process.env.REACT_APP_API_URL

export const usersApi = createApi({
    reducerPath: '@users-api',
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        createUser: build.mutation<IUser, TObjString>({
            query: (credentials) => ({
                url: '/auth/register',
                method: 'POST',
                body: credentials,
            })
        }),
    }),
})

export const {useCreateUserMutation} = usersApi
