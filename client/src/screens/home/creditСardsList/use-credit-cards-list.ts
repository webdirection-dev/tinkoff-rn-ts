import {useEffect} from "react"
import {Alert} from "react-native"
import {useAppSelector} from "../../../store"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"

import {useGetAllCreditCardsQuery, useCreateCreditCardMutation} from "../../../features/creditCards/credit-cards-api"
import {getRandomCardNumber} from "../../../static/helpers"

import {TCurrency, TCardName} from "../../../static/types/types"

export const useCreditCardsList = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    const {data, error: errorGetting} = useGetAllCreditCardsQuery()
    const [createCreditCard, {isSuccess, status: statusCreating, error: errorCreating}] = useCreateCreditCardMutation()

    const asyncAlert = ({title, message, btnTxt}) => new Promise(
        resolve => {
            Alert.alert(
                title,
                message,
                [
                    {text: btnTxt.titleLeft, onPress: () => {resolve(btnTxt.txtOutLeft)}},
                    {text: btnTxt.titleRight, onPress: () => {resolve(btnTxt.titleRight)}},
                ],
                {cancelable: false}
            )
        }
    )

    const handleApply = async () => {
        try {
            const cardCurrency = await asyncAlert({
                title: 'Currency',
                message: 'Select account currency:',
                btnTxt: {titleLeft: 'RUB', titleRight: 'USD', txtOutLeft: 'RUB', txtOutRight: 'USD'},
            })

            const cardType = await asyncAlert({
                title: 'Card type',
                message: 'Select card type:',
                btnTxt: {titleLeft: 'Black', titleRight: 'All Airlines', txtOutLeft: 'Tinkoff Black', txtOutRight: 'Tinkoff All Airlines'},
            })

            const createNewCard = async () => {
                const newCard = {
                    userId: owner._id,
                    currency: cardCurrency as TCurrency,
                    cardName: cardType as TCardName,
                    cardNumber: getRandomCardNumber(),
                }

                await createCreditCard(newCard).unwrap()
            }

            createNewCard()

        } catch (e) {Alert.alert('Error apply product', e)}
    }

    //ALERTING SUCCESS
    useEffect(() => {
        if (statusCreating !== 'fulfilled') {
            isSuccess && Alert.alert(
                "Pending...",
                "Your card are pending...",
                [ {text: "Cancel", onPress: () => {}} ]
            )
        }

        if (statusCreating === 'fulfilled') {
            isSuccess && Alert.alert(
                "Success!",
                "Credit card has been added.",
                [ {text: "Cancel", onPress: () => {}} ]
            )
        }
    }, [statusCreating])

    //ALERTING ERROR
    useEffect(() => {
        if (errorGetting || errorCreating) {
            const errorOut = errorGetting ? errorGetting : errorCreating
            const {originalStatus, status, error, data} = errorOut as any

            Alert.alert(
                "ERROR!",
                `${originalStatus}: ${status} \n${error || data}`,
                [ {text: "Cancel", onPress: () => {}} ]
            )
        }
    }, [errorGetting, errorCreating])

    return {data, handleApply}
}
