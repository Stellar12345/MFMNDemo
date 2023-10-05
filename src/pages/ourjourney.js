import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import axios from 'axios';
import MyBackgroundImage from '../assets/img/ourjourney/our-journey-banner.png';
import parse from 'html-react-parser';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, HeadingFive, LabelTag, Section } from '../common/Common';
import Contactform from "../common/contactform.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tractor from "../assets/img/ourjourney/our-journey-tractor.png";
import Ourjourneys from '../assets/img/ourjourney/ourjourney.jpg';
import Prakriti_foundation from '../assets/img/ourjourney/prakriti-foundation.jpg';
import { Link } from "react-router-dom";

function Ourjourney() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const baseurl = 'https://mfmn.stellarsolutionsindia.com/admin/';
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]); // Provide empty array as default value

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(baseurl + "Api/ourjourney");
        console.log("API Response:", response.data); // Log the API response to the console
        // Assuming the API response is an array of objects
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          setPosts([]); // Set an empty array if the response is not an array
        }
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setPosts([]); // Set an empty array in case of an error to prevent 'posts.map is not a function'
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    loadPost();
  }, []);


  return (
   <>
      <MyDiv >
        <section className="our-philosophy-banner regenerative-agriculture-banner" style={{background:`url(${MyBackgroundImage}) no-repeat no-repeat center center / cover`}}>
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Our Journey</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

    <MyDiv className='ourjourney-section right-img-relative-part' >

      <section className="journey-sec ">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <MyDiv className="left-title-content">
                <HeadingTwo className="restoration-text">Nanban foundation started on this monumental journey to enable farmers in india lead a dignified life. </HeadingTwo>
              </MyDiv>
              <MyDiv className="left-text-content">
                <PTag>In 2011, Sakthi Palani Gounder took the initiative to support farmers and protect the environment. it was during this time that he crossed paths with Nammalvar, a renowned figure working tirelessly to assist farmers and promote the shift to natural farming techniques. The profound impact of Nammalvar's tireless effort left an indelible mark on Sakthi, prompting him to collabrote directly with Nammalvar and whole heartedly embrace his teachings. He began implementing these methods on his own farm and actively aided other farmers in making the transition.</PTag>
                <PTag>A decade later, when Nanban Foundation was formed, there was a collective vision among its founders and directors to support farmers on their path. During this time, Nanban Sakthi put forth a sustainable approach to assist farmers, emphasizing not only their present circumstances but also aiding their transition towards natural farming practices. Recognizing the importance of this cause, Nanban GK & Mani agreed to this proposal, Nanban GK extended the financial support to advance the transition process for farmers. It was within the Nanban Foundation, where the convergence of shared objectives sparked fruitful discussions on how to best support farmers.</PTag>
                <PTag>This marked the birth of Mothers for Mother Nature, an organization with a mission to offer economic support, educational tools, and training for farmers seeking to adopt greener and more sustainable farming methods. The ultimate goal of Mother for Mother Nature is to extend these environmentally friendly farming practices worldwide, ensuring that all farmers can thrive and achieve prosperity.</PTag>
                <PTag>Nanban Preetha joined the cause to lead this movement world wide successfully, with her unwavering dedication and the collective efforts of Nanban Foundation, MFMN movement has gained momentum, inspiring a positive transformation in farming practices and nurturing a harmonious relationship between humanity and nature.</PTag>
                </MyDiv>
            </Col>
            <Col md={12} lg={6}>
              <MyDiv className="right-part-top-img">
                <MyDiv className="right-part-inner-image">
                <img src={Ourjourneys} alt="Ourjourneys" />
                </MyDiv>
           

              </MyDiv>
              {/* <MyDiv className="right-prakriti-info">
            <img src={Prakriti_foundation} alt="Prakriti foundation" />
            </MyDiv> */}
            <MyDiv className="right-part-top-img right-prakriti-outline">
                <MyDiv className="right-part-inner-image">
                <img src={Prakriti_foundation} alt="Prakriti foundation" />
                </MyDiv>
           

              </MyDiv>
            </Col>
          </Row>
       </Container>
      </section>
      {loading ? (
        <span>Loading...</span>
      ) : posts.length === 0 ? (
        <p>&nbsp;</p>
      ) : (
        <section className="slick-slider our-journey-info">
          <Container className="our-journey-slide">
            <Row className="owl-carousel">
              <Col md={12} className="our-journey-relative-point">
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={1000}
                  containerClass="carousel-container owl-stage"
                  removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {posts.map((item) => (
                    <Col lg={3} md={2} className="slideimage" key={item.id}>
                      <MyDiv className="owl-item cloned">
                        <MyDiv className="item carousel-items">
                          <MyDiv className="top" key={item.id}>
                            <HeadingTwo>{item.ourjourney_title}</HeadingTwo>
                            <HeadingFive>{parse(item.ourjourney_description)}</HeadingFive>
                          </MyDiv>
                          <MyDiv className="bottom">
                            <HeadingFive>{item.ourjourney_month}</HeadingFive>
                            <HeadingFive><strong>{item.ourjourney_year}</strong></HeadingFive>
                          </MyDiv>
                        </MyDiv>
                      </MyDiv>
                    </Col>
                  ))}
                </Carousel>
                <MyDiv className="tractor-section text-center">
                <img src={tractor} className="image" alt="image" />
              </MyDiv>
              </Col>
            </Row>
          </Container>
        </section>
      )}
     
      <Contactform />
    </MyDiv>
    </>

  );
}

export default   Ourjourney;
