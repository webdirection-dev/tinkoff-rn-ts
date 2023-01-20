import {View} from "react-native"
import {styles} from "./style"
import {dbServices} from "../../../static/db/dbServices"
import ServiceItem from "../serviceItem/ServiceItem"

const ServicesList = () => {
    const {container} = styles

    return(
        <View style={container}>
            {dbServices.map((i, index) => <ServiceItem key={i.title} item={i}/>)}
        </View>
    )
}
export default ServicesList
