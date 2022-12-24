import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../store'
import {IUser} from "../../static/types/typesMongo"

const ownerSlice = createSlice({
    name: '@@owner',
    initialState: {owner: {} as IUser},
    reducers: {
        cleanOwner: (state) => {
            state.owner = {} as IUser
        },

        setOwner: (state, action) => {
            state.owner = action.payload
        },
    }
})
export const {cleanOwner, setOwner} = ownerSlice.actions
export const ownerReducer = ownerSlice.reducer
//selectors
export const selectOwnerInfo = (state: RootState) => ({
    owner: state.ownerReducer.owner,
    auth: state.ownerReducer.owner && !!state.ownerReducer.owner.accessToken
})
