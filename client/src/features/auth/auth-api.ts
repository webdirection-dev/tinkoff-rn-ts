import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const PATH = process.env.REACT_APP_API_URL

interface IAllUsers {
    user: any[]
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        createUser: build.mutation<any, string>({
            query: (id) => ({
                url: '/auth/register',
            })
        }),

        loginUser: build.mutation<any, {login: string, password: string}>({
            query: (credentials) => ({
                url: '/auth/login',
            })
        }),
    }),
})

export const {useCreateUserMutation, useLoginUserMutation} = authApi
