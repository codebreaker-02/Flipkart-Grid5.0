import backgroundBlurObject2 from "../assets/images/BackgroundEllipse.png";
import heroImg from "../assets/images/HeroImg2.png";
// import AnimatedSvg from "./AnimatedSvg";
import analyticsImg from "../assets/images/AnalyticsImg.png";
import appImg from "../assets/images/AppImg.png";
import sellImg from "../assets/images/SellImg.png";
import airbnbLogo from "../assets/logos/airbnb_logo.svg";
import pumaLogo from "../assets/logos/puma_logo.svg";
import primeVideoLogo from "../assets/logos/prime_video_logo.svg";
import appleLogo from "../assets/logos/apple_logo.svg";
import CompanyLogo from "../assets/logos/CompanyLogo.svg"
import FastCompanyLogo from "../assets/logos/FastCompanyLogo.svg"
import ForbesLogo from "../assets/logos/ForbesLogo.svg"
import TechCrunchLogo from "../assets/logos/TechCrunchLogo.svg"
import FaqSection from "./FaqSection"
import TestimonialCard from "@/components/TestimonialCard";
import Lottie from 'lottie-react'
import blockchain1 from "../assets/animations/blockchain-2.json"
import Button from "./Button";


const HeroSection = () => {
  return (
    <>
        <section className="HeroSection">
            <div className="TopContent">
                <div className="LeftSideContent Info">
                    <h1 className="SiteHeadingOne">earn,<br/> <span className="AccentColor">redeem,</span> repeat with rewards</h1>
                    <p className="SiteHeroParagraph">the safest haven for trading <span className="AccentColor">Fungible Tokens</span> and unlocking rewards</p>
                    <div className="Buttons flex items-center">
                        <button className="CTAButton">BUY NFTS</button>
                        {/* <button className="SellNFTsCTAButton">SELL NFTS</button> */}
                        <Button text={'SELL NFTs'} onClick={(e)=>{console.log('clicked '+e.target.innerText)}}/>
                    </div>
                </div>
                <div className="RightSideContent">
                    <div className="RightSideImg">
                        {/* <img src={ heroImg }></img> */}
                        <Lottie className="animation1" animationData={blockchain1} />    
                    </div>
                </div>
            </div>
            <div className="TrustedPartnersContent">
                <p className="TrustedPartnersTitle">Trusted Partners</p>
                <div className="logos">
                    <div className="logos-slide">
                        <img src={ airbnbLogo }></img>
                        <img src={ pumaLogo }></img>
                        <img src={ primeVideoLogo }></img>
                        <img src={ appleLogo }></img>
                        <img src={ CompanyLogo }></img>
                        <img src={ TechCrunchLogo }></img>
                        <img src={ FastCompanyLogo }></img>
                        <img src={ ForbesLogo }></img>
                    </div>
                </div>
            </div>
        </section>
        <section className="AnalyticsSection">
            <div className="LeftSideContent">
                <img className="AnalyticsImg bg-gradient-to-r from-rose-500/70 to-purple-500/70 " src={ analyticsImg }></img>
            </div>
            <div className="RightSideContent Info">
                <p className="SubtitleContent">analytics</p>
                <h2 className="AnalyticsHeading">built-in analytics to track your NFTs</h2>
                <p className="AnalyticsContent">Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time</p>
                <button className="PricingButton">VIEW OUR PRICING</button>
            </div>
        </section>
        <section className="AppSection">
            <div className="LeftSideContent Info">
                <p className="SubtitleContent">get our app</p>
                <h2 className="AppHeading">browse NFTs from your smartphone</h2>
                <p className="AppContent">Our Krypto app is the easiest way to keep track of your assets when you’re on the go</p>
                <button className="AppButton">DOWNLOAD ON iOS</button>
            </div>
            <div className="RightSideContent">
                <img className="AppImg bg-gradient-to-r from-rose-500 to-purple-500" src={ appImg }></img>
            </div>
        </section>
        <section className="SellSection">
            <div className="LeftSideContent">
                <img className="SellImg bg-gradient-to-r from-rose-500 to-purple-500" src={ sellImg }></img>
            </div>
            <div className="RightSideContent Info">
                <p className="SubtitleContent">24&#47;7 access</p>
                <h2 className="SellHeading">sell your NFTs from anywhere at any time</h2>
                <p className="SellContent">With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time</p>
                <button className="SellButton">GET STARTED</button>
            </div>
        </section>
        <section className="TestimonialSection">
            <p className="SubtitleContent">testimonials</p>
            <h2 className="TestimonialTitle">Read what others have to say</h2>
            <div className="TestimonialSlider">
                <TestimonialCard />
            </div>
        </section>
        <section className="CTASection">
            <p className="SubtitleContent">are you ready&#63;</p>
            <h2 className="CTAHeading">be part of the <span className="AccentColor">next big thing</span></h2>
            <button className="CTAButton">GET STARTED</button>
        </section>

        <FaqSection />
    </>
  )
}

export default HeroSection