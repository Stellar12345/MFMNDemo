import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MyDiv } from '../../common/Common';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lakeprojectsvideo from "./lack-project-videos-data.json";

function Lakeprojectvideo() {
  const [lakeprojectsvideos, setlakeprovideo] = useState([]);

  useEffect(() => {
    setlakeprovideo(lakeprojectsvideo);
  }, []);
  const onInit = () => {
    //console.log('lightGallery has been initialized');
    
  };
  const MfmnData = [{
    "Mfmnlist": [
      {
        "id":1,
        "title":"lake projects",
        "lable": "MFMN-Video-1",
        "images":"MFMN-Video-1.mp4"
      },
     
     
    ]
  }]

  return (
    <>
    
     <Row>
         {lakeprojectsvideos.map((item, index) => (
          <Col md={6} className="media-item-videos">           
              <video controls class="embed-responsive-item">
								<source  autostart="false" src={require('../../assets/img/watermanagement/video/' + item.images)} type="video/mp4"/>
								</video>
          </Col>
          
))}
        </Row>
      
      
    </>
  );
}

export default Lakeprojectvideo;
