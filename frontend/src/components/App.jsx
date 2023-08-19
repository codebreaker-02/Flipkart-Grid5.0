import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

import "../scss/index.scss";
import HeroSection from "./HeroSection";
import GameSection from "./GameSection/GameSection";
import TransactionBlock from "./TransactionBlock/TransactionBlock";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <> 
            {/* <BrowserRouter>
                <Routes>
                    <Route>
                        
                    </Route>
                </Routes>
            </BrowserRouter> */}
            <Header />
            <Container component={<GameSection />}/>
            {/* <Container component={<HeroSection />}/> */}
            
            {/* <Container component={<TransactionBlock />} /> */}
            <Footer />
        </>
    )
}

export default App;