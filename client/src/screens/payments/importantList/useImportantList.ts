import {useState} from "react"

export const useImportantList = () => {
    const [items, setItems] = useState<any[]>([])

    return {items}
}
