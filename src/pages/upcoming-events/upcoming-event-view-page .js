import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyBackgroundImage from "../../assets/img/newsnevents/event-view-page-bg.jpg";
import handshake from "../../assets/img/watermanagement/handimg.jpg";
import {
  MyDiv,
  HeadingOne,
  HeadingTwo,
  PTag,
  SpanTag,
} from "../../common/Common";
import calender from "../../assets/img/newsnevents/calender.svg";
import clock from "../../assets/img/newsnevents/clock.svg";
import Contactform from "../../common/contactform.js";
import { Link } from "react-router-dom";
import { FaCalendar, FaRegClock } from "react-icons/fa";
import axios from "axios";
import parse from 'html-react-parser';
const last_segment = window.location.pathname.split('/').pop();
console.log(last_segment);
 
const Newsentsview = () => {
  const baseurl = 'https://mfmn.stellarsolutionsindia.com/admin/';
  const [pageData, setPageData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl + '/Api/news/single_post/' + last_segment);
        const data = response.data;
        console.log(data);
        setPageData(data);
      } catch (error) {
        console.log("Error fetching page data:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!pageData) {
    return <div className="center">Loading...</div>;
  }



  return (
    <>
    {pageData.map((news) => (
      <>
      <section
        className="our-philosophy-banner advancing-sustainability-banner"
        style={{
          background: `url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`,
        }}
      >
        <Container>
          <Row>
            <Col md={12}>
              <HeadingOne className="restoration-text">
                <Link to="/newsnevents">News & Events</Link> / <span id="nanban-volleyball">{news.post_title}</span>
              </HeadingOne>
            </Col>
          </Row>
        </Container>
      </section>

      <MyDiv className="single-post">
        <Container>
          <Row>
            <Col md={8}>
              <article className="single-post-inner">
                <HeadingTwo>{news.post_title}</HeadingTwo>
               
                <MyDiv className="article-media-img">
            <img src={news.post_image} className='img-fluid'/>
            </MyDiv>
            <PTag>
                  <PTag className="pro-cat-list">{parse(news.post_description)}</PTag>
                </PTag>
              </article>
            </Col>
            <Col md={4}>
              <aside className="right-sidebar">
                <MyDiv className="widget-area">
                  <MyDiv className="widget-meta">
                    <SpanTag className="posted-date">
                      <img src={calender} className="" alt="posted-date" />
                      {news.post_date}
                    </SpanTag>
                    <SpanTag className="posted-time">
                      <img src={clock} className="" alt="posted-time" />
                      {news.post_time}
                    </SpanTag>
                  </MyDiv>
                  <MyDiv className="widget-media-info">
                    <p>Would you like to be a part of this program?</p>
                    <a href={news.post_link} target='_blank' className="btn-join-us">
                      Join the event
                    </a>
                  </MyDiv>
                </MyDiv>
              </aside>
            </Col>
          </Row>
        </Container>
      </MyDiv>
      </>
       ))}
    </>
  );
}

export default Newsentsview;
