import React,{useEffect} from "react";
import { useState } from "react";

import { useParams } from "react-router";
import { Row, Col, Container } from "react-bootstrap";
import MyBackgroundImage from '../../assets/img/blog/blog-view-page-bg.jpg';
import handshake from '../../assets/img/watermanagement/handimg.jpg';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../../common/Common';
import calender from '../../assets/img/newsnevents/calender.svg';
import clock from '../../assets/img/newsnevents/clock.svg';
import Autherimg from '../../assets/img/blog/blog-icon-contact.png';
import blogshare from '../../assets/img/blog/blog-share.png';
import Postcomments from "../../common/post-comment";
import { Link } from "react-router-dom";
import {FaCalendar, FaRegClock } from "react-icons/fa";
import parse from 'html-react-parser';

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import Facebook from '../../assets/img/fb-icon.png';
import Twitter from '../../assets/img/twitter-icon.png';
import Instagram from '../../assets/img/insta-icon.png';

import axios from "axios";
const last_segment = window.location.pathname.split('/').pop();
console.log(last_segment);


/**
 * Renders a post
 */
// read post data
const SingleblogPage = () => {
  const baseurl = 'https://mfmn.stellarsolutionsindia.com/admin/';
  const [pageData, setPageData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl + '/Api/blog/single_blog/' + last_segment);
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
    return <div>Loading...</div>;
  }
  return (
    <>
     {pageData.map((user) => (
      <>
     <section className="our-philosophy-banner advancing-sustainability-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text"><a href="/blog">Blog</a> / <span id="nanban-volleyball">{user.blog_title}</span></HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
<MyDiv className="single-post">
    <Container>
          <Row>
              <Col md={8}>
                <article className="single-post-inner">
                <HeadingTwo>{user.blog_title}</HeadingTwo>
                <MyDiv className="article-media-img">
                <img src={baseurl + user.blog_image} className='img-fluid'/>
            </MyDiv>
                <PTag className="pro-cat-list">{parse(user.blog_description)}</PTag>
                </article>
                </Col>
                <Col md={4}>
                    <aside className="right-sidebar">
                        <MyDiv className="widget-area">
                              <MyDiv className="widget-meta blog-widget">
                                <SpanTag className="posted-date"><img src={calender} className="" alt="posted-date"/>{user.blog_date}</SpanTag>
                                {/* <SpanTag className="posted-time"><img src={clock} className="" alt="posted-time"/>11:00 AM</SpanTag>  */}
                                <SpanTag className="posted-auther"><img src={Autherimg} className="" alt="posted-auther"/>{user.blog_author}</SpanTag>  
                              </MyDiv>
                              <MyDiv className="widget-media-info">
                                <a href="javascript(0)"><span className="posted-share-info">
                                  <img src={blogshare} className="" alt="posted-share"/>Share:</span></a>
                                  <span className="scoial-share-list">
                                <FacebookShareButton url={baseurl +user.blog_slug} quote={user.blog_title}>
                      <img src= {Facebook} alt="Facebook" />
                      </FacebookShareButton>
                      <TwitterShareButton url={baseurl +user.blog_slug} title={user.blog_title}>
                      <img src= {Twitter} alt="Twitter"/>
                      </TwitterShareButton>
                      <LinkedinShareButton url={baseurl + user.blog_slug} title={user.blog_title}>
                      <img  src= {Instagram} alt="Instagram"/>
                      </LinkedinShareButton>
                      </span>
                                {/* <p>Would you like to be a part of this program?</p>
                                <a href="" className="btn-join-us">Join the event</a> */}
                              </MyDiv>
                        </MyDiv>
                    </aside>
                </Col>
            
          </Row>
     </Container>
</MyDiv>
  </>
  ))}
      <Postcomments/>
      </>
 );
  }

  export default SingleblogPage;