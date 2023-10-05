import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/workwithus/work-with-us-banner.jpg';
import potimage from '../assets/img/workwithus/joinus.png';
import earth from '../assets/img/Home/customer-logo1.png';
import nanban from '../assets/img/Home/customer-logo2.png';
import aivanam from '../assets/img/Home/customer-logo3.png';
import { MyDiv, HeadingOne, PTag, HeadingFour, HeadingThree,HeadingTwo, HeadingFive, Section } from '../common/Common';
import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";
import Workwithusimg from '../assets/img/workwithus/workwithus.png';

function Workwithus() {
  return (
    <>
      <MyDiv >
        <section className="our-philosophy-banner workwithus-banner"  style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Work With Us</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>
      
      <MyDiv className='workwithus-section right-img-relative-part'>
        <Container className='work-with-us-sec'>
          <Row>
            <Col md={12} lg={6} sm={12} className=' text-content-left col-12'>
              <HeadingTwo>Like to be a part of our community? Be the one to make a change</HeadingTwo>
              <PTag>Join us as we seek to liberate and empower farmers across the globe.</PTag>
              <PTag>There are several ways to get involved and join the momentum. Please see below for how to get in contact with our team.</PTag>
            </Col>
            <Col md={12} lg={6}>
            <MyDiv className="right-part-top-img">
            <MyDiv className="right-part-inner-image">
              <img src={Workwithusimg} alt="Workwithus" />
              </MyDiv>
              </MyDiv>
            </Col>
            
          </Row>
          {/* <Row className="join-us-section">
            <HeadingThree>Why should you <strong>join us </strong></HeadingThree>
            <Col md={12} lg={6} sm={12} className=' image-left col-12'>
              <img src={potimage} className="image" alt="image" />
            </Col>
            <Col md={12} lg={6} sm={12} className=' joinus-content-right col-12'>
              <PTag>Amet minim mollit non deserunt ullamco eat sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</PTag>
              <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercition veniam consequat sunt nostrud amet. Amet minim mollit  non deserunt ullamco est sil aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint nostrud amet.</PTag>
              <Link to="#" className="more-btn">Know more</Link>
              
            </Col>
          </Row> */}
          
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

export default  Workwithus;
