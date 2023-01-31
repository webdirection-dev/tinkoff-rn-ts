import {View} from "react-native"
import {styles} from "./style"
import MenuItem from "../menuItem/MenuItem"
import {dbMore} from "../../../static/db/dbMore"

const MenuList = () => {
    const {container} = styles

    return(
        <View style={container}>
            {dbMore.map(i => <MenuItem item={i} key={i.title}/>)}
        </View>
    )
}
export default MenuList
