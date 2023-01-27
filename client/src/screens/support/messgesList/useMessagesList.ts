import {useAppSelector} from "../../../store"
import {selectOwnerInfo} from "../../../features/auth/auth-slice"

export const useMessagesList = () => {
    const {owner} = useAppSelector(store => selectOwnerInfo(store))
    const loadMoreItem = () => {
        console.log('Load More Item')
    }

    return {
        ownerId: owner._id
    }
}
