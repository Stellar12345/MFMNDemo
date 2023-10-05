import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/aroundglobe/aroundtheglobe.jpg';
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

import Green_earth_01 from '../assets/img/aroundglobe/green-earth-01.jpg';
import Green_earth_02 from '../assets/img/aroundglobe/green-earth-02.jpg';


function Healthierfood() {
  const onInit = () => {
    //console.log('lightGallery has been initialized');
    
  };
  const MfmnData = [{
    "Mfmnlist": [
      {
        "id":1,
        "title":"schools planting",
        "lable": "mfmn-around-img1",
        "images":"mfmn-around-img1.jpg"
      },
      {
        "id":2,
        "title":"schools planting2",
        "lable": "mfmn-around-img1",
        "images":"mfmn-around-img2.jpg"
      },
      {
        "id":3,
        "title":"schools planting3",
        "lable": "mfmn-around-img3",
        "images":"mfmn-around-img3.jpg"
      },
      {
        "id":4,
        "title":"schools planting4",
        "lable": "mfmn-around-img4",
        "images":"mfmn-around-img4.jpg"
      },
      {
        "id":5,
        "title":"schools planting5",
        "lable": "mfmn-around-img5",
        "images":"mfmn-around-img5.jpg"
      },
      {
        "id":6,
        "title":"schools planting6",
        "lable": "mfmn-around-img6",
        "images":"mfmn-around-img6.jpg"
      },
      {
        "id":7,
        "title":"schools planting7",
        "lable": "mfmn-around-img7",
        "images":"mfmn-around-img7.jpg"
      },
      {
        "id":8,
        "title":"schools planting8",
        "lable": "mfmn-around-img8",
        "images":"mfmn-around-img8.jpg"
      },
      {
        "id":9,
        "title":"schools planting9",
        "lable": "mfmn-around-img9",
        "images":"mfmn-around-img9.jpg"
      },
      {
        "id":10,
        "title":"schools planting10",
        "lable": "mfmn-around-img10",
        "images":"mfmn-around-img10.jpg"
      }

     
    ]
  }]

  return (

    <>
      <MyDiv >
        <section className="our-philosophy-banner Healthier-food-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">MFMN Around the Globe</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

      <MyDiv className='healthierfood-section'>
        <Container>

        
          <Row className="United-Nations-section">
            <HeadingThree>MFMN Around the Globe</HeadingThree>
            
               <Col md={12} lg={6} sm={12} className=' healthier-image col-12'>
               <MyDiv><img src={nations} className="image" alt="image" /></MyDiv>
                    
                </Col>
            
                
                <Col md={12} lg={6} sm={12} className=' healthier-content-right col-12  healthier-first-part'>
                <HeadingFour className="sub-heading">Project Summary</HeadingFour>
                <PTag>
                Management and use of agrobiodiversity for sustainable development and landscape conservation in the Peruvian Andes. <br /> <strong>Start Date: &nbsp;1 April 2022 </strong><br />
 <strong>End Date:&nbsp; &nbsp;30 March 2025</strong> <br />In the context of the current global climate and biodiversity emergencies, key actions are required to mitigate the crisis and allow us to enjoy the benefits that nature provides humanity,
like productive soils, and clean water and air.</PTag>
                <PTag > The Andes Cordillera is home to some of the most consumed superfoods, like quinoa, or some of the key staples in our everyday life, like potatoes. With over 3000 varieties of potatoes, the
agrobiodiversity along the Peruvian Andes is not only rich, but also, still not completely unveiled. Moreover, the traditional agricultural practices that are responsible for the great diversity we see today, are at risk.
             </PTag>
            
              
              </Col>
            </Row>
            <Row className="">
            <Col md={12} lg={12} sm={12} className='healthier-content-right  healthier-second'>
            <PTag>Nanban Initiatives and Yunkawasi joined forces to implement a project with indigenous communities in the Andes of Peru, to provide assistance and support for maintaining the
traditional agricultural practices that Ancient Peruvians established millenia ago, focusing in two key vegetables: native potatoes and mashua, tubercules known for the amount of nutrients
they harbor. This project seeks to produce items based in these tubercules, like energy bars or brownies, that will not only provide a better income to these communities, but also allow a
greater public to enjoy the benefits of the next superfoods.
</PTag>
            <PTag>This initiative will benefit families from the Quechua Wanka communities of Huancamachay and Huanuco, and is part of a larger project that seeks to develop a territorial management model
that maintains nature while providing economic development and wellbeing to families, implemented by a consortium of different organizations, the Regional Government of Junin,
Peru's National Protected Area Service (SERNANP), Peru's Wildlife and Forestry Service (SERFOR), Rainforest Trust and Andes Amazon Fund.</PTag>
<HeadingThree className="contact-inner-title">First-year Results</HeadingThree>  
<PTag>We are currently in the first year of implementation of this project, which began with a diagnosis of agricultural activities in the communities involved, to learn about the knowledge
and ancestral traditions related to planting and harvesting tubercules, in addition to the roles of men and women in this process.</PTag> 
  <PTag>From this, we have been working hand in hand with the communities and state allies of Peru in strengthening the capacities of producers from a conservation and sustainability approach,
through field schools on topics such as soil improvement, conservation of water sources and agrobiodiversity. These field schools allow us to train future women members of the local
mashua and native potato associations.</PTag>
  <PTag>Within the framework of these trainings, mashua seeds were delivered to each of the beneficiary producers, so that they can apply what they have learned in their individual plots.</PTag>
        <PTag>With the aim of obtaining new knowledge and learning about similar experiences, the men and women producers from both communities participated in internships in regional institutions
that are already working on the transformation of mashua, and also attended the largest sustainability event in the Andean Amazon landscape in Peru, the ExpoAmazónica, where they
continued learning about the alternatives and opportunities in planting Andean tubercules.</PTag>    
          
          
          </Col>
          <br />
            </Row>
          
        </Container>
     
      </MyDiv>
      <MyDiv className="mfmn-around-the-globe-product">
      <Container>
        <Row>
        {/* <OurGallery/> */}
        </Row>
      {MfmnData.map((item, index) => (
        <Row key={index}> 
        <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >
        {item.Mfmnlist.map((item, index) => (
         <Col md={3} lg={3} sm={6} className='mfmn-around-list' key={index} data-toggle="lightbox"
         data-gallery="example-gallery" data-src={require('../assets/img/aroundglobe/' + item.images)}>
            <MyDiv className="mfmn-around-items"  key={index}  >
              <img src={require('../assets/img/aroundglobe/' + item.images)} className="mfmn-around-img" alt={item.lable} />
              {/* <SpanTag className="mfmn-around-title">{item.title}</SpanTag> */}
            </MyDiv>
        </Col>
        
         ))}
         </LightGallery>
        </Row>
        ))}
{/* 
<Row>
  <Col  className="healthier-content-right" md={12}>
  <HeadingThree className="contact-inner-title"> Green Earth</HeadingThree>
  <MyDiv>
  <PTag>Green Earth, a global movement brought to you by The Rise, Nanban Foundation’s Mothers for Mothers Nature. Our mission is to strengthen and advance contemporary global priorities in various sectors, including Food Security, Environment & Biodiversity, Water Security, Clean Energy, Sustainable agriculture, Green Technologies, and Environmental and Social Governance.</PTag>
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
          </Row> */}
      </Container>
      </MyDiv>

      <Contactform />
    </>

  );
}

export default  Healthierfood;
