import React from "react";

import Image from "./Image";

/* Inside Navigation */
export const NavLi = ({link}) => (
  <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href={link.url}>{link.title}</a></li> 
);

/* Inside Masthead */
export const Divider = () => (
  <div className="divider-custom divider-light">
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

