import {Dispatch, FC, SetStateAction} from "react"
import {Pressable, Text} from "react-native"
import {styles} from "./style"
import {gray500, blue500} from "../../static/styles/var";
import {AntDesign} from '@expo/vector-icons'
import {IFooterItem, TypeRootStackParamList} from "../../static/types/types"

interface INavItemProps {
    item: IFooterItem;
    navigate: (screenName: keyof TypeRootStackParamList) => void;
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
    support: boolean;
}

const NavItem:FC<INavItemProps> = ({item, navigate, page, setPage, support}) => {
    const {container} = styles

    return(
        <Pressable
            style={container}
            onPress={() => {
                navigate(item.title)
                setPage(item.title)
            }}
        >
            <AntDesign style={{fontSize: 25, color: (item.title === page ? blue500 : gray500)}} name={item.iconName} />
            <Text style={{fontSize: 12, color: (item.title === page ? blue500 : gray500), marginTop: 1}}>
                {
                    item.title !== 'Support' ? item.title :
                    item.title === 'Support' && support ? 'Chat' : 'Support'
                }
            </Text>
        </Pressable>
    )
}
export default NavItem
