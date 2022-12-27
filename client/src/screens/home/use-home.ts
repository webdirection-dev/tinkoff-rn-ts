import {useAppSelector} from "../../store"
import {selectOwnerInfo} from "../../features/auth/auth-slice"

export const useHome = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    return {owner}
}
