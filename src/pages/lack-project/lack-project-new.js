import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MyDiv, PTag } from '../../common/Common';

// import Lakeprojects1 from "../../assets/img/watermanagement/lake-projects/lake-projects-01.jpg";
import lakeprojectsdata from "./lake-projects-content.json";


function Lakeproject() {
  const [lakeprojectcon, setlakepro] = useState([]);

  useEffect(() => {
    setlakepro(lakeprojectsdata);
  }, []);

  return (
    <>
    {lakeprojectcon.map((item, index) => (
      <Row className="lake-info-list"  key={index}>
      <Col md={6}  className="lake-item-desc"  key={index}>
          <MyDiv className="lake-item-data">
            <PTag>{item.post_content}</PTag>
            </MyDiv>
        </Col>
      <Col md={6} className="lake-item-img"  key={index}>
      <MyDiv className="lake-item-photo"  key={index}>   
 
       <img src={require('../../assets/img/watermanagement/lake-projects/' + item.post_images)} className="lack-pro-img" alt={item.label} />
       {/* <img src={require(`../../assets/img/watermanagement/lake-projects/${item.post_images}`)} className="lack-pro-img"  alt={item.label}/> */}
            {/* <img src={require(`../../assets/img/watermanagement/lake-projects/`)} className="lack-pro-img" alt={item.label}/> */}
      </MyDiv>
      </Col>
      </Row>
       ))}
     </>
  );
}

export default Lakeproject;
