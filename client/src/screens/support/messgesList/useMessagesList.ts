import {useAppSelector} from "../../../store"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"

export const useMessagesList = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))

    return {
        ownerId: owner._id
    }
}
