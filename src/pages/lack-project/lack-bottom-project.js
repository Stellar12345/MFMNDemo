import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { HeadingThree, MyDiv, PTag } from '../../common/Common';

import Lack_previous_project from "./lack-project-acc-previous-projects";



// import Lakeprojects1 from "../../assets/img/watermanagement/lake-projects/lake-projects-01.jpg";

import Lakeprojects1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-01.jpg';

import Lakeprojects1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-01-popup.jpg';

import Lakeprojects4 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-04.jpg';



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


//popup images

import Lakeprojects9_1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-09-1-popup.jpg';
import Lakeprojects9_2_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-09-2-popup.jpg';
import Lakeprojects9_3_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-09-3-popup.jpg';
import Lakeprojects9_4_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-09-4-popup.jpg';
import Lakeprojects9_5_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-09-5-popup.jpg';
import Lakeprojects9_6_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-09-6-popup.jpg';
import Lakeprojects9_7_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-09-7-popup.jpg';
import Lakeprojects9_8_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-09-8-popup.jpg';

//end popup

import Lakeprojects10_1 from '../../assets/img/watermanagement/lake-projects-acc/lake-projects-10-1.jpg';
//popup images
import Lakeprojects10_1_popup from '../../assets/img/watermanagement/lake-projects-acc-popup/lake-projects-10-1-popup.jpg';
//end popup


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


function Lakeprojectnewlayouts() {
  const [lakeprojectcon, setlakepro] = useState([]);
  const onInit = () => {
    //console.log('lightGallery has been initialized');
    
  };
  const data = [
    { id: 1, src:"lake-projects-11-1.jpg", alt: 'lakes location'},
    { id: 2, src:"lake-projects-11-2.jpg", alt: 'lakes location'},
    { id: 3, src:"lake-projects-11-3.jpg", alt: 'lakes location'},
    { id: 4, src:"lake-projects-11-4.jpg", alt: 'lakes location'},
    { id: 5, src:"lake-projects-11-5.jpg", alt: 'lakes location'},
    { id: 6, src:"lake-projects-11-6.jpg", alt: 'lakes location'},
    { id: 7, src:"lake-projects-11-7.jpg", alt: 'lakes location'},
    { id: 8, src:"lake-projects-11-8.jpg", alt: 'lakes location'},
    { id: 9, src:"lake-projects-11-9.jpg", alt: 'lakes location'},
    { id: 10, src:"lake-projects-11-10.jpg", alt: 'lakes location'},
    { id: 11, src:"lake-projects-11-11.jpg", alt: 'lakes location'},
    { id: 12, src:"lake-projects-11-12.jpg", alt: 'lakes location'},
    { id: 13, src:"lake-projects-11-13.jpg", alt: 'lakes location'},
    { id: 14, src:"lake-projects-11-14.jpg", alt: 'lakes location'},
    { id: 15, src:"lake-projects-11-15.jpg", alt: 'lakes location'},
    { id: 16, src:"lake-projects-11-16.jpg", alt: 'lakes location'},
    { id: 17, src:"lake-projects-11-17.jpg", alt: 'lakes location'},
    { id: 18, src:"lake-projects-11-18.jpg", alt: 'lakes location'},
    { id: 19, src:"lake-projects-11-19.jpg", alt: 'lakes location'},
    { id: 20, src:"lake-projects-11-20.jpg", alt: 'lakes location'},
    { id: 21, src:"lake-projects-11-21.jpg", alt: 'lakes location'},
    { id: 22, src:"lake-projects-11-22.jpg", alt: 'lakes location'},
    { id: 23, src:"lake-projects-11-23.jpg", alt: 'lakes location'},
    { id: 24, src:"lake-projects-11-24.jpg", alt: 'lakes location'},
    { id: 25, src:"lake-projects-11-25.jpg", alt: 'lakes location'},
    { id: 26, src:"lake-projects-11-26.jpg", alt: 'lakes location'}
    

    // Add the rest of the data objects here...
  ];

  const initialItemsToShow = 6;
  const itemsPerLoad = 3;

  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemsPerLoad);
  };

  const visibleData = data.slice(0, itemsToShow);




  useEffect(() => {
    //setlakepro(lakeprojectsdata);
  }, []);

  return (
    <>  
      <Row className="lake-info-list" >
      <Col md={12}  className="lake-item-desc">
          <MyDiv className="lake-item-data">
            <HeadingThree className="lake-item-heading">MFMN's Role in Funding</HeadingThree>
            <PTag>Nanban Foundation's Mothers for Mother Nature has played a crucial role in funding the challenging lake rejuvenation projects. By providing an exclusive excavator for the project, they were able to save a significant sum of money. Within six months, 15 lakes were rejuvenated with the help of the excavator, benefiting over 60 lakh people and covering more than 9000 acres of lakes.</PTag>
            <PTag>Nanban Foundation MFMN works closely with people under private public, partnerships methods on lake rejuvenation projects. MFMN will provide excavator support which covers major portions of the expenses and people in that region will extend their support in managing overhead cost like fuel, local helpers to form lake islands etc. By partnering with local people in all projects, MFMN enables them as a lake stewards, will help in maintaining the lake ecosystem.</PTag>
            </MyDiv>
        </Col>
      <Col md={12} className="lake-item-img p-0" >
      <MyDiv className="lake-item-photo">   
      <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_1_popup}>            
              <MyDiv className="lack-pro-img-left " >
          <img src={Lakeprojects9_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col> 
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_2_popup}>            
              <MyDiv className="lack-pro-img-left" >
          <img src={Lakeprojects9_2} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_3_popup}>            
              <MyDiv className="lack-pro-img-left" >
          <img src={Lakeprojects9_3} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_4_popup}>            
              <MyDiv className="lack-pro-img-left" >
          <img src={Lakeprojects9_4} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_5_popup}>            
              <MyDiv className="lack-pro-img-left" >
          <img src={Lakeprojects9_5} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_6_popup}>            
              <MyDiv className="lack-pro-img-left" >
          <img src={Lakeprojects9_6} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_7_popup}>            
              <MyDiv className="lack-pro-img-left" >
          <img src={Lakeprojects9_7} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
        <Col md={4} lg={4} sm={6} className='acc-lack-photo-info' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects9_8_popup}>            
              <MyDiv className="lack-pro-img-left" >
          <img src={Lakeprojects9_8} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>
          
      
         </LightGallery>    
      </MyDiv>
      </Col>
      
      </Row>

      <Row className="lake-info-list" >
      <Col md={12}  className="lake-item-desc">
          <MyDiv className="lake-item-data">
            <HeadingThree className="lake-item-heading">Tree Plantation</HeadingThree>
            <PTag>One important aspect of the lake rehabilitation efforts is the planting of vetiver and palm trees along the boundaries, which aids in preventing soil erosion and improves water holding capacity. The planting of native tree varieties on lake islands also supports the conservation of endangered birds and bees, contributing to the preservation of natural biodiversity.</PTag>
            </MyDiv>
        </Col>
      <Col md={12} className="lake-item-img ">
      <MyDiv className="lake-item-photo row">   
      <Col md={4} lg={4} sm={6} className="lack-part-info">
    <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >      
         <Col md={12} lg={12} className='acc-lack-photo-info desktop-no-p0 tree-plan-tab-view' data-toggle="lightbox"
         data-gallery="example-gallery" data-src={Lakeprojects10_1_popup}>            
              <MyDiv className="acc-lack-pro-img" >
          <img src={Lakeprojects10_1} alt="rejuvenating lakes"/>
          </MyDiv>  
        </Col>  
   
      
         </LightGallery>
    </Col>
    <Col md={4} lg={4} sm={6} className="lack-vidoe-part-info">    
      <MyDiv className="acc-lack-video-tmes">                      
            <video controls class="embed-responsive-item">
					  <source  autostart="false" src={Lakeprojects_v9} type="video/mp4"/>
					  </video>
  </MyDiv>
    </Col>
    <Col md={4} lg={4} sm={6} className="lack-vidoe-part-info">    
      <MyDiv className="acc-lack-video-tmes">                      
      <video controls class="embed-responsive-item">
					  <source  autostart="false" src={Lakeprojects_v9_1} type="video/mp4"/>
					  </video>
  </MyDiv>
    </Col>    
      </MyDiv>
      </Col>
       </Row>

<Lack_previous_project/>

  <Row className="lake-info-list" >
  <Col md={12}  className="lake-item-desc">
       <MyDiv className="lake-item-data">
         <HeadingThree className="lake-item-heading">Our Global Initiative</HeadingThree>
         <PTag>This lake rejuvenation project has expanded its reach from Jammu & Kashmir to Nagercoil in Tamil Nadu and even traveled as far as Kenya, Africa, making it a global initiative. The efforts put into rehabilitating lakes highlight the importance of preserving these valuable resources for the benefit of both humans and the environment.</PTag>
         </MyDiv>
     </Col>
   <Col md={12} className="lake-item-img" >
   {/* <MyDiv className="lake-item-photo">   
      <LightGallery
       onInit={onInit}
       speed={1500}
       plugins={[]}
     >      
      <Col md={4} lg={4} sm={6} className="acc-lack-photo-infos" data-toggle="lightbox"
      data-gallery="example-gallery" data-src={Lakeprojects11_1}>            
           <MyDiv className="lack-pro-img" >
       <img src={Lakeprojects11_1} alt="rejuvenating lakes"/>
       </MyDiv>  
     </Col>
     <Col md={4} lg={4} sm={6} className="acc-lack-photo-infos" data-toggle="lightbox"
      data-gallery="example-gallery" data-src={Lakeprojects11_2}>            
           <MyDiv className="lack-pro-img" >
       <img src={Lakeprojects11_2} alt="rejuvenating lakes"/>
       </MyDiv>  
     </Col>
     <Col md={4} lg={4} sm={6} className="acc-lack-photo-infos" data-toggle="lightbox"
      data-gallery="example-gallery" data-src={Lakeprojects11_3}>            
           <MyDiv className="lack-pro-img" >
       <img src={Lakeprojects11_3} alt="rejuvenating lakes"/>
       </MyDiv>  
     </Col>
     <Col md={4} lg={4} sm={6} className="acc-lack-photo-infos" data-toggle="lightbox"
      data-gallery="example-gallery" data-src={Lakeprojects11_4}>            
           <MyDiv className="lack-pro-img" >
       <img src={Lakeprojects11_4} alt="rejuvenating lakes"/>
       </MyDiv>  
     </Col>
     <Col md={4} lg={4} sm={6} className="acc-lack-photo-infos" data-toggle="lightbox"
      data-gallery="example-gallery" data-src={Lakeprojects11_5}>            
           <MyDiv className="lack-pro-img" >
       <img src={Lakeprojects11_5} alt="rejuvenating lakes"/>
       </MyDiv>  
       
     </Col>
     <Col md={4} lg={4} sm={6} className="acc-lack-photo-infos" data-toggle="lightbox"
      data-gallery="example-gallery" data-src={Lakeprojects11_6}>            
           <MyDiv className="lack-pro-img" >
       <img src={Lakeprojects11_6} alt="rejuvenating lakes"/>
       </MyDiv>  
     </Col>
      </LightGallery>     
   </MyDiv> */}


   <MyDiv className="lake-item-photo">   
      <LightGallery
       onInit={onInit}
       speed={1500}
       plugins={[]}
     >    {visibleData.map((item) => (
      <Col key={item.id} md={4} lg={4} sm={6} className="acc-lack-photo-infos"
        data-toggle="lightbox"   data-gallery="example-gallery" data-src={require('../../assets/img/watermanagement/lake-projects-acc/' + item.src)}
      >
        <MyDiv className="lack-pro-img">
          <img src={require('../../assets/img/watermanagement/lake-projects-acc/' + item.src)} alt={item.alt} />
        </MyDiv>
      </Col>
    ))}
    
      </LightGallery>    
      <MyDiv className="more-map-loc">
    {itemsToShow < data.length && (
      <button onClick={handleLoadMore} className="load-btn">Load More</button>
    )}
    </MyDiv> 
   </MyDiv>







   </Col>

 
   </Row>




      
   
     </>
  );
}

export default Lakeprojectnewlayouts;
