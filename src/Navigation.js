import React from "react";

import {NavLi} from "./RepeatedElements";

const Navigation = ({heading, hamburgerHeading = "Menu"}) => (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">{heading}</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    {hamburgerHeading}
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <NavLi link = {{url : "#portfolio", title : "Portfolio"}}/>
                        <NavLi link = {{url : "#about", title : "About"}}/>
                        <NavLi link = {{url : "#contact", title : "Contact"}}/>
                    </ul>
                </div>
            </div>
        </nav>
);

export default Navigation;