import React from "react";

import Image from "./Image";


/* Inside Masthead, Portfolio Section, About Section and Contact Section */
export const Divider = ({isBackgroundLight = false}) => (
  <div className={`divider-custom${isBackgroundLight ? " divider-light" : ""}`}>
    <div className="divider-custom-line"></div>
    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
    <div className="divider-custom-line"></div>
  </div> 
);

/* Inside Portfolio Section */
export const PortfolioItem = ({dataBsTargetNumValue, img}) => (
  <div className="col-md-6 col-lg-4 mb-5">
    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={`#portfolioModal${dataBsTargetNumValue}`}>
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
        </div>
        <Image classNameText="img-fluid" name={img.name} altText={img.alt} />
    </div>
  </div>
);

/* Inside About Section */
export const TextContent = ({classNameText, theTextContent}) => (
  <div className={classNameText}><p className="lead">{theTextContent}</p></div>
);

/* Inside Footer */
export const Social = ({link, icon}) => (
  <a className="btn btn-outline-light btn-social mx-1" href={link}><i className={`fab fa-fw fa-${icon}`}></i></a>
);

