import React from 'react';
import { Card, CardDeck, Container, FormControl, InputGroup } from 'react-bootstrap';
import "./Pricing.css"

const Pricing = () => {
    return (
        <Container fluid className="pricing-area bg-image">
            <div className="title-area">
                <h3 className="text-center">Chooos Your Dedicated Team</h3>
            </div>

            <CardDeck className="container">
            <Card className="card-area">
                
                <Card.Body className="text-center card-inner">
                <Card.Title>$199</Card.Title>
                <p>For Basic</p>
                <hr className="underline"/>
                <Card.Text>
                    <p>Homepage</p>
                    <p>No Inner Page</p>
                    <p>Asset file</p>
                    <p>Source file</p>
                    <p>Free Stock Photos </p>
                    <p> 10 Days Free Support </p>
                    <p> 24/7 Support</p>
                </Card.Text>
                </Card.Body>
               
            </Card>
            <Card className="card-area">
           
                <Card.Body className="text-center card-inner">
                <Card.Title>$399</Card.Title>
                <p> For preferred</p>
                <hr className="underline"/>
                <Card.Text>
                    <p>Homepage</p>
                    <p>4 Inner Pages</p>
                    <p>Asset file</p>
                    <p>Source file</p>
                    <p>Free Stock Photos </p>
                    <p> 20 Days Free Support </p>
                    <p> 24/7 Support</p>
                </Card.Text>
                </Card.Body>
                
            </Card>
            <Card className="card-area">
               
                <Card.Body className="text-center card-inner">
                <Card.Title>$599</Card.Title>
                <p> For Elite</p>
                <hr className="underline"/>
               
                <Card.Text>
                    <p>Homepage</p>
                    <p>8 Inner Page</p>
                    <p>Asset file</p>
                    <p>Source file</p>
                    <p>Free Stock Photos </p>
                    <p> 30 Days Free Support </p>
                    <p> 24/7 Support</p>
                </Card.Text>
                </Card.Body>
                
            </Card>
            </CardDeck>

            <div className="text-center">
            <h3 className="title-text">Get Your Design Right, Right Now </h3>
            <p> Be the firs to know our latest offers and updates! </p>
                <InputGroup className="sm-2 search-box">
                <FormControl
                placeholder="Enter your email address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">Get Started</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            
        </Container>
    );
};

export default Pricing;