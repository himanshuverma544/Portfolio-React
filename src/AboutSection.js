import React from "react";

import {Divider} from "./RepeatedElements";
import {TextContent} from "./RepeatedElements";

const AboutSection = ({heading, textContentData, link}) => (
  <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
      {/* <!-- About Section Heading--> */}
      <h2 className="page-section-heading text-center text-uppercase text-white">{heading}</h2>
      {/* <!-- Icon Divider--> */}
      <Divider isBackgroundLight = {true}/>
      {/* <!-- About Section Content--> */}
      <div className="row">
        {textContentData.map(data => (
          <TextContent key = {data.key} classNameText = {data.classNameText} theTextContent = {data.theTextContent}/>
        ))}
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