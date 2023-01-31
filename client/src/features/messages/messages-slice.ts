import {createSlice, createAsyncThunk, PayloadAction, AnyAction} from '@reduxjs/toolkit'
import { RootState } from '../../store'
import {IMessage} from "../../static/types/typesMongo"
import {IErrorFetch} from "../../static/types/types"

const PATH = process.env.REACT_APP_API_URL

type TMessagesState = {
    status: string;
    error: null | IErrorFetch;
    messages: IMessage[];
}

const initialState: TMessagesState = {
    status: 'idle', // loading | fulfilled | rejected
    error: null,
    messages: [],
}

export const getMessages = createAsyncThunk<IMessage[], string, { rejectValue: string }>(
    '@@messages1/get-messages',
    async (conversationID, { rejectWithValue }) => {
        return await fetch(PATH+'/messages/'+conversationID)
            .then(response => response.json())
            .then(data => data)
            .catch((err) => rejectWithValue(err.message))
    }
)

export const createMessage = createAsyncThunk<IMessage, IMessage, { rejectValue: string }>(
    '@@messages1/create-messages',
    async (newMessage, { rejectWithValue }) => {
        return await fetch(
            PATH+'/messages',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newMessage)
            }
        )
            .then(response => response.json())
            .then(data => data)
            .catch((err) => rejectWithValue(err.message))
    }
)

const messagesSlice = createSlice({
    name: '@@messages1',
    initialState,
    reducers: {
        cleanMessages: (state) => {
            state.messages = []
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMessages.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.messages = action.payload
            })
            .addCase(createMessage.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.messages = [...state.messages, action.payload]
            })
            .addMatcher(isPending, (state, action: PayloadAction<string>) => {
                state.error = null
                state.status = 'loading'
            })
            .addMatcher(isError, (state, action: PayloadAction<IErrorFetch>) => {
                state.error = action.payload
                state.status = 'rejected'
            });
    },
})
export const {} = messagesSlice.actions
export const messagesReducer = messagesSlice.reducer
//selectors
export const selectMessagesInfo = (state: RootState) => ({
    messages: state.messagesReducer.messages,
    status: state.messagesReducer.status,
    error: state.messagesReducer.error,
})

// //helpers
function isError(action: AnyAction) {
    return action.type.endsWith('rejected') && action.type.startsWith('@@messages1')
}

function isPending(action: AnyAction) {
    return action.type.endsWith('pending') && action.type.startsWith('@@messages1')
}



// import {createSlice, createAsyncThunk, PayloadAction, AnyAction} from '@reduxjs/toolkit'
// import { RootState } from '../../store'
// import {IMessage} from "../../static/types/typesMongo"
// import {IErrorFetch} from "../../static/types/types"
//
// const PATH = process.env.REACT_APP_API_URL
//
// type TMessagesState = {
//     status: string;
//     error: null | IErrorFetch;
//     messages: IMessage[];
// }
//
// const initialState: TMessagesState = {
//     status: 'idle', // loading | fulfilled | rejected
//     error: null,
//     messages: [],
// }
//
// export const getMessages = createAsyncThunk<IMessage[], string, { rejectValue: string }>(
//     '@@messages1/get-messages',
//     async (conversationID, { rejectWithValue }) => {
//         return await fetch(PATH+'/messages/'+conversationID)
//             .then(response => response.json())
//             .then(data => data)
//             .catch((err) => rejectWithValue(err.message))
//     }
// )
//
// export const createMessage = createAsyncThunk<IMessage, IMessage, { rejectValue: string }>(
//     '@@messages1/create-messages',
//     async (newMessage, { rejectWithValue }) => {
//         return await fetch(
//             PATH+'/messages',
//             {
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify(newMessage)
//             }
//         )
//             .then(response => response.json())
//             .then(data => data)
//             .catch((err) => rejectWithValue(err.message))
//     }
// )
//
// const messagesSlice = createSlice({
//     name: '@@messages1',
//     initialState,
//     reducers: {
//         cleanMessages: (state) => {
//             state.messages = []
//         },
//
//         addMessage: (state, action) => {
//             state.messages = [...state.messages, action.payload]
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getMessages.fulfilled, (state, action) => {
//                 state.status = 'fulfilled'
//                 state.messages = action.payload
//             })
//             .addCase(createMessage.fulfilled, (state, action) => {
//                 state.status = 'fulfilled'
//                 // state.messages = [...state.messages, action.payload]
//             })
//             .addMatcher(isPending, (state, action: PayloadAction<string>) => {
//                 state.error = null
//                 state.status = 'loading'
//             })
//             .addMatcher(isError, (state, action: PayloadAction<IErrorFetch>) => {
//                 state.error = action.payload
//                 state.status = 'rejected'
//             });
//     },
// })
// export const {addMessage} = messagesSlice.actions
// export const messagesReducer = messagesSlice.reducer
// //selectors
// export const selectMessagesInfo = (state: RootState) => ({
//     messages: state.messagesReducer.messages,
//     status: state.messagesReducer.status,
//     error: state.messagesReducer.error,
// })
//
// // //helpers
// function isError(action: AnyAction) {
//     return action.type.endsWith('rejected') && action.type.startsWith('@@messages1')
// }
//
// function isPending(action: AnyAction) {
//     return action.type.endsWith('pending') && action.type.startsWith('@@messages1')
// }
