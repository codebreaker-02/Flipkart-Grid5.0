import { useState } from "react";
import brandLogo from "../assets/images/logoRC.png";
import Button from "./Button";

const Header = () => {

    const   [active, setActive] = useState("HeaderNavList"),
            [toggle, setToggle] = useState("NavbarToggle");

    const   navToggle = () => {
        active === "HeaderNavList" 
        ? setActive("HeaderNavList NavActive") 
        : setActive("HeaderNavList");

        toggle === "NavbarToggle" 
        ? setToggle("NavbarToggle ToggleActive") 
        : setToggle("NavbarToggle");
    }

    return (
        <header className="Header">
            <span className="brandLogoSpan">REWARDS CLUB <img src={ brandLogo } className="brandLogo"></img></span>
            <nav className="HeaderNav">
                <ul className={ active }>
                    <li className="HeaderNavListItem">about</li>
                    <li className="HeaderNavListItem">pricing</li>
                    <li className="HeaderNavListItem">contact</li>
                </ul>

                <button className={ toggle } onClick={ navToggle }>
                    <span className="ToggleLine"></span>
                    <span className="ToggleLine"></span>
                    <span className="ToggleLine"></span>
                </button>
            </nav>
            {/* <div className="CTAButton flex items-center">
                <Button text={<div className="CTAButton"><span className="AnimatedPulseFront"></span>
                <span className="AnimatedPulseBack"></span>
                <p className="CTAName">buy nfts</p></div>} onClick={(e)=>{console.log('clicked '+e.target.innerText)}} />
            </div> */}
        </header>
    )
};

export default Header;