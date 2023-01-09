import {useState} from "react"
import {IContact} from "../../../static/types/typesMongo"

export const useContactsList = () => {
    const [contacts, setContacts] = useState<IContact[]>([])

    return {contacts}
}
