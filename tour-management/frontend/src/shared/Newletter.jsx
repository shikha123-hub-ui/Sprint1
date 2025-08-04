

import React from 'react'
import './newletter.css'

import { Container , Row , Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
              <div className="newsletter__content">
                <h2>Subscirbe now to get useful travelling information.</h2>
                <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className="btn newsletter__btn">
                        Subscribe
                    </button>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur temporibus, qui iusto rerum impedit porro et eligendi rem nesciunt assumenda.</p>
              </div>
            </Col>
            <Col lg='6'>
              <div className='newsletter__img'>
                <img src={maleTourist} alt="" />  
              </div>            
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newletter