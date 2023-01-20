import React from "react";
import PortfolioModal from "./PortfolioModal";

const PortfolioModals = () => (
  <>
   <PortfolioModal
      numValue = "1"
      heading = "Log Cabin"
      img = {{name : "cabin.png", alt : "Cabin Image"}}
      theTextContent = "porCabinModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "2"
      heading = "Tasty Cake"
      img = {{name : "cake.png", alt : "Cake Image"}}
      theTextContent = "porCakeModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "3"
      heading = "Circus Tent"
      img = {{name : "circus.png", alt : "Circus Image"}}
      theTextContent = "porCircusModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "4"
      heading = "Controller"
      img = {{name : "game.png", alt : "Game Image"}}
      theTextContent = "porGameModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "5"
      heading = "Locked Safe"
      img = {{name : "safe.png", alt : "Safe Image"}}
      theTextContent = "porSafeModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "6"
      heading = "Submarine"
      img = {{name : "submarine.png", alt : "Submarine Image"}}
      theTextContent = "porSubmarineModal"
      btnText = "Close Window"
    />
  </>
);

export default PortfolioModals;