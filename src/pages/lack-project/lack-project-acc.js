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


function Lakeprojectacc() {
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
      {/* <Accordion.Item eventKey="0">
        <Accordion.Header className="acc-lack-pro-title">Rehabilitating Lakes</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag>The Nanban Foundation's Mothers for Mother Nature initiative is dedicated to rehabilitating lakes and improving their conditions. Lakes are important sources of fresh water and play a vital role in supporting communities for various needs such as drinking water, agriculture, and livestock. By restoring and rejuvenating lakes, numerous benefits can be achieved.</PTag>
    <Row className="acc-full-width-lack">
    <Col md={4} lg={4} sm={4}  className='acc-lack-photo-info'>
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={12} lg={12} sm={12} className="acc-lack-photo-info" data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects1}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
         </LightGallery>
    </Col>
   
         </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item> */}
      {/* <Accordion.Item eventKey="2">
        <Accordion.Header  className="acc-lack-pro-title">Mr. Nimal Raghavan</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag>Nimal Raghavan, an environmental activist from Tamil Nadu, has been actively involved in water body rejuvenation, rainwater harvesting, and tree planting efforts. His work is focused on soil and water conservation, highlighting the importance of water in sustaining life.</PTag>
    <Row className="acc-full-width-lack">
    <Col md={4} lg={4} sm={4} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={12} lg={12} sm={12} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects4}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects4} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
    
         </LightGallery>
    </Col>

    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item> */}

      
   
      <Accordion.Item eventKey="3">
        <Accordion.Header  className="acc-lack-pro-title">Kollukkadu Lake</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag>Recognizing the significance of water conservation, Nanban Foundation's Mother for Mother Nature and Nimal Raghavan have joined forces to restore dried-up lakes. This initiative primarily targets coastal regions in Tamil Nadu where saltwater intrusion is a major issue. Through their efforts, many villages, farmers, and fishermen have benefitted from the rejuvenation of these lakes.</PTag>
    <Row className="acc-full-width-lack">
    <Col md={12} lg={12} sm={12} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects3_1_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects3_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects3_2_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects3_2} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects3_3_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects3_3} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>

        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects3_4_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects3_4} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects3_5_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects3_5} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects3_6_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects3_6} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects3_7_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects3_7} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
    
         </LightGallery>
    </Col>
    
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>
      

      <Accordion.Item eventKey="10">
        <Accordion.Header  className="acc-lack-pro-title">Kenikkarai lake</Accordion.Header>
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
         data-gallery="example-gallery" data-src={Lakeprojects12_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects12} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>    
      
         </LightGallery>
    </Col>   
   
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="11">
        <Accordion.Header  className="acc-lack-pro-title">Poovatrakudi lake, ECR</Accordion.Header>
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
         data-gallery="example-gallery" data-src={Lakeprojects13_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects13} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects13_1_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects13_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects13_2_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects13_2} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects13_3_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects13_3} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>    
      
         </LightGallery>
    </Col>   
   
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item>

     


      {/* <Accordion.Item eventKey="10">
        <Accordion.Header  className="acc-lack-pro-title">MFMN's Role in Funding</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag>Nanban Foundation's Mothers for Mother Nature has played a crucial role in funding the challenging lake rejuvenation projects. By providing an exclusive excavator for the project, they were able to save a significant sum of money. Within six months, 15 lakes were rejuvenated with the help of the excavator, benefiting over 60 lakh people and covering more than 9000 acres of lakes.</PTag>
    <Row className="acc-full-width-lack">
    <Col md={12} lg={12} sm={12} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_1}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects9_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col> 
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_2}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects9_2} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_3}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects9_3} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_4}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects9_4} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_5}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects9_5} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_6}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects9_6} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_7}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects9_7} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_8}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects9_8} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
          
      
         </LightGallery>
    </Col>
    
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item> */}



      {/* <Accordion.Item eventKey="11">
        <Accordion.Header  className="acc-lack-pro-title">Tree Plantation</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag>One important aspect of the lake rehabilitation efforts is the planting of vetiver and palm trees along the boundaries, which aids in preventing soil erosion and improves water holding capacity. The planting of native tree varieties on lake islands also supports the conservation of endangered birds and bees, contributing to the preservation of natural biodiversity.</PTag>
    <Row className="acc-full-width-lack">
    <Col md={4} lg={4} sm={4} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={12} lg={12} sm={12} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects10_1}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects10_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>  
   
      
         </LightGallery>
    </Col>
    
    <Col md={4} lg={4} sm={4} className="lack-vidoe-part-info">    
      <MyDiv className="acc-lack-video-tmes">                      
            <video controls class="embed-responsive-item">
					  <source  autostart="false" src={Lakeprojects_v9} type="video/mp4"/>
					  </video>
  </MyDiv>
    </Col>
    <Col md={4} lg={4} sm={4} className="lack-vidoe-part-info">    
      <MyDiv className="acc-lack-video-tmes">                      
      <video controls class="embed-responsive-item">
					  <source  autostart="false" src={Lakeprojects_v9_1} type="video/mp4"/>
					  </video>
  </MyDiv>
    </Col>
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item> */}



      {/* <Accordion.Item eventKey="12">
        <Accordion.Header  className="acc-lack-pro-title">Our Global Initiative</Accordion.Header>
        <Accordion.Body>
          <MyDiv className="acc-lack-desc-box">
    <PTag>This lake rejuvenation project has expanded its reach from Jammu & Kashmir to Nagercoil in Tamil Nadu and even traveled as far as Kenya, Africa, making it a global initiative. The efforts put into rehabilitating lakes highlight the importance of preserving these valuable resources for the benefit of both humans and the environment.</PTag>
    <Row className="acc-full-width-lack">
    <Col md={12} lg={12} sm={12} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects11_1}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects11_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>  
      
      
         </LightGallery>
    </Col>
    
    </Row>
    </MyDiv>
        </Accordion.Body>
      </Accordion.Item> */}

    </Accordion>

    </MyDiv>
     </>
  );
}

export default Lakeprojectacc;
