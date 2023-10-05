import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MyDiv, PTag } from '../../common/Common';
import Accordion from 'react-bootstrap/Accordion';
// import Lakeprojects1 from "../../assets/img/watermanagement/lake-projects/lake-projects-01.jpg";
import lakeprojectsdata from "./lake-projects-content.json";


import Lakeprojects1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-01.jpg';
import Lakeprojects_v1 from '../../assets/img/watermanagement/video/MFMN-Video-1.mp4';



import Lakeprojects2_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-02-1.jpg';
import Lakeprojects2_2 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-02-2.jpg';
import Lakeprojects2_3 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-02-3.jpg';

import Lakeprojects_v2 from '../../assets/img/watermanagement/video/MFMN-Video-2.mp4';

//2 popup images

import Lakeprojects2_1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-02-1-popup.jpg';
import Lakeprojects2_2_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-02-2-popup.jpg';
import Lakeprojects2_3_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-02-3-popup.jpg';

//end popup


import Lakeprojects3_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-03-1.jpg';
import Lakeprojects3_2 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-03-2.jpg';
import Lakeprojects3_3 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-03-3.jpg';
import Lakeprojects3_4 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-03-4.jpg';
import Lakeprojects3_5 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-03-5.jpg';
import Lakeprojects3_6 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-03-6.jpg';
import Lakeprojects3_7 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-03-7.jpg';


//popup images
import Lakeprojects3_1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-03-1-popup.jpg';
import Lakeprojects3_2_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-03-2-popup.jpg';
import Lakeprojects3_3_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-03-3-popup.jpg';
import Lakeprojects3_4_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-03-4-popup.jpg';
import Lakeprojects3_5_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-03-5-popup.jpg';
import Lakeprojects3_6_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-03-6-popup.jpg';
import Lakeprojects3_7_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-03-7-popup.jpg';
//end popup

import Lakeprojects4 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-04.jpg';

import Lakeprojects4_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-04-1.jpg';
import Lakeprojects4_2 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-04-2.jpg';

import Lakeprojects_v4 from '../../assets/img/watermanagement/video/MFMN-Video-4.mp4';
import Lakeprojects_v4_1 from '../../assets/img/watermanagement/video/MFMN-Video-4-1.mp4';

//popup images

import Lakeprojects4_1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-04-1-popup.jpg';
import Lakeprojects4_2_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-04-2-popup.jpg';
//popup end


import Lakeprojects5_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-05-1.jpg';
import Lakeprojects5_2 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-05-2.jpg';
import Lakeprojects5_3 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-05-3.jpg';
import Lakeprojects5_4 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-05-4.jpg';


import Lakeprojects_v5 from '../../assets/img/watermanagement/video/MFMN-Video-5.mp4';

//popup images

import Lakeprojects5_1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-05-1-popup.jpg';
import Lakeprojects5_2_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-05-2-popup.jpg';
import Lakeprojects5_3_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-05-3-popup.jpg';
import Lakeprojects5_4_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-05-4-popup.jpg';

//popup end

import Lakeprojects6 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-06.jpg';

//popup images
import Lakeprojects6_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-06-popup.jpg';
//popup end

import Lakeprojects7 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-07.jpg';

//popup images
import Lakeprojects7_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-07-popup.jpg';
//popup end


import Lakeprojects8_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-08-1.jpg';
import Lakeprojects8_2 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-08-2.jpg';
import Lakeprojects8_3 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-08-3.jpg';
import Lakeprojects8_4 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-08-4.jpg';
import Lakeprojects8_5 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-08-5.jpg';

import Lakeprojects_8 from '../../assets/img/watermanagement/video/MFMN-Video-8.mp4';


//popup images
import Lakeprojects8_1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-08-1-popup.jpg';
import Lakeprojects8_2_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-08-2-popup.jpg';
//popup end

import Lakeprojects9_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-09-1.jpg';
import Lakeprojects9_2 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-09-2.jpg';
import Lakeprojects9_3 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-09-3.jpg';
import Lakeprojects9_4 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-09-4.jpg';
import Lakeprojects9_5 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-09-5.jpg';
import Lakeprojects9_6 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-09-6.jpg';
import Lakeprojects9_7 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-09-7.jpg';
import Lakeprojects9_8 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-09-8.jpg';

import Lakeprojects_v9 from '../../assets/img/watermanagement/video/MFMN-Video-9.mp4';
import Lakeprojects_v9_1 from '../../assets/img/watermanagement/video/MFMN-Video-9-1.mp4';


import Lakeprojects10_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-10-1.jpg';

import Lakeprojects11_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-11-1.jpg';

import Lakeprojects12 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-12.jpg';
/***/
import Lakeprojects12_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-12-popup.jpg';
/***/


import Lakeprojects13 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-13.jpg';
import Lakeprojects13_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-13-1.jpg';
import Lakeprojects13_2 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-13-2.jpg';
import Lakeprojects13_3 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-13-3.jpg';
/***/
import Lakeprojects13_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-13-popup.jpg';
import Lakeprojects13_1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-13-1-popup.jpg';
import Lakeprojects13_2_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-13-2-popup.jpg';
import Lakeprojects13_3_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-13-3-popup.jpg';
/***/



import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


function Lakeprojectaccpreviousproject() {
  const onInit = () => {
    //console.log('lightGallery has been initialized');
    
  };
  const [lakeprojectcon, setlakepro] = useState([]);

  useEffect(() => {
    setlakepro(lakeprojectsdata);
  }, []);

  return (
    <>
    <MyDiv className="lack-acc-pro">
     <Accordion defaultActiveKey="0">
       <MyDiv className="project-title-lake">
      <h3>Previous Projects of Nimal</h3>
      </MyDiv>
      <Accordion.Item eventKey="1">
        <Accordion.Header  className="acc-lack-pro-title">Veeraiyankottai Lake</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag>One of the key advantages of lake rehabilitation is that it helps increase the groundwater level. Additionally, it controls soil erosion, thus reducing the risk of floods. Lakes also act as natural reservoirs, increasing the storage capacity of water. They contribute to maintaining the quality of fresh water and support natural biodiversity by providing a habitat for flora and fauna.</PTag>
    <Row className="acc-full-width-lack">
    <Col md={12} lg={12} sm={12} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects2_1_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects2_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects2_2_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects2_2} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects2_3_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects2_3} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
         </LightGallery>
    </Col>
    <Col md={4} lg={4} sm={6} className="lack-vidoe-part-info tab-video-pading">    
      <MyDiv className="acc-lack-video-tmes">                      
            <video controls class="embed-responsive-item">
					  <source  autostart="false" src={Lakeprojects_v2} type="video/mp4"/>
					  </video>
  </MyDiv>
    </Col>
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header  className="acc-lack-pro-title">Prathabaramapuram & Sethu Lakes</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag>The process of rehabilitating lakes involves various activities such as desiltation, constructing sturdy boundaries, planting native trees, creating lake islands, and restoring the source channel. Some notable projects include the restoration of the Prathabaramapuram Lake, which saw its capacity increase from 2 crore liters to 120 crore liters, and the revival of the Sethu Lake, which once suffered from saltwater intrusion.</PTag>
    <Row className="acc-full-width-lack">
    <Col md={12} lg={12} sm={12} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects4_1_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects4_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects4_2_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects4_2} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className="lack-vidoe-part-info tab-video-pading">    
      <MyDiv className="acc-lack-video-tmes">                      
            <video controls class="embed-responsive-item">
					  <source  autostart="false" src={Lakeprojects_v4_1} type="video/mp4"/>
					  </video>
  </MyDiv>
    </Col>
         </LightGallery>
    </Col>
    
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header  className="acc-lack-pro-title">Thamarai & Siva Lakes</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag>Other successes include the rejuvenation of Thamarai Lake and Siva Lake, both situated just 500 meters apart. While Thamarai Lake was well maintained with proper inlet and outlet channels, Siva Lake had been dry for the past 60 years. However, due to the efforts of the initiative, Siva Lake has been brought "back to life."</PTag>
    <Row className="acc-full-width-lack">
    <Col md={12} lg={12} sm={12} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects5_1_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects5_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects5_2_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects5_2} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects5_3_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects5_3} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects5_4_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects5_4} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        {/* <Col md={4} lg={4} sm={4} className="lack-vidoe-part-info">    
      <MyDiv className="acc-lack-video-tmes">                      
            addd
  </MyDiv>
    </Col> */}
         </LightGallery>
    </Col>
    
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="6">
        <Accordion.Header  className="acc-lack-pro-title">Manora Lake</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag></PTag>
    <Row className="acc-full-width-lack">
    <Col md={4} lg={4} sm={6} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={12} lg={12} sm={12} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects6_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects6} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>    
      
         </LightGallery>
    </Col>
    <Col md={4} lg={4} sm={6} className="lack-vidoe-part-info">    
      <MyDiv className="acc-lack-video-tmes">                      
            <video controls class="embed-responsive-item">
					  <source  autostart="false" src={Lakeprojects_v5} type="video/mp4"/>
					  </video>
  </MyDiv>
    </Col>
    
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header  className="acc-lack-pro-title">Marungapallam Lake</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag></PTag>
    <Row className="acc-full-width-lack">
    <Col md={12} lg={12} sm={12} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects7_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects7} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>    
      
         </LightGallery>
    </Col>
    
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header  className="acc-lack-pro-title">Nadiyakulam Lake</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag></PTag>
    <Row className="acc-full-width-lack">
    <Col md={4} lg={4} sm={6} className="lack-part-info">
    <Col md={12} lg={12} sm={12} className="lack-vidoe-part-info">    
      <MyDiv className="acc-lack-video-tmes">                      
            <video controls class="embed-responsive-item">
					  <source  autostart="false" src={Lakeprojects_8} type="video/mp4"/>
					  </video>
  </MyDiv>
    </Col>
    </Col>    
   
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header  className="acc-lack-pro-title">Neduvasal Supply Channel</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag></PTag>
    <Row className="acc-full-width-lack">
    <Col md={12} lg={12} sm={12} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects8_1_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects8_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col> 
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects8_2_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects8_2} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        {/* <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects8_3}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects8_3} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>  
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects8_4}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects8_4} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>  
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects8_5}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects8_5} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>        */}
         </LightGallery>
    </Col>
    
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>


    </Accordion>

    </MyDiv>
     </>
  );
}

export default Lakeprojectaccpreviousproject;
