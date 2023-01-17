import {useState} from "react"
import {dbImportant} from "../../../static/db/dbImportant"
import {IImportantItem} from "../../../static/types/types"

export const useImportantList = () => {
    const [items, setItems] = useState<IImportantItem[]>(dbImportant)

    return {items}
}
