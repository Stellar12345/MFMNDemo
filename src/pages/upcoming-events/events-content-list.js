import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { slice } from 'lodash'
import { Row, Col, Container } from "react-bootstrap";
import { MyDiv, HeadingOne, PTag, HeadingFour, HeadingThree,HeadingTwo, HeadingFive, Section } from '../../common/Common';
import axios from "axios";
import parse from 'html-react-parser';

function Events() {
  const baseurl = "https://mfmn.stellarsolutionsindia.com/admin/";

  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(5)
  const initialPosts = slice(post, 0, index)
  const getData = () => {
    fetch(baseurl + '/Api/news/events')
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
   console.log(initialPosts);
    document.body.classList.add('news-event-bg-layout')
    return () => {
      document.body.classList.remove('news-event-bg-layout')
    }
  }, [])

    return (
      <>
      <Container>
         <Row className="upcoming-event">
            <HeadingThree>Upcoming <strong>event </strong></HeadingThree>
            {initialPosts.map((item) => {
        return (
                <Col md={4} sm={4}   key={item.id} className='upcoming-event-list'>
                <MyDiv className="upcoming-event-list-inner">
                  <MyDiv className="upcoming-event-item-media">
                  <a href={'upcomingevents/'+ item.post_slug}> 
                  <img src={baseurl + item.post_image} className='img-fluid'/>
                  </a>
                  </MyDiv>
                    <MyDiv className="event-data">
                    <HeadingFive>{item.post_date}</HeadingFive>
                      <MyDiv className="event-data-title">
                        <a href={'upcomingevents/'+ item.post_slug}> 
                        <HeadingFour>{item.post_title}</HeadingFour>
                        </a>
                      </MyDiv>
                    </MyDiv>
                    <PTag>{parse(item.post_description && item.post_description.substring(0, 65) )}</PTag>
                </MyDiv>
                </Col>
            )
        })}
        </Row>
          <MyDiv className='loadmore-btn'>
          <Row>
          <Col lg={12}className="text-center">
          {isCompleted ? (            
              <button onClick={loadMore} type="button" className="load-btn no-bg-btn disabled">
              That's It
              </button>          
          
          ) : (          
              <button onClick={loadMore} type="button" className="load-btn no-bg-btn">
                Load More 
              </button>           
          )}
         </Col>
          </Row>
          </MyDiv>
      </Container>
      
      </>
  )
}
export default Events;
