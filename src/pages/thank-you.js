import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Row , Form , Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv,LabelTag,  HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../common/Common';
import { FaEnvelope, FaLocationArrow, FaMap, FaMapMarked, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, IconName } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import Thankyou_imge from "../assets/img/thankyou.jpg";

function Thankyoupage() {
 
    useEffect(() => {
      document.body.classList.add('thank-you-bg')  
      return () => {
        document.body.classList.remove('thank-you-bg')
      }
    }, [])
  return (
    <>
      
        <MyDiv className="thank-you-page" >
        
        <Container>
          <Row className='mfmn-thnak-ro'>
           
              <MyDiv className="thank-you-page-info text-center">
              <HeadingTwo className="thank-you-title-head" >
              Thank You for Your Donation!
              </HeadingTwo>
             <PTag className="thank-you-note-info">Your donation has been successfully submitted. We appreciate your support!</PTag>
               
                  <MyDiv className="thank-btn">
                  <a className="more-btn" href="/donate" style={{ float: "initial"}}> More Donate</a>
                  </MyDiv>
            </MyDiv>
          </Row>
        </Container>
      </MyDiv>
     
    </>
  );
}

export default Thankyoupage;