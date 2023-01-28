import React from "react";

import PortfolioModal from "./PortfolioModal";

const PortfolioModals = ({pModalData}) => (
  <>
    {pModalData.map(modal => (
      <PortfolioModal
        key = {modal.key}
        numValue = {modal.numValue} 
        heading = {modal.heading}
        img = {{name : modal.img.name, alt : modal.img.alt}}
        theTextContent = {modal.theTextContent}
        btnText = {modal.btnText}
      />
    ))}
  </>
);

export default PortfolioModals;