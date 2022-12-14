import {createSlice, createAsyncThunk, PayloadAction, AnyAction} from '@reduxjs/toolkit'
import { RootState, DetailsExtra } from '../../store'
import {IUser} from "../../static/types/mongoTypes"

type TAuthState = {
    status: string;
    error: null | string;
    currentUser: IUser;
}

const initialState: TAuthState = {
    status: 'idle', // loading | received | rejected
    error: null,
    currentUser: {} as IUser,
}

export const createUser = createAsyncThunk<
    IUser,
    {},
    { extra: DetailsExtra, rejectValue: string }
>(
    '@@auth/create-user',

    async (newUser, { extra: { client }, rejectWithValue }) => {
        return await client
            .post('/auth/register', newUser)
            .then(({ data }) => data)
            .catch((err) => {return rejectWithValue(err.message)})
    }
)

export const loginUser = createAsyncThunk<
    IUser,
    {username: string, password: string},
    { extra: DetailsExtra; rejectValue: string }
>(
    '@@auth/login-user',

    async (credentials, { extra: { client }, rejectWithValue }) => {
        return await client
            .post('/auth/login', credentials)
            .then(({ data }) => data)
            .catch((err) => rejectWithValue(err.message))
    }
)

const userSlice = createSlice({
    name: '@@auth',
    initialState,
    reducers: {
        singOut: () => initialState
    },

    extraReducers: (builder) => {
        builder
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = 'received'
                state.currentUser = action.payload
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'received'
                state.currentUser = action.payload
            })

            .addMatcher(isPending, (state, action: PayloadAction<string>) => {
                state.error = null
                state.status = 'loading'
            })

            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.status = 'rejected'
            });
    },
});

export const {singOut} = userSlice.actions
export const authReducer = userSlice.reducer;

//selectors
export const selectAuthInfo = (state: RootState) => ({
    status: state.authReducer.status,
    error: state.authReducer.error,
    currentUser: state.authReducer.currentUser,
    auth: !!state.authReducer.currentUser.username,
});

// //helpers
function isError(action: AnyAction) {
    return action.type.endsWith('rejected') && action.type.startsWith('@@auth')
}

function isPending(action: AnyAction) {
    return action.type.endsWith('pending') && action.type.startsWith('@@auth')
}
