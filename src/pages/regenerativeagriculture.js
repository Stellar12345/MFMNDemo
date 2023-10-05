import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/regenerative/regenerativeagriculture.png';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';
import Quote_img from "../assets/img/double-quote.png";
import Quote_end from "../assets/img/double-quote-end.png";
import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";
function Regenerativeagriculture() {
    
  return (
    <>
      <MyDiv >
        <section className="our-philosophy-banner regenerative-agriculture-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Regenerative Agriculture</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

    <MyDiv className='regenerativeagriculture-section'>
      <section className="re-generative-sec">
        <Container>
          <Row>
            <Col md={6}>
              <MyDiv className="left-title-content">
                <HeadingTwo className="restoration-text">Improving ecosystem with balanced farming methods </HeadingTwo>
              </MyDiv>
              <MyDiv className="left-text-content">
                <PTag>Conventional farming practices are out of balance with surrounding ecosystems which hascaused declines in soil health, water availability, and agricultural output and quality. Regenerative Agriculture works to fix the issues caused by modern farming by restoring andenhancing soil health and biodiversity.</PTag>
                <PTag>Regenerative Agriculture supports soil health through a variety of methods. Soil composition issupported by decreasing or eliminating the number of chemical inputs introduced to the soil.</PTag>
                <PTag>This is done by creating compost from locally available bio-waste and using it to fertilize theplants naturally. Soil health is also supported by using alternative planting methods that reducethe amount of soil disruption. This is done to protect soil root systems which are needed to allow the passage of nutrients and support soil stabilization.</PTag>
                <PTag>When implemented effectively, Regenerative Agriculture practices can increase agricultural yields, reduce farming costs, and increase nutritional value.</PTag>
                 <Link to="/naturalwayoffarming" className="more-btn mb-regenerative-btn">Learn more</Link>

              </MyDiv>
            </Col>
            <Col md={6} className="regener-desc-part">
              <MyDiv className="left-title-content">
           
                <HeadingThree className="living-text">
                <SpanTag><img src={Quote_img} alt="Our Quotes"/></SpanTag><br/>
                    Regenerative Agriculture works to fix the issues caused by modern farming by restoring and enhancing soil health and biodiversity. 
                    <SpanTag className="quote-end-icon"> <img src={Quote_end} alt="Our Quotes"/></SpanTag>
                </HeadingThree>
          
              </MyDiv>
            </Col>
          </Row>
       </Container>
      </section>
      <Contactform />
    </MyDiv>
    </>

  );
}

export default  Regenerativeagriculture;
