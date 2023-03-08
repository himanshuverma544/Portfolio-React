import {Divider} from "./RepeatedAndEasyAcessElements";
import {TextContent} from "./RepeatedAndEasyAcessElements";

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
    </div>
  </section>
);

export default AboutSection;