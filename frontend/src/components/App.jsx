import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

import "../scss/index.scss";
import HeroSection from "./HeroSection";
import GameSection from "./GameSection/GameSection";

const App = () => {
    return (
        <> 
            <Header />
            {/* <Container component={<GameSection />}/> */}
            <Container component={<HeroSection />}/>
            <Footer />
        </>
    )
}

export default App;