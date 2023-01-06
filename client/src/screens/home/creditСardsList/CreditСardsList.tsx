import {View, Text, ActivityIndicator} from "react-native"
import {styles} from "./style"

import CreditCard from "../creditСard/CreditCard"
import ButtonCustom from "../../../components/buttonCustom/ButtonCustom"

import {useCreditCardsList} from "./use-credit-cards-list"

const CreditCardsList = () => {
    const {container, card, loader} = styles
    const {data, handleApply, statusCreating} = useCreditCardsList()

    return(
        <View style={container}>
            {statusCreating === 'pending' ? <ActivityIndicator size="large" color={loader.color}/> : (
                <>
                    {
                        data && data.length ?
                            data.map((i, index) => (
                                <View
                                    key={i._id}
                                    style={{
                                        ...card,
                                        borderBottomWidth: (index === data.length - 1 ? 0 : 2)
                                }}
                                ><CreditCard item={i}/></View>
                            )) : <Text>You don't have any cards</Text>
                    }

                    <ButtonCustom title='Apply far a new product' handleClick={handleApply} />
                </>
            )}
        </View>
    )
}
export default CreditCardsList
