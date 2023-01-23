import {useNavigation} from "@react-navigation/native";
import {useGetUsersByIdQuery} from "../../../features/users/users-api";

export const useChatItem = (members) => {
    const {navigate} = useNavigation()
    const {data: sender, isSuccess} = useGetUsersByIdQuery(members[0])

    return {navigate, isSuccess, sender}
}
