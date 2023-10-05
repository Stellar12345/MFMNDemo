import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/Helpingfarmer/banner.png';
import potimage from '../assets/img/Helpingfarmer/joinus.png';
import Empowering from '../assets/img/Helpingfarmer/empowering-farmers.png';
import earth from '../assets/img/Home/customer-logo1.png';
import nanban from '../assets/img/Home/customer-logo2.png';
import aivanam from '../assets/img/Home/customer-logo3.png';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';
import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";
function Helpingfarmer() {
  return (
    <>
      <MyDiv >
        <section className="our-philosophy-banner Helping-farmer-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Helping Farmers</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>
      <MyDiv className='helpingfarmer-section right-img-relative-part'>
        <Container className='helping-farmer-sec'>
          <Row>
            <Col md={12} lg={6} sm={12} className=' text-content-left col-12'>
              <HeadingTwo>Empowering farmers to preserve soil and farming for the better food quality.</HeadingTwo>
              <PTag>Due to the multifaceted nature of the problems faced by Indian farmers, Mothers for Mother Nature took a multi-pronged solution to supporting farmers. </PTag>
              <PTag>Many farmers do not have the starting capital to support a transition to Regenerative Agriculture based practices. Mothers for Mother Nature works to address this problem by providing financial support to farmers implementing more sustainable farming methods.</PTag>
              <PTag>Due to the high number of independent farmers in India, system organization has been historically difficult. Mothers for Mother Nature works to support this complexity through the launch OrgFarmer. OrgFarmer is an online marketplace that creates a communication pathway between farmers and consumers. It also enables widespread data collection to support regional growth strategies and increase crop diversification. This system was designed to empower farmers to design the systems they operate in.</PTag>
              <PTag>To see additional ways that Mothers for Mother Nature is supporting farmers read and follow our blog postings.</PTag>
          </Col>     
          {/* <Col md={6}>
              <MyDiv className="right-part-top-img">
              <img src={Empowering} alt="Empowering" />
              </MyDiv>
            </Col>   */}
            <Col md={12} lg={6}>
            <MyDiv className="right-part-top-img">
            <MyDiv className="right-part-inner-image">
            <img src={Empowering} alt="Empowering" />
              </MyDiv>
              </MyDiv>
            </Col>     
          </Row>
          {/* <Row className="joinus-section">
            <HeadingThree> Why should you<strong> join us </strong></HeadingThree>
            <Col md={12} lg={6} sm={12} className=' image-left col-12'>
              <img src={potimage} className="image" alt="image" />
            </Col>
            <Col md={12} lg={6} sm={12} className=' farmer-content-right col-12'>
              <PTag>Amet minim mollit non deserunt ullamco eat sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</PTag>
              <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercition veniam consequat sunt nostrud amet. Amet minim mollit  non deserunt ullamco est sil aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint nostrud amet.</PTag>
              <Link to="#" className="more-btn">Know more</Link>
            </Col>
            </Row>  */}
          <Row className="associate-sec associate-mb">
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

export default  Helpingfarmer;
