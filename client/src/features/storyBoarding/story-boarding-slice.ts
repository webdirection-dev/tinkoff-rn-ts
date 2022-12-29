import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../store'
import {IStory} from "../../static/types/typesMongo"

const storyBoardingSlice = createSlice({
    name: '@@story-boarding',
    initialState: {story: null as IStory | null},
    reducers: {
        cleanStory: (state) => {
            state.story = null
        },

        setStory: (state, action) => {
            state.story = action.payload
        },
    }
})
export const {cleanStory, setStory} = storyBoardingSlice.actions
export const storyBoardingReducer = storyBoardingSlice.reducer
//selectors
export const selectStoryInfo = (state: RootState) => ({
    story: state.storyBoardingReducer.story
})
