import Main from "../../../layout/main/Main"
import Header from "../header/Header"
import StoryList from "../stories/storyList/StoryList"
import CreditCardsList from "../creditСardsList/CreditСardsList"

const Home = () => {

    return(
        <Main>
            <Header />
            <StoryList />
            <CreditCardsList />
        </Main>
    )
}
export default Home
