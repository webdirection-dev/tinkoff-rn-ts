import {useAppSelector} from "../../../store"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"

export const useHeader = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    return {owner}
}
