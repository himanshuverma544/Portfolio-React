import React from "react";

import {Social} from "./RepeatedElements";

import getTextContent from "./TextContent";

const Footer = ({leftContent, centerContent, rightContent}) => (
  <footer className="footer text-center">
    <div className="container">
        <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">{leftContent.locHeading}</h4>
                <p className="lead mb-0">
                  {leftContent.locAddress}
                </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">{centerContent.heading}</h4>
                <Social link = {centerContent.social.facebook.link} icon = {centerContent.social.facebook.icon}/>
                <Social link = {centerContent.social.twitter.link} icon = {centerContent.social.twitter.icon}/>
                <Social link = {centerContent.social.linkedin.link} icon = {centerContent.social.linkedin.icon}/>
                <Social link = {centerContent.social.dribbble.link} icon = {centerContent.social.dribbble.icon}/>
            </div>
            {/* <!-- Footer About Text--> */}
            <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">{rightContent.heading}</h4>
                <p className="lead mb-0">
                  {getTextContent(rightContent.theTextContent)}
                </p>
            </div>
        </div>
    </div>
  </footer>
);

export default Footer;