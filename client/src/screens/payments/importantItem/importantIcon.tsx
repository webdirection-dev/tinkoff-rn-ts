import {FC} from "react"
import {View} from "react-native"
import {AntDesign} from "@expo/vector-icons";
import {TImportantIcon} from "../../../static/types/types"
import {blue500} from "../../../static/styles/var"

const ImportantIcon:FC<TImportantIcon> = ({iconName}) => (
    <View style={{width: 36, height: 36, borderRadius: 50, backgroundColor: blue500, alignItems: 'center', justifyContent: 'center'}}>
        <AntDesign name={iconName} size={19} color='#EDF4FE'/>
    </View>
)
export default ImportantIcon
