import {useAppSelector, useAppDispatch} from "../../store"
import {cleanStory, selectStoryInfo} from "./story-boarding-slice"
import {StoryContainer} from 'react-native-stories-view'

const StoryBoarding = () => {
    const dispatch = useAppDispatch()
    const {story} = useAppSelector(store => selectStoryInfo(store))

    return (
        story && (
            <StoryContainer
                images={story.images}
                onComplete={() => dispatch(cleanStory())}
                duration={1}
                visible={true}
                enableProgress={true}
                containerStyle={{width: '100%', height: '100%'}}
            />
        )
    )
}
export default StoryBoarding
