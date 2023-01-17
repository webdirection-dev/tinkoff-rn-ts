import {useAppSelector} from "../../../store"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"
import {useGetAllContactsQuery} from "../../../features/contacts/contacts-api"

export const useContactsList = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    const {data: contacts, error: errorGetting, status} = useGetAllContactsQuery(owner.username)

    return {contacts}
}
