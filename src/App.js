import React from "react";

import Navigation from "./Navigation";
import Masthead from "./Masthead";
import PortfolioSection from "./PortfolioSection";
import PortfolioModals from "./PortfolioModals";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";



import "./Assets";



const App = () => (
  <>
    <Navigation
      heading = "My Portfolio"
    />
    <Masthead
      heading = "Johny" 
      subheading = {["Adventurous"].join(' - ')}
    />
    <PortfolioSection
      heading = "Portfolio"
    />
    <PortfolioModals/>
    <AboutSection
      heading = "About"
      theTextContent = {{left : "aboutSecLeftContent", right : "aboutSecRightContent"}}
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
        locAddress : "2215 John Daniel Drive Clark, MO 65243"
      }}
      centerContent = {{
        heading : "Around the Web",
        social : {
          facebook : {
            link : "#",
            icon : "facebook-f"
          },
          twitter : {
            link : "#",
            icon : "twitter",
          },
          linkedin : {
            link : "#",
            icon : "linkedin-in",
          },
          dribbble : {
            link : "#",
            icon : "dribbble"
          }
        }
      }}
      rightContent = {{
        heading : "About Adventurous",
        theTextContent : "footRightConAbout"
      }}
    />

  </>
);

export default App;