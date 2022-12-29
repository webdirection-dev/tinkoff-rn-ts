import {useAppDispatch} from "../../store"
import {setStory} from "../../features/storyBoarding/story-boarding-slice"

export const useStoryPreview = () => {
    const dispatch = useAppDispatch()

    const handleClick = (item) => {
        item && dispatch(setStory(item))
    }

    return {handleClick}
}
