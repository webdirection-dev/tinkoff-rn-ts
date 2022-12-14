import {StatusBar} from "expo-status-bar"
import {Provider} from "react-redux"
import {store} from "./src/store"
import Navigation from "./src/layout/Navigation"

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar style={"auto"}/>
            <Navigation />
        </Provider>
    )
}

//отключить логи
// LogBox.ignoreAllLogs()
