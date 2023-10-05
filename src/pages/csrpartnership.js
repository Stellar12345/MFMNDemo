import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/Csrpartnership/csr-partnership-banner.png';
import discussion from '../assets/img/Csrpartnership/group discussion.png';
import earth from '../assets/img/Home/customer-logo1.png';
import nanban from '../assets/img/Home/customer-logo2.png';
import aivanam from '../assets/img/Home/customer-logo3.png';
import { MyDiv, HeadingOne, PTag, HeadingFour, HeadingThree,HeadingTwo, HeadingFive, Section } from '../common/Common';
import Contactform from "../common/contactform.js";
import Corporate from '../assets/img/Csrpartnership/corporate.jpg';

import { Link } from "react-router-dom";

function Csrpartnership() {
  return (
    <>
      <MyDiv className='csrpartnership-section'>
        {/* <div className='generalInnerBanner howwework-banner' style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12} sm={12} xs={12}>
              <HeadingOne>CSR Partnership</HeadingOne>
              </Col>
            </Row>
            
          </Container>
        </div> */}

        <MyDiv >
        <section className="our-philosophy-banner Location-mfmn" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">CSR Partnership</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

        <MyDiv className="right-img-relative-part right-img-relative-part">

        <Container className='csr-partnership-sec'>
          <Row>
            <Col md={12} sm={12}  lg={6} className=' text-content-left col-12'>
              <HeadingTwo>We are actively looking to partner with organizations and groups that embody grassroots movements and climate leadership.</HeadingTwo>
              <PTag>Please contact us if your organization is interested in supporting and joining this work.</PTag>
            </Col>
            {/* <Col md={5} className='cs-right-img'>
              <img src={Corporate} className="image" alt="Corporate" />
            </Col> */}
            <Col md={12} lg={6}>
            <MyDiv className="right-part-top-img">
            <MyDiv className="right-part-inner-image">
            <img src={Corporate} className="image" alt="Corporate" />
              </MyDiv>
              </MyDiv>
            </Col>
            
          </Row>
          {/* <Row className="corporate-section">
            <HeadingThree><strong>Corporate </strong>Partnership</HeadingThree>
            <Col md={12} lg={6} sm={12} className=' image-left col-12'>
              <img src={discussion} className="image" alt="image" />
            </Col>
            <Col md={12} lg={6} sm={12} className=' corporate-content-right col-12'>
              <PTag>Amet minim mollit non deserunt ullamco eat sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</PTag>
              <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit.Exercition veniam consequat sunt nostrud amet.Amet minim mollit  non deserunt ullamco est sil aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint nostrud amet.</PTag>
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
        </MyDiv>

        <Contactform />
      </MyDiv>
    </>

  ); 
}

export default  Csrpartnership;
