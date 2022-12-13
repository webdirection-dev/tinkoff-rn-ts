import {TypeRootStackParamList} from "../types/anotherTypes"

declare global {
    namespace ReactNavigation {
        interface RootParamList extends TypeRootStackParamList{}
    }
}
