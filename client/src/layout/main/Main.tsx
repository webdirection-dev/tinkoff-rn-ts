import {FC, ReactNode} from "react"
import {ScrollView, SafeAreaView} from "react-native"
import {stylesMain} from "./style"

interface IMain {children: ReactNode; isScrollView?: boolean}

const Main: FC<IMain> = ({children, isScrollView = true}) => {
    const {container} = stylesMain
    return(
        <SafeAreaView style={container}>
            { isScrollView ? <ScrollView>{children}</ScrollView> : children }
        </SafeAreaView>
    )
}
export default Main
