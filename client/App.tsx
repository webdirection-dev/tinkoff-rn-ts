import Navigation from "./app/layout/Navigation"
import {Provider} from "react-redux"
import {store} from "./app/store"
import {LogBox} from "react-native"

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

//отключить логи
// LogBox.ignoreAllLogs()
