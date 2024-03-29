import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {IMessage} from "../../static/types/typesMongo"

const PATH = process.env.REACT_APP_API_URL

export const messagesApi = createApi({
    reducerPath: '@messages',
    tagTypes: ['Messages'],
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        getMessages: build.query<IMessage[], string>({
            query: (conversationId) => '/messages/'+conversationId,
            providesTags: (result) => result ?
                [
                    ...result.map(i => ({type: 'Messages' as const, id: i._id})),
                    { type: 'Messages', id: 'Messages LIST' },
                ] :
                [{ type: 'Messages', id: 'Messages LIST' }],
        }),

        createMessage: build.mutation<IMessage, IMessage>({
            query: (newMessage) => ({
                url: '/messages',
                method: 'POST',
                body: newMessage,
            }),
            invalidatesTags: [{ type: 'Messages', id: 'Messages LIST' }]
        }),
    }),
})

export const {useGetMessagesQuery, useCreateMessageMutation} = messagesApi
