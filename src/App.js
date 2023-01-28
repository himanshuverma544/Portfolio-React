import React from "react";
import { v4 as getKey } from "uuid";

import Navigation from "./Navigation";
import Masthead from "./Masthead";
import PortfolioSection from "./PortfolioSection";
import PortfolioModals from "./PortfolioModals";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CopyrightSection from "./CopyrightSection";

import getTextContent from "./TextContent";
import {getCurrentYear} from "./functions";


const App = () => (
  <>
    <Navigation
      heading = "My Portfolio"
      links = {[
        {key : getKey(), url : "#portfolio", title : "Portfolio"},
        {key : getKey(), url : "#about", title : "About"},
        {key : getKey(), url : "#contact", title : "Contact"}
      ]}
    />
    <Masthead
      heading = "Himanshu Verma" 
      subheading = {["Adventurous", "Joyful", "Playful"].join(' - ')}
    />
    <PortfolioSection
      heading = "Portfolio"
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
    <ContactSection
      heading = "Contact Me"
      form = {{
        placeholder : {
          name : "Enter your name...",
          email : "name@example.com",
          phone : "(123) 456-7890",
          message : "Enter your message here..."
        },
        label : {
          name : "Full Name",
          email : "Email Address",
          phone : "Phone Number",
          message : "Message",
          btn : "Send"
        },
        feedback : {
          name : "A name is required.",
          email : {
            required : "An email is required.",
            notValid : "Email is not valid"
          },
          phone : "A phone number is required.",
          message : "A message is required."
        },
        submissionMsg : {
          success : "Form submission successful!",
          error : "Error sending message!"
        }
      }}
    />
    <Footer
      leftContent = {{
        locHeading : "Location",
        locAddress : "India"
      }}
      centerContent = {{
        heading : "Around the Web",
        social : [
          {key : getKey(), link : "#", icon : "facebook-f"},
          {key : getKey(), link : "#", icon : "twitter"},
          {key : getKey(), link : "#", icon : "linkedin-in"},
          {key : getKey(), link : "#", icon : "dribbble"}
        ]  
      }}
      rightContent = {{
        heading : "About",
        theTextContent : getTextContent("footRightConAbout")
      }}
    />
    <CopyrightSection textContent = {`Copyright © ${getCurrentYear()} by My Portfolio. All Rights Reserved.`}/>
  </>
);

export default App;