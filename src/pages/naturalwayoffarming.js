import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/naturalfarming/farming-banner.png';
import potimage from '../assets/img/Helpingfarmer/joinus.png';
//import naturalway from '../assets/img/farming-needs.png';
import earth from '../assets/img/Home/customer-logo1.png';
import nanban from '../assets/img/Home/customer-logo2.png';
import aivanam from '../assets/img/Home/customer-logo3.png';
import lifecycle from '../assets/img/naturalfarming/lifecycle.jpg'
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';
import Naturalwayoffarmings from '../assets/img/naturalfarming/naturalwayoffarming.jpg';

import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";
function Naturalwayoffarming() {
  return (

    <>
      <MyDiv >
        <section className="our-philosophy-banner natural-farming-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Natural Way Of Farming</HeadingOne>
                <HeadingFour className="top-inner-title">Empowering farmers to preserve soil and farming for the better food quality.</HeadingFour>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

      <MyDiv className='helpingfarmer-section naturalway-farming right-img-relative-part'>

        <Container className='helping-farmer-sec'>
          <Row>
            <Col md={12} lg={6} sm={12} className=' text-content-left col-12'>
              <HeadingTwo>
                {/* Empowering farmers to preserve soil and farming for the better food quality. */}
                </HeadingTwo>
              <PTag>The natural way of farming enables farmers to make what they need: fertilizers, pest controllers, and diseases cure using natural materials based on nutritive cycle theory. This way of farming contributes to sustainable productivity, provides healthy food for all, and avoids artificial and external chemical fertilizers and pesticides. The principle of our natural farming; health, ecology, fairness, and care ensure enhancing healthy soil, plant, animal, and planet one in and indivisible while attaining ecological balance. So far, we have managed to cover 180 acres of land covered by natural way of farming and 451,000 ton/year carbon credit. </PTag>
            </Col>
            <Col md={12} lg={6}>
            <MyDiv className="right-part-top-img">
            <MyDiv className="right-part-inner-image">
              <img src={Naturalwayoffarmings} alt="Naturalwayoffarmings" />
              </MyDiv>
              </MyDiv>
            </Col>
            
          </Row>
          {/* <Row className="joinus-section">
            <HeadingThree> The way of farming </HeadingThree>
     
            <Col md={12} lg={6} sm={12} className=' image-left col-12'>
              <img src={potimage} className="image" alt="image" />
            </Col> */}
            {/* <Col md={12} lg={6} sm={12} className=' farmer-content-right col-12'> */}
              {/** old hide*/}
              {/* <PTag>Amet minim mollit non deserunt ullamco eat sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</PTag>
              <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercition veniam consequat sunt nostrud amet. Amet minim mollit  non deserunt ullamco est sil aliqua dolor do amet sint. velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint nostrud amet.</PTag> */}
               {/** old hide*/}
              {/* <PTag>Due to the high number of independent farmers in India, system organization has been historically difficult. Mothers for Mother Nature works to support this complexity through the launch OrgFarmer. OrgFarmer is an online marketplace that creates a communication pathway between farmers and consumers. It also enables widespread data collection to support regional growth strategies and increase crop diversification. This system was designed to empower farmers to design the systems they operate in.</PTag> */}
              {/* <Link to="#" className="more-btn">Know more</Link> */}
                            
            {/* </Col>
            </Row> */}
            <Row className="approach-sec mtb-50">
              <HeadingTwo>Our Approach</HeadingTwo>
              <Col lg={12} className="lifecycle-image">
                <img src={lifecycle} className="image" alt="image"/>
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

export default  Naturalwayoffarming;
