import {FC, ReactNode} from "react"
import {ScrollView, View} from "react-native"
import {useAppTailwind, styleCenter} from "../static/styles/style"

interface IMain {children: ReactNode; isScrollView?: boolean}

const Main: FC<IMain> = ({children, isScrollView = true}) => {
    const style = useAppTailwind()(styleCenter)

    return(
        <View style={style}>
            { isScrollView ? <ScrollView>{children}</ScrollView> : children }
        </View>
    )
}

export default Main
