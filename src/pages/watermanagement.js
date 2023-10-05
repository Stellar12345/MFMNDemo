import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/watermanagement/water-banner.png';
import handshake from '../assets/img/watermanagement/handimg.jpg';
import Quote_img from "../assets/img/double-quote.png";
import Quote_end from "../assets/img/double-quote-end.png";
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';

import Contactform from "../common/contactform.js";

import Lakeprojects from "../assets/img/watermanagement/mfmn-lake-projects.jpg";

import Lackprojectinfo from "../pages/lack-project/lack-project-new";
import Lack_project_Normal from "../pages/lack-project/lack-project-normal-layout";
import Lack_project_Normals from "../pages/lack-project/lack-bottom-project";

import Lackprojectacc from "../pages/lack-project/lack-project-acc";
import Lakeprojects_v9 from '../assets/img/watermanagement/video/MFMN-Video-9.mp4';

import Lackprojectbio from "../pages/lack-project/lake-projects-bio";

import Lakeprojectvideos from "../pages/lack-project/lack-project-videos";

import { Link } from "react-router-dom";
function Watermanagement() {
    return (
    <>
      <MyDiv >
        <section className="our-philosophy-banner water-management-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Water Management</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

    <MyDiv className='watermanagement-section'>

      <section className="water-lead-sec">
        <Container>
          <Row>
            <Col md={6}>
              <MyDiv className="left-title-content">
                <HeadingTwo className="restoration-text">Problem with water system maintenance in india have caused widespread community and agriculture water shortages </HeadingTwo>
              </MyDiv>
              <MyDiv className="left-text-content">
                <PTag>Problems with water system maintenance in India have caused widespread community andagricultural water shortages. When flooding from heavy rain enters water collection systems, dirtand debris pile-up which causes disruptions to water flow and decreases water quality. In some cases, the sediment buildup is so extreme that the water body dries up completely. Nanbanpartnered with Nimal Raghavan to combat this issue.</PTag>
                <PTag>Nimal has been initiating aquatic restoration through the process of desilting. This is when siltand sediment are pumped out of water bodies to support water flow and capacity. To strengthenthe integrity of water body barriers, over 1.8 million native trees were planted surrounding the water bodies to increase the stability and strength of the foundation. By using these approaches, Nimal has restored 133 water bodies which has improved the lives of millions.</PTag>
                
              </MyDiv>
            </Col>
            <Col md={6} className="living-desc-part">
              <MyDiv className="left-title-content">
                <HeadingThree className="living-text">
                <SpanTag><img src={Quote_img} alt="Our Quotes"/></SpanTag><br/>
                 By using these approaches, Nimal has restored 158 water bodies which has improved the lives of millions. 
                 <SpanTag className="quote-end-icon"> <img src={Quote_end} alt="Our Quotes"/></SpanTag>
                </HeadingThree>
              </MyDiv>
            </Col>
          </Row>
       </Container>
      </section>
      <section className="water-manage-sec">
        <Container>
            <Row>
                <Col md={6} lg={6} sm={12}  className=' image-left col-12'>
                    <img src={handshake} className="image" alt="image" />
               </Col>
               <Col md={6} lg={6} sm={12} className=' water-content-right col-12'>
                   <PTag>Nanban partnered with Nimal in 2022 to provide the financial support needed to allow this restoration work to spread across india. the mission behind this work is restore conditions so that no farmer in india will suffer due to water constraints.</PTag>
                <Row>
                <Col md={10} lg={10} sm={12}  className='col-12'>  
                   <MyDiv className="acc-lack-video-tmes">                      
                      <video controls class="embed-responsive-item">
                      <source  autostart="false" src={Lakeprojects_v9} type="video/mp4"/>
                      </video>
                 </MyDiv>
                </Col>
                </Row>
                </Col>
            </Row>
            
        </Container>
     
      </section>
      

    <section className="lake-projects-content">
    <Container>
      <Row>
      <Col md={12} className="pro-lake-title">
            <HeadingThree className="pro-lake-title-h3">Lake Projects</HeadingThree>
          </Col>
      </Row>
      
      <MyDiv>
        <Lack_project_Normal/>
        </MyDiv>
        <MyDiv>
    <Lackprojectacc/>
    </MyDiv>
       <MyDiv>
        <Lack_project_Normals/>
        </MyDiv>
    
        {/* <Lackprojectbio/> */}

      
       {/* <Lackprojectinfo/> */}
       {/* <Row>
        <MyDiv className="lake-projects-location">
        <img src={Lakeprojects} alt="MFMN-Lake-projects-completed-in-India" />
        </MyDiv>
      </Row> */}
      </Container>
    </section>

    {/* <section className="lake-pro-gallery">
    <Container>
    
   </Container>
    </section> */}
      {/* <section className="pro-video-info">
      <Container>
        <Row>
          <Col md={12} className="pro-video-title">
            <HeadingThree className="pro-video-title-h3">Lake project videos</HeadingThree>
          </Col>
        </Row>
       
          <Lakeprojectvideos/>
      
      </Container>
      
      </section> */}

      
      <Contactform />
    </MyDiv>
    </>

  );
}

export default  Watermanagement;
