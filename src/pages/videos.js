import React from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../common/Common';
import OurGallery from "../pages/gallery/our-gallery-data";
import MyBackgroundImage from '../assets/img/gallery/video-banner.jpg';
import OurVideo from "../pages/gallery/our-video-gallery-data";
import { Link } from "react-router-dom";
function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
   
  return (
    <>
    <MyDiv>
    <section className="our-philosophy-banner regenerative-agriculture-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Videos</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
    
    </MyDiv>

    <Section className="gallery-imgs-sec">
        <Container>
            <Row>
                <Col md={12}>
                    {/* <Row>
                        <Col md={6}>
                            <HeadingTwo className="gallery-content">
                                Check out our wonderful moments make our tomorrow
                            </HeadingTwo>
                            <p> 
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit </p> 
                        </Col>
                    </Row> */}

                    {/* <Row>
                    <OurGallery/>
                    </Row> */}
<Row>
  <OurVideo/>
</Row>
                </Col>
            </Row>
        </Container>
    </Section>
    </>

  );
}

export default Gallery;