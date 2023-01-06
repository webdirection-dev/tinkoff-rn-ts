import {FC} from "react"
import {StyleSheet, Text} from "react-native"
import {title1} from "../../static/styles/mixins"

const Heading: FC<{title: string}> = ({title}) => (<Text style={styles.title}>{title}</Text>)
export default Heading
const styles = StyleSheet.create({ title: {...title1} })
