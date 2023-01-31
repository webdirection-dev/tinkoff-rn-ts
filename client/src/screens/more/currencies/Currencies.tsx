import {Text, View} from "react-native"
import {styles} from "./style"
import {useCurrencies} from "./use-currencies"
import Loading from "../../../components/loading/Loading";

const Currencies = () => {
    const {container, item, title, subtitle} = styles
    const {isLoading, currencies} = useCurrencies()
    return(
        <View style={container}>
            {isLoading ? <Loading /> : (
                currencies && currencies.map(i => {
                    return(
                        <View key={i.name} style={item}>
                            <Text style={title}>{i.name}</Text>
                            <Text style={subtitle}>{i.value}</Text>
                        </View>
                    )
                })
            )}
        </View>
    )
}
export default Currencies
