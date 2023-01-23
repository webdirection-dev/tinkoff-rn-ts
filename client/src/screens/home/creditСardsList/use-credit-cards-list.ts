import {useEffect} from "react"
import {useAppSelector} from "../../../store"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"
import {useGetMyCreditCardsQuery, useCreateCreditCardMutation} from "../../../features/credit-cards-api"

import {dbAlert} from "../../../static/db/dbAlerting"
import {getRandomCardNumber, promiseChoosingCreditCard, defaultAlert} from "../../../static/helpers"
import {TCurrency, TCardName} from "../../../static/types/types"

export const useCreditCardsList = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    const {data, error: errorGetting} = useGetMyCreditCardsQuery(owner._id)
    const [createCreditCard, {isSuccess, status: statusCreating, error: errorCreating}] = useCreateCreditCardMutation()

    const handleApply = async () => {
        try {
            const cardCurrency = await promiseChoosingCreditCard(dbAlert.currency)
            const cardType = await promiseChoosingCreditCard(dbAlert.type)
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
        } catch (e) {defaultAlert('Error apply product', e)}
    }

    //ALERTING SUCCESS
    useEffect(() => {
        if (statusCreating !== 'fulfilled') {
            isSuccess && defaultAlert('Pending...', 'Your card are pending...')
        }
        if (statusCreating === 'fulfilled') {
            isSuccess && defaultAlert('Success!', 'Credit card has been added.')
        }
    }, [statusCreating])
    //ALERTING ERROR
    useEffect(() => {
        if (errorGetting || errorCreating) {
            const errorOut = errorGetting ? errorGetting : errorCreating
            const {originalStatus, status, error, data} = errorOut as any
            isSuccess && defaultAlert('ERROR!', `${originalStatus}: ${status} \n${error || data}`)
        }
    }, [errorGetting, errorCreating])

    return {data, handleApply, statusCreating}
}
