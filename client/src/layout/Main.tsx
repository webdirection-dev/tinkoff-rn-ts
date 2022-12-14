import {FC, ReactNode} from "react"
import {ScrollView, SafeAreaView} from "react-native"
import {useAppTailwind, styleCenter} from "../static/styles/style"

interface IMain {children: ReactNode; isScrollView?: boolean}

const Main: FC<IMain> = ({children, isScrollView = true}) => {
    const style = useAppTailwind()(styleCenter)

    return(
        <SafeAreaView style={style}>
            { isScrollView ? <ScrollView>{children}</ScrollView> : children }
        </SafeAreaView>
    )
}

export default Main
