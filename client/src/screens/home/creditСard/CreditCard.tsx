import {Text} from "react-native"
import {styles} from './style'
import {FC} from "react";
import {ICreditCard} from "../../../static/types/typesMongo"

const CreditCard: FC<{item: ICreditCard}> = ({item: {_id, cardName}}) => {
    const {container} = styles

    return(
        <Text>{cardName}</Text>
    )
}
export default CreditCard
