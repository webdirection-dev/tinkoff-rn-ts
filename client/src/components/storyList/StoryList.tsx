import {FlatList, View} from "react-native"
import {styles} from "./style"
import {dbStories} from "../../static/db/dbStories"

import StoryPreview from "../storyPreview/StoryPreview"

const StoryList = () => {
    const {main} = styles

    return(
        <View style={main.container}>
            <FlatList
                data={dbStories}
                renderItem={i => <StoryPreview item={i.item} index={i.index}/> }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={i => i._id}
            />
        </View>
    )
}
export default StoryList
