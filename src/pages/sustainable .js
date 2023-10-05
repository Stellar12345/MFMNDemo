import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Banner from "../assets/img/banner.png";
import contact from "../assets/img/Contact/hand.jpg";
import { Row , Form , Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../common/Common';
import { FaEnvelope, FaLocationArrow, FaMap, FaMapMarked, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, IconName } from "react-icons/fa";

import Contactform from "../common/contactform.js";
import Ourlocationmap from "../pages/shared/our-location-map";
const Contact = () => {

 
  useEffect(() => {
    document.body.classList.add('bg-layout')
  
    return () => {
      document.body.classList.remove('bg-layout')
    }
  }, [])
    return ( 
        <>
        <MyDiv className='contactpage'>
        <MyDiv >
        <section className="our-philosophy-banner contactbanner">
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Contact Us</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

        <section className="info-sec1 contact-bg">
        <Container>
            {/* <Row className='info-sec1-row'>
                <Col xs={12} md={8}  className='col1'>
                <HeadingThree className="contact-inner-title">Join Us Content </HeadingThree>

                <PTag className='my-4'>
                   Join us as we seek to liberate and empower farmers across the globe. We are always looking to partner with organizations who share our values for a healthy environment and regenerative farming and who embody grassroots leadership.
                </PTag>
                <PTag className='my-4'>
                  We believe that all human beings should have access to healthy and nutritious food and are seeking to partner with those who share this vision.
                </PTag>
                </Col>
                <Col xs={12} md={4} className='infobox'>
                    <img src={contact} className="img-fluid" alt="image" />
                </Col>
            </Row> */}


          <Row className='align-items-center info-sec1-row'>
                <Col xs={12} md={12}  className=''>
                <HeadingThree className="contact-inner-title">Mothers For Mother Nature Around the Globe </HeadingThree>

                <PTag className='my-4'>
                Management and use of agrobiodiversity for sustainable development and landscape conservation in the Peruvian Andes <strong>Start Date: 1 April 2022</strong>
<strong> End Date: 30 March 2025</strong> In the context of the current global climate and biodiversity emergencies, key actions are required to mitigate the crisis and allow us to enjoy the benefits that nature provides humanity,
like productive soils, and clean water and air.</PTag>
                <PTag className='my-4'> The Andes Cordillera is home to some of the most consumed superfoods, like quinoa, or some of the key staples in our everyday life, like potatoes. With over 3000 varieties of potatoes, the
agrobiodiversity along the Peruvian Andes is not only rich, but also, still not completely unveiled. Moreover, the traditional agricultural practices that are responsible for the great diversity we see today, are at risk.
             </PTag>
             <PTag>Nanban Enterprises and Yunkawasi joined forces to implement a project with indigenous communities in the Andes of Peru, to provide assistance and support for maintaining the
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
                {/* <Col xs={12} md={4} className='infobox'>
                    <img src={contact} className="img-fluid" alt="image" />
                </Col> */}
            </Row>
        </Container>
        </section>
        <Contactform />
        <Ourlocationmap/>
    
        </MyDiv>
        </>
     );
}
 
export default Contact;