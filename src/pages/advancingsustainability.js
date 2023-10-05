import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/advancingsustainability/advancingsustainability-banner.png';
import Farmingneeds from '../assets/img/advancingsustainability/farming-needs.png';
import handshake from '../assets/img/watermanagement/handimg.jpg';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';

import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";
function Advancingsustainability() {

  return (

    <>
      <MyDiv >
        <section className="our-philosophy-banner advancing-sustainability-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Advancing Sustainability</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

    <MyDiv className='advancing-sustainability right-img-relative-part'>

      <section className="advance-sustainable-sec">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <MyDiv className="left-title-content">
                <HeadingTwo className="restoration-text">Sustainability refers to the ability to protect natural resources and prevent depletion and deterioration of earthly resources.</HeadingTwo>
              </MyDiv>
              <MyDiv className="left-text-content">
                <PTag>In a business and policy context, sustainable development is development that meets the needs of the present, without compromising the ability of future generations to meet their own needs. Mothers for Mother Nature is promoting sustainability by supporting and providing the tools and education to spread environmental stewardship and climate smart agriculture techniques that will achieve reduced GreenHouse Gas emissions and improved economic viability.</PTag>
                
                
              </MyDiv>
            </Col>
            <Col md={12} lg={6} className="ad-sust-imge-part">
            <MyDiv className="right-part-top-img">
            <MyDiv className="right-part-inner-image">
              <img src={Farmingneeds} alt="Farming needs" />
              </MyDiv>
              </MyDiv>
            </Col>
          </Row>
       </Container>
      </section>
      
      

    </MyDiv>
    </>

  );
}

export default  Advancingsustainability;
