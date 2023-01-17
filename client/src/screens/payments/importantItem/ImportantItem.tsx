import {FC} from "react"
import {Text, Pressable} from "react-native"
import ImportantIcon from "./importantIcon"
import {styles} from "./style"
import {IImportantItem} from "../../../static/types/types"

interface IContactItemProps {item: IImportantItem, index: number}

const ImportantItem:FC<IContactItemProps> = ({item: {title, iconName}, index}) => {
    const {container, txt} = styles

    return(
        <Pressable style={{...container, marginLeft: index === 0 ? 25 : 0}}>
            <ImportantIcon iconName={iconName}/>
            <Text style={txt}>{title}</Text>
        </Pressable>
    )
}
export default ImportantItem
