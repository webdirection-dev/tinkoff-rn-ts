import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../store'

const ownerSlice = createSlice({
    name: '@@owner',
    initialState: {owner: {}},
    reducers: {
        cleanOwner: (state) => {
            state.owner = {}
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
})
