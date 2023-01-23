import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IConversation} from "../static/types/typesMongo"

const PATH = process.env.REACT_APP_API_URL

export const conversationsApi = createApi({
    reducerPath: '@conversations',
    tagTypes: ['Conversations'],
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        getAllConversations: build.query<IConversation[], string>({
            query: (id) => '/conversations/'+id,
            providesTags: (result) => result ?
                [
                    ...result.map(i => ({type: 'Conversations' as const, id: i._id})),
                    { type: 'Conversations', id: 'Conversations LIST' },
                ] :
                [{ type: 'Conversations', id: 'Conversations LIST' }],
        }),

        // createContacts: build.mutation<IContact, IContact>({
        //     query: (newContact) => ({
        //         url: '/contacts',
        //         method: 'POST',
        //         body: newContact,
        //     }),
        //     invalidatesTags: [{ type: 'Contacts', id: 'Contacts LIST' }]
        // }),
    }),
})

export const {useGetAllConversationsQuery} = conversationsApi
