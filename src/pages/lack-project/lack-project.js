import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MyDiv } from '../../common/Common';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lakeprojectsdata from "./lake-projects-gallery-data.json";

function Lakeproject() {
  const onInit = () => {
    //console.log('lightGallery has been initialized');
    
  };
  const MfmnData = [{
    "Mfmnlist": [
      {
        "id":1,
        "title":"lake projects",
        "lable": "lake-projects1",
        "images":"lake-projects-01.jpg"
      },
      {
        "id":2,
        "title":"lake projects",
        "lable": "lake-projects2",
        "images":"lake-projects-02.jpg"
      },
      {
        "id":3,
        "title":"lake projects",
        "lable": "lake-projects3",
        "images":"lake-projects-03.jpg"
      },
      {
        "id":4,
        "title":"lake projects",
        "lable": "lake-projects4",
        "images":"lake-projects-04.jpg"
      },
      {
        "id":5,
        "title":"lake projects",
        "lable": "lake-projects5",
        "images":"lake-projects-05.jpg"
      },
      {
        "id":6,
        "title":"lake projects",
        "lable": "lake-projects6",
        "images":"lake-projects-06.jpg"
      },
      {
        "id":7,
        "title":"lake projects",
        "lable": "lake-projects7",
        "images":"lake-projects-07.jpg"
      },
      {
        "id":8,
        "title":"lake projects",
        "lable": "lake-projects8",
        "images":"lake-projects-08.jpg"
      },
      {
        "id":9,
        "title":"lake projects",
        "lable": "lake-projects9",
        "images":"lake-projects-09.jpg"
      },
      {
        "id":10,
        "title":"lake projects",
        "lable": "lake-projects10",
        "images":"lake-projects-10.jpg"
        
      },
      {
        "id":11,
        "title":"lake projects",
        "lable": "lake-projects11",
        "images":"lake-projects-11.jpg"
      },
      {
        "id":12,
        "title":"lake projects",
        "lable": "lake-projects12",
        "images":"lake-projects-12.jpg"
      }
      
     
    ]
  }]

  return (
    <>
      {MfmnData.map((item, index) => (
        <Row key={index}> 
        <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >
        {item.Mfmnlist.map((item, index) => (
         <Col md={3} lg={3} sm={6} className='mfmn-around-list' key={index} data-toggle="lightbox"
         data-gallery="example-gallery" data-src={require('../../assets/img/watermanagement/lake-projects/' + item.images)}>
            <MyDiv className="mfmn-around-items"  key={index}  >
              <img src={require('../../assets/img/watermanagement/lake-projects/' + item.images)} className="mfmn-around-img" alt={item.lable} />
              {/* <SpanTag className="mfmn-around-title">{item.title}</SpanTag> */}
            </MyDiv>
        </Col>
        
         ))}
         </LightGallery>
        </Row>
        ))}
    </>
  );
}

export default Lakeproject;
