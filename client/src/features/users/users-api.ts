import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IUser} from "../../static/types/typesMongo"
import {TObjString} from "../../static/types/types"

const PATH = process.env.REACT_APP_API_URL

interface IAllUsers {
    user: IUser[]
}

export const usersApi = createApi({
    reducerPath: '@users-api',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        getUsersById: build.query<IUser, string>({
            query: (id) => '/users/find/'+id,
        }),

        createUser: build.mutation<IUser, TObjString>({
            query: (credentials) => ({
                url: '/auth/register',
                method: 'POST',
                body: credentials,
            })
        }),

        loginUser: build.mutation<IUser, TObjString>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            })
        }),

        updateUser: build.mutation<IUser, {id: string, token: string, credentials: TObjString}>({
            query: ({id, token, credentials}) => ({
                url: '/users/'+id,
                method: 'PUT',
                headers: {authorization: 'Bearer ' + token},
                body: credentials,
            })
        }),
    }),
})

export const {useLoginUserMutation, useCreateUserMutation, useUpdateUserMutation, useGetUsersByIdQuery} = usersApi
