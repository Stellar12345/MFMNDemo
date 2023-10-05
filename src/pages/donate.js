import React,{useEffect,useState} from "react";
import { Row, Col, Container,Form,Button } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/donate/donate-banner.png';
import handshake from '../assets/img/watermanagement/handimg.jpg';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import axios from "axios";
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { Link } from "react-router-dom";
import Donateform from "../pages/donate-form-data/donate-fom-info";
function Donate() {

  return (
  
    <>
  
      <MyDiv>
        <section className="our-philosophy-banner donate-mfmn"  style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}} >
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Donate</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>
      
      <MyDiv>
        <Section className='donate-section'>
           <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <MyDiv className="left-title-content">
                            <HeadingTwo className="restoration-text">Be a reason for a cause. You can contribute for the benefit of our farmers. </HeadingTwo>
                        </MyDiv>
                        <MyDiv className="left-text-content">
                            <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </PTag>
                        </MyDiv>
                    </Col>
                    <Col md={12} lg={6}></Col>
                </Row>
            </Container>
        </Section>
      </MyDiv>
      

    <MyDiv className="donte-full-box">
    
        <Container className="donte-conetain">
        <Row className="donate-project-split-line">
        <hr />
      </Row>
      <Row className="donte-row-part">
      <Col md={8} className="donate-left">
        <Donateform/>
      </Col>
      <Col md={4} className="donate-right">
        &nbsp;
      </Col>
      </Row>
        </Container>



    </MyDiv>


      
     
      

    
    </>

  );
}

export default  Donate;
