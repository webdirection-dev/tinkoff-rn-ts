import {ScrollView, View} from "react-native"
import {styles} from "./style"
import {useImportantList} from "./useImportantList"

import ImportantItem from "../importantItem/ImportantItem"
import Loading from "../../../components/loading/Loading"

const ImportantList = () => {
    const {items} = useImportantList()
    const {container} = styles

    return(
        <View style={container}>
            {
                items.length ? (
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {items.map((i, index) => <ImportantItem key={i._id} item={i} index={index}/>)}
                    </ScrollView>
                ) : <Loading />
            }
        </View>
    )
}
export default ImportantList
