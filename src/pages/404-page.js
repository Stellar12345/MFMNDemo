import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Row , Form , Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv,LabelTag,  HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../common/Common';
import { FaEnvelope, FaLocationArrow, FaMap, FaMapMarked, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, IconName } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";


function Oppsnotfound() {
  useEffect(() => {
    document.body.classList.add('not-found-bg')  
    return () => {
      document.body.classList.remove('not-found-bg')
    }
  }, [])

  return (
    <>
      
        <MyDiv className="mfmn-error-page" id="error-page">
        <Container>
          <Row className='mfmn-error-rows'>
            
              <MyDiv className="error-top-heading text-center">
              {/* <HeadingTwo className="error-title-heading" >
                404
              </HeadingTwo> */}
              {/* <HeadingFour data-text="Opps! Page not found">
                Opps! Page not found
              </HeadingFour> */}
               
                  <MyDiv className="error-btn">
                  <a className="more-btn" href="/" >Home</a>
                  </MyDiv>
            </MyDiv>
          </Row>
        </Container>
      </MyDiv>
     
    </>
  );
}

export default Oppsnotfound;