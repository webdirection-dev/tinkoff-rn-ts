import {FC} from "react"
import {StyleSheet, Text} from "react-native"
import {title1} from "../../static/styles/mixins"

const Heading: FC<{title: string}> = ({title}) => (<Text style={StyleSheet.create(title1)}>{title}</Text>)
export default Heading
