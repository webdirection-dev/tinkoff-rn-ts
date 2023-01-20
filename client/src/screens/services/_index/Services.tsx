import {Text, View} from "react-native"
import Main from "../../../layout/main/Main"
import {styles} from "./style"
import ServicesList from "../servicesList/ServicesList"

const Services = () => {
    const {title} = styles

    return(
        <Main>
            <Text style={title}>Moscow</Text>
            <ServicesList />
        </Main>
    )
}
export default Services
