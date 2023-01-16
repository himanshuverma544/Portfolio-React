import React from "react";

import "./Assets";

import Navigation from "./Navigation";
import Masthead from "./Masthead";
import PortfolioSection from "./PortfolioSection";
import PortfolioModals from "./PortfolioModals";

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
  </>
);

export default App;