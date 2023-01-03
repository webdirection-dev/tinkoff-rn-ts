import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {ICreditCard} from "../../static/types/typesMongo"

const PATH = process.env.REACT_APP_API_URL

export const creditCardsApi = createApi({
    reducerPath: '@credit-cards-api',
    tagTypes: ['CreditCards'],
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        getAllCreditCards: build.query<ICreditCard[], void>({
            query: () => '/cards',
            providesTags: (result) => result ?
                [
                    ...result.map(i => ({type: 'CreditCards' as const, id: i._id})),
                    { type: 'CreditCards', id: 'Credit Card LIST' },
                ] :
                [{ type: 'CreditCards', id: 'Credit Card LIST' }],
        }),

        createCreditCard: build.mutation<ICreditCard, ICreditCard>({
            query: (newCard) => ({
                url: '/cards',
                method: 'POST',
                body: newCard,
            }),
            invalidatesTags: [{ type: 'CreditCards', id: 'Credit Card LIST' }]
        }),

        // updateUser: build.mutation<IUser, {id: string, token: string, credentials: TObjString}>({
        //     query: ({id, token, credentials}) => ({
        //         url: '/users/'+id,
        //         method: 'PUT',
        //         headers: {authorization: 'Bearer ' + token},
        //         body: credentials,
        //     })
        // }),
    }),
})

export const {useGetAllCreditCardsQuery, useCreateCreditCardMutation} = creditCardsApi
