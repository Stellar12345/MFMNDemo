import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/green-earth/green-earth-bg.jpg';
import nations from '../assets/img/aroundglobe/mfmn-around.png';
import earth from '../assets/img/Home/customer-logo1.png';
import nanban from '../assets/img/Home/customer-logo2.png';
import aivanam from '../assets/img/Home/customer-logo3.png';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';

import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";
import earths from '../assets/img/aroundglobe/mfmn-around-img1.jpg';
import OurGallery from "../pages/gallery/our-gallery-data";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import Green_earth_01 from '../assets/img/green-earth/green-earth-01.jpg';
import Green_earth_02 from '../assets/img/green-earth/green-earth-02.jpg';


function Greenearth() {

  return (

    <>
      <MyDiv >
        <section className="our-philosophy-banner Healthier-food-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Green Earth</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

      <MyDiv className='healthierfood-section'>
        <Container>

        
          <Row className="United-Nations-section">
            <HeadingThree className="mb-0">Green Earth</HeadingThree>
            </Row>          
          
        </Container>
     
      </MyDiv>
      <MyDiv className="mfmn-around-the-globe-product">
      <Container>

<Row>
  <Col  className="healthier-content-right" md={12}>
   <MyDiv>
  <PTag>Green Earth, a global movement brought to you by The Rise, Nanban Foundation's Mothers for Mothers Nature. Our mission is to strengthen and advance contemporary global priorities in various sectors, including Food Security, Environment & Biodiversity, Water Security, Clean Energy, Sustainable agriculture, Green Technologies, and Environmental and Social Governance.</PTag>
  <PTag>We are dedicated to raising massive awareness about safe and good food, while also facilitating production to market integration in the good food supply chain. Additionally, we aim to expand organic and good food farming, providing much-needed support to organic farmers. One of our key initiatives is the Millets Mission, where we focus on expanding production, consumption, and global supply chain linkages of this nutritious grain.</PTag>
  <PTag>Joining forces with passionate individuals, institutions, organizations, and communities, we have organized Green Fests and Fairs all over the world throughout the year to strengthen our Green Earth Mission Objectives. We proudly present our flagship event called "Pasumai Sangamam" - which translates to 'Green Confluence'. This festival celebrates and promotes sustainable living, showcasing a wide array of eco-friendly products, workshops, and inspiring exhibitions.</PTag>
  <PTag>The festival's first phase was held in Kanniyakumari, Tiruvarur, Kumbakonam, Tirunelveli, Viruthunagar, and Coimbatore.</PTag>
  <PTag>This incredible event featured an exhibition showcasing more than 130 types of food based on millets and grains by school and college students.</PTag>
  <PTag>Join us on this transformative journey towards a greener and more sustainable planet. Together, we can create a better future for generations to come.</PTag>
  </MyDiv> 
  </Col>       
</Row>
          <Row className="green-lack-section">
            <Col md={6}>
            <MyDiv className="lack-pro-img" >
       <img src={Green_earth_01} alt="Green earth"/>
       </MyDiv> 
            </Col>
            <Col md={6}>
            <MyDiv className="lack-pro-img" >
       <img src={Green_earth_02} alt="Green earth"/>
       </MyDiv> 
       </Col>
          </Row>
      </Container>
      </MyDiv>

      <Contactform />
    </>

  );
}

export default  Greenearth;
