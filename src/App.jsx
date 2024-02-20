import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Heroslider from "./components/Slider/Heroslider";
import ExploreBestseller from "./components/ExploreBestseller";
import Poductslider from "./components/Slider/Poductslider"
import HighlightImage from "./components/HighlightImage";
import ShopbyCategories from "./components/ShopbyCategories";
import Futures from "./components/Futures";
import Footerslider from "./components/Slider/Footerslider";
import Footer from "./components/Footer";
import Bestsellers from "./pages/BestOfGizmore/Bestsellers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bestofheader from "./components/Bestofheader";
import BTspeakers from "./pages/BestOfGizmore/BTspeakers";
import Neckband from "./pages/BestOfGizmore/Neckband";
import Smartwatch from "./pages/BestOfGizmore/Smartwatch";
import Truewirelessterio from "./pages/BestOfGizmore/Truewirelessterio";
import Footerheader from "./components/Footerheader";

function App() {

    return (<> 
    <Router>
        <Header/>
        <Navbar/>
        <Heroslider/>
        <ExploreBestseller/>
        <Poductslider/>
        <HighlightImage/>
        <ShopbyCategories/>
        <Bestofheader/>
        <Routes>
            <Route path="/" element={<Bestsellers/>} />
            <Route path="/smartwatch" element={<Smartwatch/>} />
            <Route path="/truewirelessterio" element={<Truewirelessterio/>} />
            <Route path="/neckband" element={<Neckband/>} />
            <Route path="/btspeakers" element={<BTspeakers/>} />
        </Routes>
        <Futures/>
        <Footerslider/>
        <Footer/>
        <Footerheader/>
    </Router>
    </>)
}
    
export default App;