import React from "react";

import {Divider} from "./RepeatedElements";
import {PortfolioItem} from "./RepeatedElements";

const PortfolioSection = ({heading}) => (
  <section className="page-section portfolio" id="portfolio">
      <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{heading}</h2>
          {/* <!-- Icon Divider--> */}
          <Divider/>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            <PortfolioItem dataBsTargetNumValue="1" img={{name : "cabin.png", alt : "cabin image"}}/>
            <PortfolioItem dataBsTargetNumValue="2" img={{name : "cake.png", alt : "cake image"}}/>
            <PortfolioItem dataBsTargetNumValue="3" img={{name : "circus.png", alt : "circus image"}}/>
            <PortfolioItem dataBsTargetNumValue="4" img={{name : "game.png", alt : "game image"}}/>
            <PortfolioItem dataBsTargetNumValue="5" img={{name : "safe.png", alt : "safe image"}}/>
            <PortfolioItem dataBsTargetNumValue="6" img={{name : "submarine.png", alt : "submarine image"}}/>
          </div>
      </div>
  </section>
);

export default PortfolioSection;



