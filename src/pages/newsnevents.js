import React, { useState, useEffect } from 'react'
import { slice } from 'lodash'
import { Row, Col, Container } from "react-bootstrap";
import { MyDiv, HeadingOne, PTag, HeadingFour, HeadingThree,HeadingTwo, HeadingFive, Section } from '../common/Common';
import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";

import MyBackgroundImage from '../assets/img/newsnevents/newsnevent-banner.png';
import Upcomingevent from "../pages/upcoming-events/events-content-list";
import parse from 'html-react-parser';

function Posts() {
  const baseurl = "https://mfmn.stellarsolutionsindia.com/admin/";

  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(5)
  const initialPosts = slice(post, 0, index)
  const getData = () => {
    fetch(baseurl + '/Api/news')
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((e) => console.log(e))
  }
  const loadMore = () => {
    setIndex(index + 5)
    console.log(index)
    if (index >= post.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(() => {
   getData();
    document.body.classList.add('news-event-bg-layout')
    return () => {
      document.body.classList.remove('news-event-bg-layout')
    }
  }, [])
  return (
    <>
    <MyDiv >
        <section className="our-philosophy-banner newsnevent-banner"  style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
      <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">News & Events</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>
      <MyDiv className='newsnevent-section'>

        <Container className='news-event-sec'>
          <Row>
            <Col md={12} lg={6} sm={12} className=' text-content-left col-12'>
              <HeadingTwo className="our-achivements">Know more about our achivements and upcoming events for you</HeadingTwo>
              {/* <PTag>Amit minim non deserunt ullamco do amet sint. velit officia consequat duis enim velit mollit</PTag> */}
            </Col> 
          </Row>
          <Row className="farmer-sec">
      {initialPosts.map((item) => {
        return (
          <Col md={4} sm={4}   key={item.id} className='farmer-sec-list'>
      <MyDiv className="farmingimg"  key={item.id}>
        <MyDiv className="farmingimg-inner">
        <a href={'newsnevents/' + item.post_slug} key={item.id}> 
    <img src={baseurl + item.post_image} className='img-fluid'/>
    </a>
        </MyDiv>
    
    <MyDiv className="farming-data">
        <HeadingFive>{item.post_date}</HeadingFive>
        <MyDiv className="farming-data-title">
        <a href={'newsnevents/'+ item.post_slug} key={item.id}>  
        <HeadingFour>{item.post_title}</HeadingFour>
        </a>
        </MyDiv>
        </MyDiv>
        {/* <PTag>{item.body}</PTag> */}
        <PTag className="pro-cat-list">{parse(item.post_description && item.post_description.substring(0, 65) )}</PTag>
        
  </MyDiv>
        </Col>  
        )
      })}

      </Row>
      <MyDiv className='loadmore-btn'>
      <Row>
      <Col lg={12}className="text-center">
          {isCompleted ? (            
              <button onClick={loadMore} type="button" className="load-btn disabled">
              That's It
              </button>          
          
          ) : (          
              <button onClick={loadMore} type="button" className="load-btn">
                Load More 
              </button>           
          )}
         </Col>
         </Row>
         </MyDiv>
      </Container>
      <MyDiv className="upcoming-event-sec">
      <Upcomingevent/>
      </MyDiv>
  </MyDiv>
    
  </>
  )
}
export default Posts;