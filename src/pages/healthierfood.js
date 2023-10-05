import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/healthierfood/healthierbanner.png';
import nations from '../assets/img/healthierfood/nationsimg.png';
import earth from '../assets/img/Home/customer-logo1.png';
import nanban from '../assets/img/Home/customer-logo2.png';
import aivanam from '../assets/img/Home/customer-logo3.png';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';

import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";
function Healthierfood() {

  return (
    <>
      <MyDiv >
        <section className="our-philosophy-banner Healthier-food-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Healthier Food For All</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

      <MyDiv className='healthierfood-section'>
        <Container>
          <Row className="United-Nations-section">
            <HeadingThree>Healthy food is healthy life</HeadingThree>
               <Col md={12} lg={6} sm={12} className=' healthier-image col-12'>
               <MyDiv><img src={nations} className="image" alt="image" /></MyDiv>
                </Col>
                <Col md={12} lg={6} sm={12} className=' healthier-content-right healthier-first-part col-12'>
                <PTag>In 2012 global leaders met to establish the United Nations Sustainable Development Goals. The purpose of this was to create an agreed upon set of global goals related to the current problems and inequities faced by society pertaining to the environment, government policy, and economic viability that the world could combat collectively.</PTag>
              <PTag>In alignment with the United Nations Sustainable Development Goal number 2, we believe in combating hunger so that everyone has access to clean and healthy food.</PTag>
              
              </Col>
            </Row>
          
          <Row className="associate-sec mtb-50">
          <HeadingTwo>We are <strong>Associated</strong>   with</HeadingTwo>
            <Col md={4} sm={4}>
              <MyDiv className="associateimg">
                <img src={earth} className="image" alt="image" />
              </MyDiv>
            </Col>
            <Col md={4} sm={4} >
              <MyDiv className="associateimg">
                <img src={nanban} className="image" alt="image" />
              </MyDiv>
            </Col>
            <Col md={4} sm={4}>
              <MyDiv className="associateimg">
                <img src={aivanam} className="image" alt="image" />
              </MyDiv>
            </Col>
          </Row>
        </Container>
        <Contactform />
      </MyDiv>
     
    </>

  );
}

export default  Healthierfood;
