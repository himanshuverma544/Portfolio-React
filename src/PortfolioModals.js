import React from "react";
import PortfolioModal from "./PortfolioModal";

const PortfolioModals = () => (
  <>
   <PortfolioModal
      numValue = "1"
      heading = "Log Cabin"
      img = {{name : "cabin.png", alt : "Cabin Image"}}
      theTextContent = "cabinModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "2"
      heading = "Tasty Cake"
      img = {{name : "cake.png", alt : "Cake Image"}}
      theTextContent = "cakeModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "3"
      heading = "Circus Tent"
      img = {{name : "circus.png", alt : "Circus Image"}}
      theTextContent = "circusModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "4"
      heading = "Controller"
      img = {{name : "game.png", alt : "Game Image"}}
      theTextContent = "gameModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "5"
      heading = "Locked Safe"
      img = {{name : "safe.png", alt : "Safe Image"}}
      theTextContent = "safeModal"
      btnText = "Close Window"
    />
    <PortfolioModal
      numValue = "6"
      heading = "Submarine"
      img = {{name : "submarine.png", alt : "Submarine Image"}}
      theTextContent = "submarineModal"
      btnText = "Close Window"
    />
  </>
);

export default PortfolioModals;