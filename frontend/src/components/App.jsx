import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

import "../scss/index.scss";
import HeroSection from "./HeroSection";
import GameSection from "./GameSection/GameSection";
import Transaction from "./Transaction.jsx";

const App = () => {
    return (
        <> 
            <Header />
            {/* <Container component={<GameSection />}/> */}
            {/* <Container component={<HeroSection />}/> */}
            <Container component={<Transaction />} />
            <Footer />
        </>
    )
}

export default App;