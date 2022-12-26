import {Provider} from "react-redux"
import {store} from "./src/store"
import {StatusBar} from "expo-status-bar"
import Navigation from "./src/Navigation"

const App = () => (
    <Provider store={store}>
        <StatusBar style={"auto"}/>
        <Navigation />
    </Provider>
)
export default App
