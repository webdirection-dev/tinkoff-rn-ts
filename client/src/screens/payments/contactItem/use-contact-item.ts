import {Alert} from "react-native"
import {useMakeTransferMutation} from "../../../features/creditCards/credit-cards-api"
import {useEffect} from "react"

export const useContactItem = (cardNumber, ownerCard) => {
    const [makeTransfer, {data, error, isSuccess, isError}] = useMakeTransferMutation()

    const handleTransfer = () => {
        Alert.prompt(
            'Sum transfer',
            'Enter the transfer',
            async (sum) => {
                if (sum.match(/^\d+$/)) {
                    try {
                        await makeTransfer({writeoff: ownerCard, writeon: cardNumber, amount: Number(sum)})
                    } catch (e: any) {Alert.alert('Error transfer', e)}
                } else Alert.alert('ERROR', 'Only numbers can be used. Please, try again.')
            }
        )
    }

    useEffect(() => {
        if (isSuccess) Alert.alert('SUCCESS', 'Translation is successful!')
        if (isError && error) {
            const {data} = error as any
            Alert.alert('ERROR!', data)
        }
    }, [isSuccess, isError])

    return {handleTransfer}
}
