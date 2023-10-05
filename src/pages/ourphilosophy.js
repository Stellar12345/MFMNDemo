import React from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Our_img from "../assets/img/Philosophy/our-philosophy-image.jpg";
import Chemical_img from "../assets/img/Philosophy/card-img1.jpg";
import Water_img from "../assets/img/Philosophy/card-img3.jpg";
import Natural_img from "../assets/img/Philosophy/card-img2.png";
import Soil_img from "../assets/img/Philosophy/card-img4.jpg";
import Quote_img from "../assets/img/Philosophy/double-quote.png";
import Quote_end from "../assets/img/double-quote-end.png";
import Namalwar_img from "../assets/img/Philosophy/namalwar.png";
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../common/Common';


import { Link } from "react-router-dom";
function Ourphilosophy() {
  return (
    <>
      <MyDiv>
        <section className="our-philosophy-banner">
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Our Philosophy</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

      <section className="farmer-lead-sec out-line-img-part">
        <Container>
          <Row>
            <Col md={6}>
              <MyDiv className="left-title-content">
                <HeadingTwo className="restoration-text">Nanban foundation embarked on a monumental journey to empower Indian farmers and spread sustainable farming practices that and enable farmers to live a dignified life.
                </HeadingTwo>
              </MyDiv>
              <MyDiv className="left-text-content">
                <p>Our philosophy at Nanban Group of companies is to do more with less and spread the tools and techniques of empowerment. We implement this across all aspects of our Nanban Group of companies and partnerships. We believe that education is a gateway to freedom and self-sufficiency and have shaped our methods of community support around the proverb 'if you give a man a fish he eats for a day, if you teach a man to fish, you feed him for a lifetime'.</p>
                <p>Our Philosophy behind Mothers for Mother Nature is to support grassroots leadership. We believe in empowering farmers to design the systems that they operate in. In-line with this belief, we actively partner with community members and localized climate leadership to shape and develop assistance programs that target the specific needs of the community.</p>
                <p>We believe that all human beings should have access to nutritious and healthy food and that farming methods should replenish and not deplete mother earth and work daily on our mission to spread the practices of regenerative agriculture and organic farming practices.</p>
                {/* <p>Our philosophy is to do more with less and spread the tools and techniques of empowerment. We implement this across all aspects of our enterprise and partnerships.</p>
                <p>Our Philosophy behind Mothers for Mother Nature is to support the grassroots leadership. We believe in empowering farmers to design the systems that they operate in.</p>
                <p>We believe that all human beings should have access to nutritious and healthy food and that farming methods should replenish and not deplete mother earth.</p> */}
             
                <MyDiv className="left-image-part-philosophy">
                <img src={Our_img} alt="Our-philosophy-image" class="img-fluid image-ph" />
                </MyDiv>




              </MyDiv>
            </Col>
            <Col md={6} className="producing-img">
              <MyDiv className="left-title-content">
                <span className="img-card">
                  <img src={Quote_img} alt="our-philosophy"/>
                </span>
                <HeadingThree className="living-text">
                 Farming is not a way of producing crops to make money. It is a way of living, and a way of living that is possible even in the 21st century 
                 <SpanTag className="quote-end-icon"> <img src={Quote_end} alt="our-philosophy"/></SpanTag>
                </HeadingThree>
                <p className="living-cote-quotes">-Nammalvar</p>
              </MyDiv>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <MyDiv className="restoration organic-group">
          <Container>
                <Row>
                <Col md={12}>
                  <HeadingTwo className="restoration-text">Nammalvar - Messiah of  <strong>Organic Revolution</strong></HeadingTwo>
                  </Col>
                </Row>
                <Row>
                <Col md={6} className={"restoration-imges m-0"}>
                <img src={Namalwar_img} className="img-responsive" alt="restoration" />
                </Col>
                <Col md={6} className={"restoration-desc"}>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua 
                    dolor do amet sint. </p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua 
                    dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud 
                    amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint nostrud amet. </p>   
                  <Link href="javascript.void(0)" className="more-btn">Know more</Link>
                 </Col>
               

                </Row>
          </Container>
      </MyDiv> */}

      {/*<section className="organic-group">
        <Container>
          <Row>
            <Col md={12}>
              <MyDiv className="title-text-content">
                <HeadingTwo className="restoration-text">Namalwar - Messiah of  <strong>Organic Revolution</strong></HeadingTwo>
              </MyDiv>
            </Col>

            <Col md={6}>
              <MyDiv className="hero-left-imgs">
                
                  <img src={Namalwar_img} alt="namalwar"/>
                
              </MyDiv>
              
            </Col>
                
            <Col md={6} className="organic-content">
              <MyDiv className="right-title-content">
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua 
                    dolor do amet sint. </p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua 
                    dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud 
                    amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint nostrud amet. </p>   
              </MyDiv>
                  
              <MyDiv className="btn-items">
                <a href="#">Know More</a>
              </MyDiv>
            </Col>
          </Row>
        </Container>
  </section>*/}
        
      <section className="principles-groups">
        <Container>
          <Row>
            <Col md={12} className="public-wrapper">
              <MyDiv className="body-content">
                <HeadingTwo className="title-text">
                Nanbans<strong> Farming Principles</strong>
                </HeadingTwo>
                <PTag className='principle-content'>Nanban is working to empower farmers and spread the tools of alternative farming methods that support the planet. We believe in and support the implementation of regenerative agriculture and organic farming practices. We believe that prioritizing land health and farmer prosperity leads to better outcomes, yields, and community health. Please see our specific farming principles listed below.</PTag>
              </MyDiv>
            </Col>

            <Col md={3} className="principles-box-groups">
              <MyDiv className="card-content">
                <span className="img-cards">
                  <img src={Chemical_img} alt="our-philosophy"/>
                </span>
                <HeadingFour className="restoration-text">Chemical free fertilizer</HeadingFour>
                <PTag>We promote the use of natural fertilization methods to reduce the amount of chemical inputs introduced to the soil</PTag>
              </MyDiv>
            </Col>

            <Col md={3} className="principles-box-groups">
              <MyDiv className="card-content">
                <span className="img-cards">
                  <img src={Natural_img} alt="our-philosophy"/>
                </span>
                <HeadingFour className="restoration-text">Natural ploughing</HeadingFour>
                <PTag>We promote natural ploughing methods to reduce soil disruption and increase soil integrity</PTag>
              </MyDiv>
            </Col>

            <Col md={3} className="principles-box-groups">
              <MyDiv className="card-content">
                <span className="img-cards">
                  <img src={Water_img} alt="our-philosophy"/>
                </span>
                <HeadingFour className="restoration-text">Water Conservation</HeadingFour>
                <PTag>We promote water conservation practices to reduce agricultural water consumption</PTag>
              </MyDiv>
            </Col>

            <Col md={3} className="principles-box-groups">
              <MyDiv className="card-content">
                <span className="img-cards">
                <img src={Soil_img} alt="our-philosophy"/>
                </span>
                <HeadingFour className="restoration-text">Soil Nourishment</HeadingFour>
                <PTag>We promote the practice of turning organic waste into natural fertilizer to boost soil health and reduce waste</PTag>
              </MyDiv>
            </Col>
          </Row>
        </Container>
      </section>
    </>

  );
}

export default Ourphilosophy;
