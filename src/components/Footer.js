import {Social} from "./RepeatedAndEasyAcessElements";

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
                {centerContent.social.map(platform => ( 
                  <Social key = {platform.key} link = {platform.link} target = {platform.target} icon = {platform.icon}/>
                ))}
            </div>
            {/* <!-- Footer About Text--> */}
            <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">{rightContent.heading}</h4>
                <p className="lead mb-0">
                  {rightContent.theTextContent}
                </p>
            </div>
        </div>
    </div>
  </footer>
);

export default Footer;