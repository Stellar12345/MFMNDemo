import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import earth from '../assets/img/Home/customer-logo1.png';
import nanban from '../assets/img/Home/customer-logo2.png';
import aivanam from '../assets/img/Home/customer-logo3.png';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';
import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";
import Howweworks from '../assets/img/howwework/howwework.jpg';
function Howwework() {
  useEffect(() => {
    document.body.classList.add('bg-layout')  
    return () => {
      document.body.classList.remove('bg-layout')
    }
    }, [])
  return (
    <>
      <MyDiv >
        <section className="our-philosophy-banner how-we-work-banner">
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">How We Work</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

      <MyDiv className='howwework-section right-img-relative-part'>
      <MyDiv className="howwework-section-mb">
        <Container className='work-group-sec'>
          <Row>
            <Col md={12} lg={6} sm={12} className=' text-content-left col-12'>
              <HeadingTwo>We believe in supporting grassroots climate leadership.</HeadingTwo>
              <PTag>We believe in supporting grassroots climate leadership. We seek out and work directly with groups and organizations that are working to improve the communities and systems around them.</PTag>
            </Col>
            
            <Col md={12} lg={6}>
            <MyDiv className="right-part-top-img">
            <MyDiv className="right-part-inner-image">
              <img src={Howweworks} alt="Farming needs" />
              </MyDiv>
              </MyDiv>
            </Col>
          </Row>
          </Container>
          </MyDiv>
          <Container className=''>
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
export default Howwework;
