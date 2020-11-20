import React from 'react';

import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import man from '../../images/man.png';
import Achivement from '../OurAchivements/Achivement';
import './StayRunning.css';


const StayRunning = () => {
    return (
        <>
        <section className='mb-5'>
        <Container>
          <Row className='d-flex justify-content-between align-items-center '>
              <Col    md={6}>
                 <Image className='w-100' src={man}  alt=''   />
              </Col>
              <Col  md={6} sm={12}  xl={6}>
                 <div className='ml-5'>
                     <h3>Stay Running & Project</h3>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit
                      Incidunt accusantium omnis obcaecati quas deserunt
                      illo autem quis, nihil asperiores dolorum .</p>
                    <div className='mt-5'>
                       <div className='button-contact'>Contact us</div> 
                    </div>
                 </div>
              </Col>
          </Row>
        </Container>
     </section>
     <section className='mt-5'>
         <Achivement />
     </section>
        </>
    );
};

export default StayRunning;