import React from "react";

import Image from "./Image";
import getTextContent from "./TextContent";

import {Divider} from "./RepeatedElements";

const PortfolioModal = ({numValue, heading, img, theTextContent, btnText}) => (
  <div className="portfolio-modal modal fade" id={`portfolioModal${numValue}`} tabIndex="-1" aria-labelledby={`portfolioModal${numValue}`} aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0">
          <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                  {/* <!-- Portfolio Modal - Title--> */}
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{heading}</h2>
                  {/* <!-- Icon Divider--> */}
                  <Divider/>
                  {/* <!-- Portfolio Modal - Image--> */}
                  <Image classNameText="img-fluid rounded mb-5" name={img.name} alt={img.alt}/>
                  {/* <!-- Portfolio Modal - Text--> */}
                  <p className="mb-4">{getTextContent(theTextContent)}</p>
                  <button className="btn btn-primary" data-bs-dismiss="modal">
                      <i className="fas fa-xmark fa-fw"></i>
                      {btnText}
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioModal;