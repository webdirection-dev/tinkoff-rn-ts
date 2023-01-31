import {useEffect, useState} from "react";
import {ICurrencies} from "../../../static/types/types";
import {Alert} from "react-native"

const API_KEY = '4NuXbUFa30on5zAfYg6j7wKJmgVFtfaZB95xAgkv'
const URL = 'https://api.freecurrencyapi.com/v1/latest?apikey='+API_KEY+'&base_currency=RUB'

export const useCurrencies = () => {
    const [currencies, setCurrencies] = useState<ICurrencies[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(URL)
                .then(response => response.json())
                .then( data => data.data)
                .catch( err => {Alert.alert('Fetch ', err)} )

            setIsLoading(false)
            setCurrencies([
                {name: 'USD', value: (1 / data.USD).toFixed(2)},
                {name: 'EUR', value: (1 / data.EUR).toFixed(2)},
                {name: 'GBP', value: (1 / data.GBP).toFixed(2)},
            ])
        }

        fetchData()
    }, [])

    return {isLoading, currencies}
}
