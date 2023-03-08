import {Divider} from "./RepeatedAndEasyAcessElements";
import {PortfolioItem} from "./RepeatedAndEasyAcessElements";

const PortfolioSection = ({heading, pItemData}) => (
  <section className="page-section portfolio" id="portfolio">
      <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{heading}</h2>
          {/* <!-- Icon Divider--> */}
          <Divider/>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-center">
            {pItemData.map(pItemData => (
              <PortfolioItem key = {pItemData.key} dataBsTargetNumValue = {pItemData.theDataBsTargetNumVal} img={{name : pItemData.name, alt : pItemData.alt}}/>
            ))}
          </div>
      </div>
  </section>
);

export default PortfolioSection;