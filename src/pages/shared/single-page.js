import React,{useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../../assets/img/newsnevents/newsnevents-subbanner.png';
import handshake from '../../assets/img/watermanagement/handimg.jpg';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../../common/Common';
import calender from '../../assets/img/newsnevents/calender.svg';
import clock from '../../assets/img/newsnevents/clock.svg';
import Contactform from "../../common/contactform.js";
import { Link } from "react-router-dom";
import {FaCalendar, FaRegClock } from "react-icons/fa";
function Newsneventsub() {
  return (
   <>   
        <section className="our-philosophy-banner advancing-sustainability-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">News & Events / <span id="nanban-volleyball">Nanban open volley ball championship</span></HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
     

<MyDiv className="single-post">
    <Container>
          <Row>
              <Col md={8}>
                <article className="single-post-inner">
                <HeadingTwo>Nanban open volley ball championship</HeadingTwo>
                  <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</PTag>
                  <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</PTag>
                </article>
                </Col>
                <Col md={4}>
                    <aside className="right-sidebar">
                        <MyDiv className="widget-area">
                              <MyDiv className="widget-meta">
                                <SpanTag className="posted-date"><img src={calender} className="" alt="posted-date"/>04 Apr 2023</SpanTag>
                                <SpanTag className="posted-time"><img src={clock} className="" alt="posted-time"/>11:00 AM</SpanTag>  
                              </MyDiv>
                              <MyDiv className="widget-media-info">
                                <p>Would you like to be a part of this program?</p>
                                <a href="" className="btn-join-us">Join the event</a>
                              </MyDiv>
                        </MyDiv>
                    </aside>
                </Col>
          </Row>
     </Container>
</MyDiv>
    </>

  );
}

export default  Newsneventsub;
