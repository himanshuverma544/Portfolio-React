import React from "react";

import {NavLi} from "./RepeatedElements";

const Navigation = ({heading, hamburgerHeading = "Menu", links}) => (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">{heading}</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    {hamburgerHeading}
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        {links.map(link => (
                            <li key={link.key} className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href={link.url}>{link.title}</a></li> 
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
);

export default Navigation;