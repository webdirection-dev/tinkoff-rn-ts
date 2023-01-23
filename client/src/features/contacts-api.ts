import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IContact} from "../static/types/typesMongo"

const PATH = process.env.REACT_APP_API_URL

export const contactsApi = createApi({
    reducerPath: '@credit-contacts-api',
    tagTypes: ['Contacts'],
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        getAllContacts: build.query<IContact[], void>({
            query: () => '/contacts',
            providesTags: (result) => result ?
                [
                    ...result.map(i => ({type: 'Contacts' as const, id: i._id})),
                    { type: 'Contacts', id: 'Contacts LIST' },
                ] :
                [{ type: 'Contacts', id: 'Contacts LIST' }],
        }),

        createContacts: build.mutation<IContact, IContact>({
            query: (newContact) => ({
                url: '/contacts',
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags: [{ type: 'Contacts', id: 'Contacts LIST' }]
        }),
    }),
})

export const {useCreateContactsMutation, useGetAllContactsQuery} = contactsApi
