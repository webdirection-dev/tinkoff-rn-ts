import {FC} from "react"
import {StyleSheet, Text} from "react-native"
import {title2} from "../../static/styles/mixins"

const SubHeading: FC<{title: string}> = ({title}) => (<Text style={StyleSheet.create(title2)}>{title}</Text>)
export default SubHeading
