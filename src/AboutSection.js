import React from "react";

import {Divider} from "./RepeatedElements";
import {TextContent} from "./RepeatedElements";

import getTextContent from "./TextContent";

const AboutSection = ({heading, theTextContent, link}) => (
  <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
      {/* <!-- About Section Heading--> */}
      <h2 className="page-section-heading text-center text-uppercase text-white">{heading}</h2>
      {/* <!-- Icon Divider--> */}
      <Divider/>
      {/* <!-- About Section Content--> */}
      <div className="row">
        <TextContent classNameText = "col-lg-4 ms-auto" theTextContent = {getTextContent(theTextContent.left)}/>
        <TextContent classNameText = "col-lg-4 me-auto" theTextContent = {getTextContent(theTextContent.right)}/>
      </div>
      {/* <!-- About Section Button--> */}
      <div className="text-center mt-4">
        <a className="btn btn-xl btn-outline-light" href={link.url}>
          <i className="fas fa-download me-2"></i>
          {link.title}
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;