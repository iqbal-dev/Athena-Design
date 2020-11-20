import React from 'react';
import { Col, Container, Link, Row } from 'react-bootstrap';
import logo from '../../images/logo.png'
import fb from '../../images/fb.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import dribbbele from '../../images/dribbble.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container className="footer-area">
            <Row>
                <Col xs={5}>
                    <div>
                        <img src={logo} className="logo" alt=""></img>
                    </div>
                    
                    <div>
                        <img src={fb} className="brand" alt=""></img>
                        <img src={twitter} className="brand"  alt=""></img>
                        <img src={linkedin} className="brand"  alt=""></img>
                        <img src={dribbbele} className="brand" alt=""></img>  
                    </div>
                    
                </Col>
                <Col xs lg="2"> 
                <a href="/">Features</a>
                <br/>
                <a href="/">Enterprise</a>
                <br/>
                <a href="/">Pricing</a>                
                </Col>
                <Col xs lg="2"> 
                <a href="/">Blog</a> 
                <br/>
                <a href="/">Help Center</a> 
                <br/>
                <a href="/">Contact Us</a> 
                <br/>
                <a href="/">Status</a> 

                </Col>
                <Col xs lg="2"> 
                <a href="/">About Us</a> 
                <br/>
                <a href="/">Terms of service</a> 
                <br/>
                <a href="/">Security</a> 
                <br/>
                <a href="/">Login</a> 
                
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default Footer;