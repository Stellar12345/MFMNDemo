import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import AbloutbgImage from '../assets/img/about/about-bg.png';
import Namalwar_img from "../assets/img/Philosophy/namalwar.png";
import Quote_img from "../assets/img/double-quote.png";
import Quote_end from "../assets/img/double-quote-end.png";
import Nammalvar from '../assets/img/about/nammalvar.png';
import Our_mission from '../assets/img/about/our-mission.png';
import Our_vision from '../assets/img/about/our-vision.png';
import customer_logo1 from "../assets/img/Home/customer-logo1.png";
import customer_logo2 from "../assets/img/Home/customer-logo2.png";
import customer_logo3 from "../assets/img/Home/customer-logo3.png";

import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section, HeadingFive } from '../common/Common';
function Aboutus() { 
  useEffect(() => {
     document.body.classList.add('bg-layout')
    return () => {
       document.body.classList.remove('bg-layout')
    }
 }, [])
    return ( 
      <>     
       <MyDiv >
        <section className="our-philosophy-banner" style={{background:`url(${AbloutbgImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">About us</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

        <Section className="about_welcome">
            <MyDiv className="about_inner">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <MyDiv className="about-inner-desc">                            
                        {/* <HeadingThree>Mothers for Mother Nature is a joint initiative between Nanban Foundation and the Vanagam Nammalvar Ecological Foundation.</HeadingThree> */}
                        <HeadingThree>Mothers for Mother Nature, an initiative by the Nanban Foundation, aids farmers in transitioning to natural farming practices and preserving the environment.</HeadingThree>
                         <PTag>Through public-private collaboration, we have partnered with the Vanagam Nammalvar Ecological Foundation, Water Warriors, and Lake Stewards. Together, our focus is on promoting natural farming methods, revitalizing water bodies, and creating lake islands. By providing support, resources, and knowledge, we empower farmers to adopt sustainable agricultural techniques, minimize chemical inputs, and preserve soil fertility. Concurrently, we work towards the restoration of water bodies, improving water quality, increasing ground water level and developing thriving habitats for diverse ecosystems.</PTag>
                         <PTag>Nanban Group of Companies is a collection of varied verticals with a shared mission to treat and view all people as 'friend' and spread financial empowerment. Nanban Foundation is the philanthropic - arm of the Nanban Group of Companies which focuses on giving back and helping those in need. We currently have over 35 active projects throughout the U.S and India and are actively looking to partner with groups and projects that embody grassroots movements and localized climate leadership.</PTag>
                        <p>India is the 2nd highest food-producing country in the world and demonstrates food security leadership with a food import rate of less than 5%. Despite the agricultural prestige, Indian farmers and the 830 million people who live in agricultural regions are suffering. Approximately 30 Indian farmers die by suicide every day.</p>
                        <PTag>Our mission is to empower farmers so that they will reach a place of financial freedom and transition to farming methods that support the earth while producing healthy food for all.</PTag>
                        {/* <HeadingFour>MFMN</HeadingFour> */}
                        
                        {/* <Link to="#" className="more-policies">Know about our policies</Link> */}
                        </MyDiv>
                        </Col>
                        <Col sm={12}  md={6}>
                            <MyDiv className="about-quotes">
                                <SpanTag><img src={Quote_img} alt="Our Quotes"/></SpanTag>
                                <MyDiv className="about-quotes-desc">
                                <PTag>Our goal is to re-build an environment which is toxic free and keeps the life healthy. <SpanTag><img src={Quote_end} alt="Our Quotes"/></SpanTag></PTag>
                                </MyDiv>
                            </MyDiv>
                        </Col>
                    </Row>
                </Container>
            </MyDiv>
        </Section>
        <Section className="our-values-full">
          <MyDiv className="our-values-inner">
            <Container>
              <Row>
                <MyDiv className="our-values-title">
                  <HeadingThree>Our <strong>Values</strong></HeadingThree>
                </MyDiv>
              </Row>
              <Row>
                <Col sm={3} className="our-values-list">
                  <MyDiv className="our-values-inner-items">
                  <HeadingFive>Healthy plants</HeadingFive>
                  <PTag>We believe that environmental stewardship and organic farming practices are essential to supporting and protecting planetary health.</PTag>
                  </MyDiv>
                 
                </Col>
                <Col sm={3} className="our-values-list">
                <MyDiv className="our-values-inner-items">
                  <HeadingFive>Healthy food</HeadingFive>
                  <PTag>In line with the United Nations Sustainable Development Goals (UNSDG), we believe everyone deserves access to healthy and nutrient dense foods and are working to support this aim.</PTag>
                  </MyDiv>
                </Col>
                <Col sm={3}className="our-values-list">
                <MyDiv className="our-values-inner-items">
                  <HeadingFive>Healthy environment</HeadingFive>
                  <PTag>We believe that a healthy environment is key to achieving healthy plants and food and are working to promote environmental stewardship practices to support it.</PTag>
                  </MyDiv>
                </Col>
                <Col sm={3} className="our-values-list">
                <MyDiv className="our-values-inner-items">
                  <HeadingFive>Crop productivity</HeadingFive>
                  <PTag>Restoring ecosystem balance through natural farming practices increases crop productivity and nutrient density which benefits farmers and the communities they support.</PTag>
                  </MyDiv>
                </Col>
              </Row>
              <div id="Know-about-nammalvar"></div>
            </Container>
            </MyDiv>
        </Section>

      <Section className="now-more-part out-line-section-part">
        <MyDiv className="out-line-section-part_inner">
        <Container >
            <Row>
              <MyDiv className="out-line-widget-title">
                <HeadingThree>Know about <strong>Nammalvar</strong></HeadingThree>
              </MyDiv>
            </Row>
         </Container>
         <MyDiv className="out-line-section-content">
            <Container>
                  <Row className="out-line-widget-content">
                      <Col sm={6} className="out-line-desc-part">                      
                          <MyDiv className="out-line-widget-desc">
                            <PTag>Nammalvar (1938-2013) was an Indian green crusader, agricultural scientist, environmental activist, and organic farming leader. He inspired an entire generation of organic farmers and farming leaders to emerge in the southern Indian state of Tamil Nadu.</PTag>
                            <HeadingFour>Nanban Foundation and Nammalvar's Vanagam Collaboration</HeadingFour>
                            <p>Nammalvar is a pioneer in organic farming, Nanban Foundation has partnered with Nammalvar's Vanagam, who will help us identify farmers passionate about organic farming. These farmers will be given financial assistance for three years to support them through their transition from chemical to organic farming. In alignment with our desire to empower women through this project, the funds will be distributed to the lady of each household.</p>
                            <Link to="/naturalwayoffarming" className="more-btn mb-regenerative-btn">Learn more</Link>
                          </MyDiv>
                        </Col>
                        <Col sm={6} className="out-line-desc-img-part">
                          <MyDiv className="out-line-widget-img-part right-line">
                          <img src={Nammalvar} alt="Nammalvar" />
                          </MyDiv>
                      </Col>
                  </Row>
            </Container>
          </MyDiv>
        </MyDiv>
      </Section>



      <section className="our-mission-part out-line-section-part" style={{background:`url(${Our_vision}) no-repeat no-repeat center center / cover`}}>
        <MyDiv className="out-line-section-part_inner">
     
         <MyDiv className="out-line-section-content">
            <Container>
                  <Row className="out-line-widget-content">
                  <Col sm={6} className="out-line-desc-img-part">
                          <MyDiv className="out-line-widget-img-part left-line">
                          <img src={Our_mission} alt="our mission" />
                          </MyDiv>
                      </Col>
                      <Col sm={6} className="out-line-desc-part">                      
                          <MyDiv className="out-line-widget-desc">
                           <HeadingThree>Our <strong>Vision</strong></HeadingThree>
                            <p>We see a future where farmers have financial freedom and work in harmony with nature to supply abundant and healthy produce to all.</p>
                          </MyDiv>
                          <MyDiv className="out-line-widget-desc">
                           <HeadingThree>Our <strong>Mission</strong></HeadingThree>
                            <p>Our mission is to support farmers and empower them towards financial freedom and sustainable farming practices.</p>
                          </MyDiv>
                        </Col>
                    
                  </Row>
            </Container>
          </MyDiv>
        </MyDiv>
      </section>

      <Section className="our-supporter">
    <MyDiv className="our-supporter-innner">
        <Container>
          <Row>
            <MyDiv className="supporter-top-title">
              <HeadingThree>Our <strong>Supporters</strong></HeadingThree>
            </MyDiv>
          </Row>
          <Row className="supporter-itme">
            <Col sm={4} className="supporter-list">
              <MyDiv className="supporter-list-inner">
              <img className="supporter-logo"  src= {customer_logo1} alt="Vanagam" />
              <MyDiv className="supporter-desc">
                <p>Nammalvar Ecological Foundation, Vanagam (https://vanagam.org/) , Karur - an institution founded and nurtured by Nammalvar himself. The current initiative has been made possible by the efforts of the Managing Trustee Thiru. Marutham Kumar from Vanagam.</p>
              </MyDiv>
              </MyDiv>
            </Col>
            <Col sm={4} className="supporter-list">
              <MyDiv className="supporter-list-inner">
              <img className="supporter-logo"  src= {customer_logo2} alt="nanban foundation" />
              <MyDiv className="supporter-desc">
                <p>The word 'nanban' literally means 'friend' in the classic Indian language Tamil. True to its meaning, Nanban's sole vision is helping the community at large attain financial freedom and supporting the underprivileged through socially relevant initiatives.</p>
              </MyDiv>
              </MyDiv>
            </Col>
            <Col sm={4} className="supporter-list">
              <MyDiv className="supporter-list-inner">
              <img className="supporter-logo"  src= {customer_logo3} alt="Vanagam" />
              <MyDiv className="supporter-desc">
                {/* <p>Namsandhai Uzhavar Urpathiyaalar Kuzhu and Aivanam Producer Company, Nilgiris - A producer organization with more than 1000 members and a producer company that brings 10 seed saver's initiatives together is represented in the Multiversity venture by Thiru. Shanmuganathan.</p> */}
                <p>Nanban initiatives and Yunkawasi joined forces to implement a project with indigenous communities in the Andes of Peru, to provide assistance and support for maintaining the traditional agricultural practices that Ancient Peruvians established millenia ago.</p>
              </MyDiv>
              </MyDiv>
            </Col>
            
          </Row>
        </Container>
    </MyDiv>
</Section>


       </>

);
}
export default Aboutus;