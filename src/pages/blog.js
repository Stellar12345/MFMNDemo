import React, { useState, useEffect } from 'react'
import { slice } from 'lodash'
import { Row, Col, Form,Container } from "react-bootstrap";
import MyBackgroundImage from '../assets/img/blog/blog-banner.jpg';
import { MyDiv, HeadingOne, PTag, HeadingFour, HeadingThree,HeadingTwo, HeadingFive, Section, SpanTag } from '../common/Common';
import Contactform from "../common/contactform.js";
import { Link } from "react-router-dom";
import Postauthor from '../assets/img/blog/post-auth.png';
import Blogdatalist from "../pages/blog/blog-data-list";

// import img3 from '../assets/img/newsnevents/newsnevents-img3.png';
// import event1 from '../assets/img/newsnevents/upcomingevent-img2.png';
// import event2 from '../assets/img/newsnevents/upcomingevent-img1.png';

function Blogpost() {
  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(6)
  const initialPosts = slice(post, 0, index)

  const getData = () => {
    fetch('https://mfmn.stellarsolutionsindia.com/API/blogdata.json')
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
    // document.body.classList.add('news-event-bg-layout')
    // return () => {
    //   document.body.classList.remove('news-event-bg-layout')
    // }
  }, [])

  return (
    <>
    <MyDiv >
        <section className="our-philosophy-banner newsnevent-banner"  style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
      <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Blog</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>
      <MyDiv className='newsnevent-section'>
        <Container className='news-event-sec'>
          <Row>
            <Col md={12} lg={6} sm={12} className=' text-content-left col-12'>
              <HeadingTwo className="our-achivements">Keep yourselves updated with our recent articles</HeadingTwo>
              {/* <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</PTag> */}
            </Col> 
          </Row>
          {/* <MyDiv className="blog-post-filter">
          <Form>
          <Row>
            <Col sm="4" className='post-filter-itmes'>
                <MyDiv className="posted-filter">
                  <label>Category</label>
                  <select id="category-info"  className="selected_option" >
                    <option value="">All</option>
                    <option value='Wind'>Wind</option>
                    <option value='Solar'>Solar</option>
                    <option value='Carbon'>Carbon</option>
              </select>
                </MyDiv>
            </Col>
            <Col sm="4">
            <MyDiv className="posted-filter">
                  <label>Sort by</label>
                  <select id="post-sort"  className="selected_option" >
                    <option value="latest">Latest</option>
                    <option value='oldest'>Oldest</option>
              </select>
                </MyDiv>
            </Col>
            <Col sm="4" >
              <MyDiv className="posted-filter">
              <label>Search by keyword</label>
              <input type="text" placeholder='Enter keyword' className='input-keyword-search'/>
              </MyDiv>
            </Col>
          </Row>
          </Form>
          </MyDiv>
          <Row className="farmer-sec">
      {initialPosts.map((item) => {
        return (
          <Col md={4} sm={4}   key={item.id} className='blog-posted-list'>
    <MyDiv className="farmingimg"  key={item.id}>
    <a href='javascript:void(0)' >
    <img src={require('../assets/img/newsnevents/' + item.image)} className='img-fluid'/>
    </a>
        <MyDiv className="posted-info">
        <SpanTag className="posted-info-date">{item.date}</SpanTag>
        <SpanTag  className="posted-info-auth"><img src={Postauthor} className='post-auther'/>Jaison</SpanTag> 
        </MyDiv>
        <MyDiv className="posted-title">          
        <a href='javascript:void(0)'>
        <HeadingFour>{item.title}</HeadingFour>
        </a>        
        </MyDiv>
        <PTag>{item.body && item.body[0].substring(0, 200,".")}</PTag>
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
         </MyDiv> */}
      <Blogdatalist/>
      </Container>
      {/* <MyDiv className="upcoming-event-sec">
      <Container>
      <Row className="upcoming-event">
            <HeadingThree>Upcoming <strong>event</strong></HeadingThree>
            <Col md={4} sm={4} className='upcoming-event-list'>
              <MyDiv className="upcoming-event-list-inner">
                <img src={event1} className="img-fluid" alt="image"/>
                <MyDiv className="event-data">
                <HeadingFive>04 Apr 2023</HeadingFive>
                <HeadingFour>Nanban open vallyball champianship-Dec 2023</HeadingFour>
                </MyDiv>
                <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.velit officia consequat duis enim velit molit.</PTag>
                
                </MyDiv>
            </Col>
            <Col md={4} sm={4} className='upcoming-event-list'>
            <MyDiv className="upcoming-event-list-inner">
                <img src={event2} className="img-fluid" alt="image"/>
                <MyDiv className="event-data">
                <HeadingFive>02 Feb 2023</HeadingFive>
                <HeadingFour>Nanban 5K run/walk</HeadingFour>
                </MyDiv>
                <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.velit officia consequat duis enim velit molit.</PTag>
               
                </MyDiv>
            </Col>
            <Col md={4} sm={4} className='upcoming-event-list'>
            <MyDiv className="upcoming-event-list-inner">
                <img src={img3} className="img-fluid" alt="image"/>
                <MyDiv className="event-data">
                <HeadingFive>02 Feb 2023</HeadingFive>
                <HeadingFour>Sample dummy text for the new title. this will be replace with the draft text</HeadingFour>
                </MyDiv>
                <PTag>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.velit officia consequat duis enim velit molit.</PTag>
                </MyDiv>
            </Col>
          </Row>
      </Container>
      </MyDiv> */}
  </MyDiv>
    
  </>
  )
}
export default Blogpost;