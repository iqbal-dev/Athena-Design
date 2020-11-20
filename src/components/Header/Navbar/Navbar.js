
import React from 'react';
import logo from "../../../image/logo.png";
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light container" style={{paddingTop:'40px'}}>
            <a className="navbar-brand" href="#"><img style={{height:'60px'}} src={logo} alt=""/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-bar" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                            
                {/* <div class="button">
                    <div class="curled-bottom curled upon" style={{left:"-10px"}}> </div>
                    <div class="curled-bottom curled bottom" style={{left:"70px"}}> </div>

                    <div class="curled-top curled bottom" style={{left:"-10px"}}> </div>
                    <div class="curled-top curled upon" style={{left:"70px"}}> </div>
                    <div class="button-text">TEXT</div>
                </div> */}
                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>

                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About <span></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Our Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact us</a>
                </li>
                </ul>
            </div>
            </nav>
        </>
    );
};

export default Navbar;