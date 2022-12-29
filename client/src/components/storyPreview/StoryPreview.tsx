import {FC} from "react"
import {View, Pressable, ImageBackground, Text} from "react-native"
import {styles} from "./style"
import {useStoryPreview} from "./use-story-preview"
import {IStory} from "../../static/types/typesMongo"

const StoryPreview: FC<{item: IStory, index: number}> = ({item, index}) => {
    const {main} = styles
    const {handleClick} = useStoryPreview()

    return(
        <Pressable style={main.container} onPress={() => handleClick(item)}>
            <View style={{...main.item, marginLeft: index === 0 ? 20 : 8, marginRight: index === 3 ? 20 : 0}}>
                <ImageBackground
                    style={main.imgBackground}
                    imageStyle={{borderRadius: 18}}
                    source={{uri: item.images[0]}}
                    resizeMode='cover'
                >
                    <Text
                        style={{
                            ...main.title,
                            color: index === 0 ? 'black' : 'white',
                            marginTop: index === 1 || index === 3 ? 72 : 8,
                    }}
                    >{item.title}</Text>
                </ImageBackground>

            </View>
        </Pressable>
    )
}
export default StoryPreview
