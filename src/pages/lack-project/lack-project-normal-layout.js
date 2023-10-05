import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { HeadingThree, MyDiv, PTag } from '../../common/Common';

// import Lakeprojects1 from "../../assets/img/watermanagement/lake-projects/lake-projects-01.jpg";

import Lakeprojects1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-01.jpg';

import Lakeprojects1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-01-popup.jpg';

import Lakeprojects4 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-04.jpg';


import Lakeprojects4_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-04-popup.jpg';



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
import Lakeprojects11_2 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-11-2.jpg';
import Lakeprojects11_3 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-11-3.jpg';
import Lakeprojects11_4 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-11-4.jpg';
import Lakeprojects11_5 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-11-5.jpg';
import Lakeprojects11_6 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-11-6.jpg';


import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


function Lakeprojectnewlayout() {
  const [lakeprojectcon, setlakepro] = useState([]);
  const onInit = () => {
    //console.log('lightGallery has been initialized');
    
  };

  useEffect(() => {
    //setlakepro(lakeprojectsdata);
  }, []);

  return (
    <>
   
      <Row className="lake-info-list" >
      <Col md={6}  className="lake-item-desc">
          <MyDiv className="lake-item-data">
            <HeadingThree className="lake-item-heading">Rehabilitating Lakes</HeadingThree>
            <PTag>The Nanban Foundation's Mothers for Mother Nature initiative is dedicated to rehabilitating lakes and improving their conditions. Lakes are important sources of fresh water and play a vital role in supporting communities for various needs such as drinking water, agriculture, and livestock. By restoring and rejuvenating lakes, numerous benefits can be achieved.</PTag>
            </MyDiv>
        </Col>
      <Col md={6} className="lake-item-img" >
      <MyDiv className="lake-item-photo">   
         <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={12} lg={12} sm={12} className="acc-lack-photo-infos" data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects1_popup}>            
              <MyDiv className="lack-pro-img" >
          <img src={Lakeprojects1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
         </LightGallery>     
      </MyDiv>
      </Col>
      
      </Row>

      <Row className="lake-info-list" >
      <Col md={6} className="lake-item-img" >
      <MyDiv className="lake-item-photo">   
         <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={12} lg={12} sm={12} className="acc-lack-photo-infos" data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects4_popup}>            
              <MyDiv className="lack-pro-img" >
          <img src={Lakeprojects4} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
         </LightGallery>     
      </MyDiv>
      </Col>
      <Col md={6}  className="lake-item-desc">
          <MyDiv className="lake-item-data">
            <HeadingThree className="lake-item-heading">Mr. Nimal Raghavan</HeadingThree>
            <PTag>Nimal Raghavan, an environmental activist from Tamil Nadu, has been actively involved in water body rejuvenation, rainwater harvesting, and tree planting efforts. His work is focused on soil and water conservation, highlighting the importance of water in sustaining life.</PTag>
            </MyDiv>
        </Col>
      
     
      </Row>



      
   
     </>
  );
}

export default Lakeprojectnewlayout;
