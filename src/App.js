import "./assets/css/bootstrap-styles.css";
import "./assets/js/bootstrap-scripts.js";

import { v4 as getKey } from "uuid";

import Navigation from "./components/Navigation";
import Masthead from "./components/Masthead";
import PortfolioSection from "./components/PortfolioSection";
import PortfolioModals from "./components/PortfolioModals";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import CopyrightSection from "./components/CopyrightSection";

import getTextContent from "./assets/data/TextContent";
import {getCurrentYear} from "./functions";


const App = () => (
  <>
    <Navigation
      heading = "The Hobbyist"
      links = {[
        {key : getKey(), url : "#portfolio", title : "Hobbies"},
        {key : getKey(), url : "#about", title : "About"}
      ]}
    />
    <Masthead
      heading = "Himanshu Verma" 
      subheading = {["The biggest adventure you can ever take is to live the life of your dreams."].join(' - ')}
    />
    <PortfolioSection
      heading = "Hobbies"
      pItemData = {[
        {key : getKey(), theDataBsTargetNumVal : "1", name : "cabin.png", alt : "cabin image"},
        {key : getKey(), theDataBsTargetNumVal : "2", name : "cake.png", alt : "cake image"},
        {key : getKey(), theDataBsTargetNumVal : "3", name : "circus.png", alt : "circus image"},
        {key : getKey(), theDataBsTargetNumVal : "4", name : "game.png", alt : "game image"},
        {key : getKey(), theDataBsTargetNumVal : "5", name : "safe.png", alt : "safe image"},
        {key : getKey(), theDataBsTargetNumVal : "6", name : "submarine.png", alt : "submarine image"}
      ]}
    />
    <PortfolioModals
      pModalData = {[
        {
          key : getKey(),
          numValue : "1",
          heading : "Log Cabin",
          img : {name : "cabin.png", alt : "Cabin Image"},
          theTextContent : getTextContent("porCabinModal"),
          btnText : "Close Window"
        },
        {
          key : getKey(),
          numValue : "2",
          heading : "Tasty Cake",
          img : {name : "cake.png", alt : "Cake Image"},
          theTextContent : getTextContent("porCakeModal"),
          btnText : "Close Window"
        },
        {
          key : getKey(),
          numValue : "3",
          heading : "Circus Tent",
          img : {name : "circus.png", alt : "Circus Image"},
          theTextContent : getTextContent("porCircusModal"),
          btnText : "Close Window"
        },
        {
          key : getKey(),
          numValue : "4",
          heading : "Controller",
          img : {name : "game.png", alt : "Game Image"},
          theTextContent : getTextContent("porGameModal"),
          btnText : "Close Window"
        },
        {
          key : getKey(),
          numValue : "5",
          heading : "Locked Safe",
          img : {name : "safe.png", alt : "Safe Image"},
          theTextContent : getTextContent("porSafeModal"),
          btnText : "Close Window"
        },
        {
          key : getKey(),
          numValue : "6",
          heading : "Submarine",
          img : {name : "submarine.png", alt : "Submarine Image"},
          theTextContent : getTextContent("porSubmarineModal"),
          btnText : "Close Window"
        }
      ]}
    />
    <AboutSection
      heading = "About"
      textContentData = {[{
        key : getKey(),
        classNameText : "col-lg-4 ms-auto",
        theTextContent : getTextContent("aboutSecLeftContent")
      },
      {
        key : getKey(),
        classNameText : "col-lg-4 me-auto",
        theTextContent : getTextContent("aboutSecRightContent")
      }]}
      link = {{url : "#", title : "Download"}}
    />
    <Footer
      leftContent = {{
        locHeading : "Location",
        locAddress : "India"
      }}
      centerContent = {{
        heading : "Around the Web",
        social : [
          {key : getKey(), link : "https://www.facebook.com/himanshuverma544", target : "_blank", icon : "facebook-f"},
          {key : getKey(), link : "https://twitter.com/_Himanshu_Verma", target : "_blank", icon : "twitter"},
          {key : getKey(), link : "https://www.linkedin.com/in/himanshuverma544", target : "_blank", icon : "linkedin-in"},
          {key : getKey(), link : "https://github.com/himanshuverma544", target : "_blank", icon : "github"}
        ]  
      }}
      rightContent = {{
        heading : "About",
        theTextContent : getTextContent("footRightConAbout")
      }}
    />
    <CopyrightSection textContent = {`Copyright © ${getCurrentYear()} by The Hobbyist. All Rights Reserved.`}/>
  </>
);

export default App;