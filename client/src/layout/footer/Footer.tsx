import {FC, Dispatch, SetStateAction} from "react"
import {View} from "react-native"
import {styles} from "./style"
import NavItem from "../../components/navItem/NavItem"
import {dbMenuNavigation} from "../../static/db/dbMenuNavigation"
import {TypeRootStackParamList} from "../../static/types/types";

interface IFooterProps {
    navigate: (screenName: keyof TypeRootStackParamList) => void;
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
    support: boolean;
}

const Footer:FC<IFooterProps> = ({navigate, page, setPage, support}) => {
    const {container} = styles
    return(
        <View style={container}>
            {dbMenuNavigation.map(i => <NavItem key={i.title} item={i} navigate={navigate} page={page} setPage={setPage} support={support}/>)}
        </View>
    )
}
export default Footer
