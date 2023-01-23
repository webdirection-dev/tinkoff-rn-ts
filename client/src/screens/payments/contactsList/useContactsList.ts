import {useAppSelector} from "../../../store"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"
import {useGetAllContactsQuery} from "../../../features/contacts-api"
import {useEffect, useState} from "react";

export const useContactsList = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    const {data: contacts} = useGetAllContactsQuery()
    const [ownerCard, setOwnerCard] = useState('')

    useEffect(() => {
        contacts && contacts.forEach(i => {
            if (i.username === owner.username) setOwnerCard(i.cardNumber)
        })
    }, [contacts])

    return {
        contacts,
        ownerCard,
        ownerName: owner.username,
    }
}
