import React from "react";

import Image from "./Image";
import {Divider} from "./RepeatedElements";

const Masthead = ({heading, subheading}) => (

  <header className="masthead bg-primary text-white text-center" id="page-top">
      <div className="container d-flex align-items-center flex-column">
          {/* <!-- Masthead Avatar Image--> */}
          <Image classNameText="masthead-avatar mb-5" name="avataaars.svg" altText="Avatar image of the person"/>
          {/* <!-- Masthead Heading--> */}
          <h1 className="masthead-heading text-uppercase mb-0">{heading}</h1>
          {/* <!-- Icon Divider--> */}
          <Divider isBackgroundLight={true}/>
          {/* <!-- Masthead Subheading--> */}
          <p className="masthead-subheading font-weight-light mb-0">{subheading}</p>
      </div>
  </header>
 );

 export default Masthead;