import {FC} from "react"
import {Text, View} from "react-native"
import {FontAwesome} from '@expo/vector-icons'
import {styles} from './style'
import {ICreditCard} from "../../../static/types/typesMongo"
import {currencyFormat} from "../../../static/helpers"

const CreditCard: FC<{item: ICreditCard}> = ({item: {_id, currency, balance, cardName, cardNumber}}) => {
    const {currOut, currIn, balanceWrapper, mini} = styles

    return(
        <>
            <View style={currOut}><View style={currIn}>
                <FontAwesome name={currency === 'RUB' ? 'ruble' : 'usd'} color='#488CF9' size={13}/>
            </View></View>

            <View style={balanceWrapper}>
                <Text style={{fontSize: 15}}>{cardName}</Text>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 2}}>{currencyFormat(currency, balance)}</Text>
            </View>

            <View style={{...mini, backgroundColor: (cardName === 'Tinkoff Black' ? 'black' : '#42A5F5')}}>
                <Text style={{color: 'white', fontWeight: '700'}}>{cardNumber.slice(-4)}</Text>
            </View>
        </>
    )
}
export default CreditCard
