import {Provider} from "react-redux"
import {store} from "./src/store"
import {StatusBar} from "expo-status-bar"
import Navigation from "./src/Navigation"
import StoryBoarding from "./src/features/storyBoarding/StoryBoarding"

const App = () => (
    <Provider store={store}>
        <StatusBar style={"auto"}/>
        <Navigation />
        <StoryBoarding />
    </Provider>
)
export default App
