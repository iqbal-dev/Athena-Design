import React from 'react';
import {  Col, Container,  Row } from 'react-bootstrap';
import './Achivement.css';
import happy from '../../images/happy.png';
import winner from '../../images/winner.png';
import cup from '../../images/cup.png';
import rocket from '../../images/rocket.png';
const Achivement = () => {
    return (
        <Container className='mt-5'>
        <Row className='d-flex justify-content-between align-items-center '>
            <Col   md={4} sm={12}>
              <div className='achive-text'>
               <h3>Our Achivements</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Incidunt accusantium omnis obcaecati quas deserunt
                    illo autem quis, nihil asperiores dolorum .</p>
             </div>
            </Col>
           
            <Col  md={8} sm={8} xl={8} >
            <div className='row justify-content-around d-flex w-100 align-items-center justify-content-center '>

                <div className='row achive-card happy d-flex align-items-center justify-content-center'>
                      <div>
                          <img  className='w-50 happy-icon' src={happy} alt='' />
                      </div>
                      <div>
                          <h3>700+</h3>
                          <p>Happy Clients</p>
                      </div>
                    </div> 
                <div className='row achive-card d-flex align-items-center justify-content-center'>
                      <div>
                          <img className='w-50' src={cup} alt='' />
                      </div>
                      <div>
                          <h3>140+</h3>
                          <p>Project Completed</p>
                      </div>
                    </div> 
                <div className='row achive-card d-flex align-items-center justify-content-center'>
                      <div>
                          <img className='w-50' src={winner} alt='' />
                      </div>
                      <div>
                          <h3>25+</h3>
                          <p>Crazy Minds</p>
                      </div>
                    </div> 

                <div className='row achive-card d-flex align-items-center justify-content-center'>
                     
                            <div>
                                <img className='w-50' src={rocket} alt='' />
                            </div>
                            <div>
                                <h3>75+</h3>
                                <p>Running Project</p>
                            </div>
                            
                     </div>

                  
                </div>
            </Col>
            
        </Row>
      </Container>
    );
};

export default Achivement;