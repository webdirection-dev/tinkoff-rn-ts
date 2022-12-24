import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../store'
import {IUser} from "../../static/types/typesMongo"

const usersSlice = createSlice({
    name: '@@users',
    initialState: {users: [] as IUser[]},
    reducers: {
        cleanUsers: (state) => {
            state.users = []
        },

        setUsers: (state, action) => {
            state.users = action.payload
        },
    }
})
export const {cleanUsers, setUsers} = usersSlice.actions
export const usersReducer = usersSlice.reducer
//selectors
export const selectUsersInfo = (state: RootState) => ({
    users: state.usersReducer.users,
})
