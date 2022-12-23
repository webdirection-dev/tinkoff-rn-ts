import {TypeRootStackParamList} from "../static/types/types"

declare global {
    namespace ReactNavigation {
        interface RootParamList extends TypeRootStackParamList{}
    }
}
