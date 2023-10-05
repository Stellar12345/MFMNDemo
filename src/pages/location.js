import React from "react";
import "../assets/css/location.css";
import iconImage from "../assets/img/location/location-icon.png";
import MyBackgroundImage from '../assets/img/location/location-img.png';
/*
import { FaLocation } from "react-icons/FontAwesomeIcon/fa-location-dot";
import { ImLocation2 } from 'react-icons/im';*/
import { Row, Col, Container } from "react-bootstrap";
import { MyDiv,  HeadingOne,  HeadingThree,  PTag,
  SpanTag,
  HeadingFour,
  HeadingTwo,
  HeadingFive,
  Section,
} from "../common/Common";
import Contactform from "../common/contactform.js";
import Ourlocationmap from "../pages/shared/our-location-map";

import { Link } from "react-router-dom";
function Location() {
  return (
    <>

< MyDiv >
        <section className="our-philosophy-banner Location-mfmn"  style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Locations</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

      <MyDiv>
        <Section className="locations-sec">
          <Container>
            <Row>
              <Col xs={12}  md={6} sm={12} className="Loction-info">
                <HeadingThree>
                  Join us as we engage with farmers and work together to make a
                  difference
                </HeadingThree>
                <div id="tamilnadu"></div>  
                <h4>TAMIL NADU</h4>
                <PTag>
                  We are working in Tamil Nadu to empower farmers and support
                  their transition to greener farming practices. For more
                  information and updates about our work in Tamil Nadu please
                  follow our blog postings.
                </PTag>
                <h4 id="odisha">ODISHA</h4>
                <PTag>
                  We are working in Odisha to empower farmers and support their
                  transition to greener farming practices. For more information
                  and updates about our work in Odisha please follow our blog
                  postings.
                </PTag>
                <h4 id="yunkawasi">YUNKAWASI</h4>
                <PTag>
                  We are working in Yunkawasi, Peru to empower farmers and
                  support their transition to greener farming practices. For
                  more information and updates about our work in Yunkawasi Peru
                  please follow our blog postings.
                </PTag>

                <h4 id="Usa">USA</h4>
                <PTag>
                We are working in USA to empower farmers and support their transition to greener farming practices. For more information and updates about our work in USA, please follow our blog postings.
                </PTag>

              </Col>  
              <Col md={12} lg={6}>
            {/* <MyDiv className="right-part-top-img mt-3">
            <MyDiv className="right-part-inner-image">
              <img src={Locationimg} alt="Locationimg" />
              </MyDiv>
              </MyDiv> */}
            </Col>            
            </Row>

            <Row>
              <Col xs={12} md={3} lg={3}>
                <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                 </MyDiv>
                  <HeadingFour>INDIA</HeadingFour>
                </SpanTag>
                <PTag>TAMIL NADU</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                  </MyDiv>
                  <HeadingFour>INDIA</HeadingFour>
                </SpanTag>
                <PTag>ODISHA</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                  </MyDiv>
                  <HeadingFour>PERU</HeadingFour>
                </SpanTag>
                <PTag>YUNKAWASI</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                  </MyDiv>
                  <HeadingFour>USA</HeadingFour>
                </SpanTag>
                <PTag> &nbsp;</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
               </MyDiv>
                  <HeadingFour>Kenya</HeadingFour>
                </SpanTag>
                <PTag>Kenya</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                  </MyDiv>
                  <HeadingFour>INDIA</HeadingFour>
                </SpanTag>
                <PTag> Haryana</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                 </MyDiv>
                  <HeadingFour>INDIA</HeadingFour>
                </SpanTag>
                <PTag> Karnataka</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                  </MyDiv>
                  <HeadingFour>INDIA</HeadingFour>
                </SpanTag>
                <PTag> Gujarat</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                  </MyDiv>
                  <HeadingFour>INDIA</HeadingFour>
                </SpanTag>
                <PTag> Jammu & Kashmir</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                  </MyDiv>
                  <HeadingFour>INDIA</HeadingFour>
                </SpanTag>
                <PTag>Uttarpradesh</PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                  <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                  </MyDiv>
                  <HeadingFour>INDIA</HeadingFour>
                </SpanTag>
                <PTag>Maharastra </PTag>
                </MyDiv>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <MyDiv className="LocationName">
                <SpanTag className="Location-info">
                  <MyDiv>
                  <img src={iconImage} className="iconStyle" alt="icon" />
                  </MyDiv>
                  <HeadingFour>INDIA</HeadingFour>
                </SpanTag>
                <PTag>Andhrapradesh</PTag>
                </MyDiv>
              </Col>
            </Row>
          </Container>
        </Section>
    <MyDiv className="our-locations-full">
        <Ourlocationmap/>
        </MyDiv>
        <Contactform />
      </MyDiv>
    </>
  );
}

export default Location;
