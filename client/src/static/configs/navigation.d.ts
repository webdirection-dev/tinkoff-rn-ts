import {TypeRootStackParamList} from "../types/types"

declare global {
    namespace ReactNavigation {
        interface RootParamList extends TypeRootStackParamList{}
    }
}
