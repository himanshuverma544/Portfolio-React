import React from "react";

import "./Assets";

import Navigation from "./Navigation";
import Masthead from "./Masthead";
import PortfolioSection from "./PortfolioSection";
import PortfolioModals from "./PortfolioModals";
import AboutSection from "./AboutSection";

const App = () => (
  <>
    <Navigation
      heading = "My Portfolio"
    />
    <Masthead
      heading = "Himanshu Verma" 
      subheading = {["Software Developer"].join(' - ')}
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
  </>
);

export default App;