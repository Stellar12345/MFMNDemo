import React, { useState, useEffect } from 'react';
/* API Services */
import ApiService from '../Api.service.js';

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Banner from "../assets/img/banner.png";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../common/Common';
import Ourteam from "../assets/img/our-team.png";
import Farming from "../assets/img/farming-icon.png";
import Pprograms from "../assets/img/our-programs.png";
import MotherNature from "../assets/img/mother-nature-img-desktop.png";
import Restoration from "../assets/img/restoration-img-desktop.png";
import Farmers from "../assets/img/works/land.jpg";
import Landicon from "../assets/img/land-icon.png";
import Harvesting from "../assets/img/works/water.jpg";
import Land from "../assets/img/works/awareness.jpg";
import Natural from "../assets/img/works/equity.jpg";
import Tracktor from "../assets/img/works/tracktor.png";
import customer_logo1 from "../assets/img/Home/customer-logo1.png";
import customer_logo2 from "../assets/img/Home/customer-logo2.png";
import customer_logo3 from "../assets/img/Home/customer-logo3.png";
import { Link } from "react-router-dom";
import axios from "axios";
import parse from 'html-react-parser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import CountUp from 'react-countup';
import { keys } from 'lodash';
import NewsHome from '../common/news-home';
import { HashLink } from 'react-router-hash-link';
// window.axios = axios;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

function Home() {
  // let token = document.head.querySelector('meta[name="csrf-token"]');
  // console.log({token});
  const baseurl = 'https://mfmn.stellarsolutionsindia.com/admin/';
  const validationSchema = Yup.object().shape({
      email: Yup.string()
      .required('Email id is required *')
      .email('Email id is invalid *'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = data => {
    // console.log(JSON.stringify(data, null, 2));
    axios.post('https://mfmn.stellarsolutionsindia.com/admin/Api/Contact_api/subscribe_email',
    JSON.stringify(data)).then((response) => {
       //console.log(response.status);
       document.getElementById("contactform").reset();
       if (response.status === 200) {
          Swal.fire({
             text: response.data,
             icon: "success",
             type: "success"
          });
          this.setState({
             email: '',
          });
       }
       else {
          Swal.fire({
             text: response.data,
             icon: "error",
             type: "error"
          });
       }
       //console.log(response.data);
    });
  };
 const [state, setState] = useState({
    email: '',
 });

 const setMovieKey = () => {
  const elem = document.getElementsByClassName('carousel-item active')[0]
}
 
const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
     //console.log(state);
 };

  
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      
        setLoading(true);
        const response = await axios.get(baseurl + "/Api/slider");
        setPosts(response.data);
        setLoading(false);
        console.log(response.data);
    }

    // Call the function
    loadPost();
}, []);

useEffect(() => {
  document.body.classList.add('bg-layout');

  return () => {
    document.body.classList.remove('bg-layout')
  }

}, [])


  return (
    <>
<Carousel interval={null} controls={false} onSlide={setMovieKey} >

{loading ? (
      <span></span>
      ) 
      :
      (posts.map((item,index) =>
          <Carousel.Item className='w-100'>
          {/* <img className="hide-for-mobile-only d-block w-100 mobile-bg" src= {Banner} alt="First slide"/> */}
          <img className="show-for-mobile-only  d-block w-100 mobile-bg" src= {baseurl + item.slider_image} alt="First slide"/>
          <Container className="Home-banners">
            <Row>
            <Col sm={5} md={5} className="banner-content-items">
                <MyDiv className={"cap1"} key={index}>
                    <MyDiv className='banner-card'>
                    <MyDiv className='banner-text'>
                      <h3>{item.slider_title}</h3>
                      {parse(item.slider_description)}
                      {/* <a href={item.slider_button_link} className="btn-outline-secondary btn-aligns" >{item.slider_button_text}</a> */}

                      <HashLink  to={item.slider_button_link} className="btn-outline-secondary btn-aligns">{item.slider_button_text}</HashLink >       

                      </MyDiv>
                    </MyDiv>
                  </MyDiv>
                  </Col>
                  <Col sm={7} md={7} className='p-0 d-none d-sm-block'>
                    <MyDiv className={"cap"}>
                        <MyDiv className='banner-img'>
                          <img  className="inner-banner" src= {baseurl + item.slider_image}  alt="inner"/>
                        </MyDiv>
                      </MyDiv>
                  </Col>
                  {/* <PTag className="slider-count">1/3</PTag> */}
                </Row>
            </Container>
        </Carousel.Item>
             )
      )
  } </Carousel>


      {/* archivement counter section */}
      <NewsHome/>

      <MyDiv className="our-archivement">
          <Container>
                <Row>
                  <HeadingOne className="top-title">Our <strong>Achievements</strong> so far</HeadingOne>
                </Row>
                <Row>
                <Col sm={4} md={4} className={"our-achive-list"}>
                 <MyDiv className="our-achive-inner-desc">
                  <Row>
                    <Col sm={4} xs={4} className={"ach-icon"}>
                      <img src={Ourteam} className="" alt="our-team" />
                  </Col>
                    <Col sm={8} xs={8} className={"ach-desc"}>
                    <CountUp start={0} end={150} enableScrollSpy >
                    {({ countUpRef }) => (
                        <HeadingFour>
                          <span ref={countUpRef}/>+ 
                          </HeadingFour>
                      )}
                </CountUp>
                    
                      <p>Water bodies restored<br className=""/></p>
                    </Col>
                    </Row>
                 </MyDiv>
                </Col>
                <Col sm={4} md={4} className={"our-achive-list"}>
                <MyDiv className="our-achive-inner-desc">
                  <Row>
                    <Col sm={4}  xs={4} className={"ach-icon"}>
                    <img src={Pprograms} className="" alt="farming" />
                      {/* <img src={Farming} className="" alt="farming" /> */}
                  </Col>
                    <Col sm={8} xs={8} className={"ach-desc"}>
                    <CountUp start={0} end={10000}  enableScrollSpy >
                    {({ countUpRef }) => (
                        <HeadingFour>
                          <span ref={countUpRef}/>+ 
                          </HeadingFour>
                      )}
                </CountUp>
                      <p>Farmers converted to natural farming methods</p>
                    </Col>
                    </Row>
                 </MyDiv>
                </Col>
                <Col sm={4} md={4} className={"our-achive-list"}>
                <MyDiv className="our-achive-inner-desc">
                  <Row>
                    <Col sm={4}  xs={4} className={"ach-icon"}>
                      {/* <img src={Pprograms} className="" alt="our-team" /> */}
                      <img src={Landicon} className="" alt="our-team" />
                  </Col>
                    <Col sm={8}  xs={8} className={"ach-desc"}>
                    <CountUp start={0} end={50000} enableScrollSpy >
                    {({ countUpRef }) => (
                        <HeadingFour>
                          <span ref={countUpRef}/>+ 
                          </HeadingFour>
                      )}
                </CountUp>
                      <p>Hectares of land converted<br className=""/></p>
                    </Col>
                    <div id="mfmnnature"></div>
                    </Row>
                 </MyDiv>
                </Col>
                </Row>
                </Container>
      </MyDiv>
      <MyDiv className="welcom-mo-mon" > 
          <Container id="Mfmn-foundation">
                <Row>
                  <HeadingTwo className="title-text">Mothers for <strong>Mother Nature</strong></HeadingTwo>
                </Row>
                <Row>
                <Col sm={6} className={"our-mo-mon-desc"}>
                <p>
                  Agriculture was developed by farmer communities approximetly 10,000 years ago when human began to domesticate plants and animals. Agriculture helps to reduce poverty, spur economic development, and improve food security for 80% of the world's poor, who live in rural areas and work mainly in farming. While farming is essential to propel life, those who work in this industry often face poverty, poor working conditions and economic instability. Mothers for Mother Nature aims to address the multifaceted inequities faced by farmers and lead the transition to greener farming practices so that all farmers may know prosperity.
                  </p>
                  <p>
                  MFMN is an initiative by Nanban Foundation partnering with Vanagam. Our mission is to empower farmers so that they will reach a place of financial freedom and transition to farming methods that support the earth while producing healthy food for all.
                  </p>
                  <p>
                  Due to the multifaceted nature of the problems faced by Indian farmers, Mothers for Mother Nature took a multi-pronged solution to supporting farmers.
                  </p>
                  <p>
                  Many farmers do not have the starting capital to support a transition to Regenerative Agriculture based practices. Mothers for Mother Nature works to address this problem by providing 3-years of financial support to farmers implementing more sustainable farming methods.
                  </p>
                  <p>Due to the high number of independent farmers in India, system organization has been historically difficult. Mothers for Mother Nature works to support this complexity through the launch OrgFarmer. OrgFarmer is an online marketplace that creates a communication pathway between farmers and consumers. It also enables widespread data collection to support regional growth strategies and increase crop diversification. This system was designed with the intention to empower farmers to design the systems in which they operate.</p>
                  {/* <Link to={"javascript:void(0)"} className="more-btn">Know more</Link> */}
                 </Col>
                <Col sm={6} className={"our-wel-imges"}>
                <img src={MotherNature} className="" alt="our-team" />
                </Col>

                </Row>
          </Container>
      </MyDiv>

      <MyDiv className="restoration">
          <Container>
                <Row>
                <Col md={12}>
                  <HeadingTwo className="restoration-text"><strong>Restoration & Rejuvenation</strong><br className='shwo-for-mobile-only'/> of water bodies</HeadingTwo>
                  </Col>
                </Row>
                <Row>
                <Col md={6} className={"restoration-imges m-0"}>
                <img src={Restoration} className="img-responsive" alt="restoration" />
                </Col>
                <Col md={6} className={"restoration-desc"}>
                  <p>Problems with water system maintenance in India have caused widespread community and agricultural water shortages. When flooding from heavy rain enters water collection systems, dirt and debris pile-up which causes disruptions to water flow and decreases water quality. In some cases, the sediment buildup is so extreme that the water body dries up completely. Nanban partnered with Nimal Raghavan to combat this issue.</p>
                  {/* <p class='restoration-paragraph'>Sample title for this section and will be replaced with a draft title later                  </p> */}
                  <p>Nimal has been initiating aquatic restoration through the process of desilting. This is when silt and sediment are pumped out of water bodies to support water flow and capacity. To strengthen the integrity of water body barriers, over 1.8 million native trees were planted surrounding the water bodies to increase the stability and strength of the foundation. By using these approaches, Nimal has restored 158 water bodies which has improved the lives of millions.</p>
                  <p>Nanban partnered with Nimal in 2022 to provide the financial support needed to allow this restoration work to spread across India. The mission behind this work is to restore conditions so that no farmers in India will suffer due to water constraints.</p>
                  <Link to={"/watermanagement"} className="more-btn">Know more</Link>
                 </Col>
                </Row>
          </Container>
      </MyDiv>

      <MyDiv className="works">
          <Container>
                <Row>
                <Col md={6} sm={12} className='restor-works'>
                  <HeadingTwo className="restoration-text">Our<strong> Latest Works</strong></HeadingTwo>
                  <p>Nanban is working to empower farmers and spread the tools of alternative farming methods that support the planet. See below for some of our recent projects.</p>
                  </Col>
                </Row>
                <Row className="work-section">
                    
                      <Col sm={3}>
                        <MyDiv className="work-section-inner">
                        <img src={Farmers} alt="image-work" />
                        <h4>Land Nourishment</h4>
                        <p>We are working with farmers to improve soil health by reducing chemical inputs and increasing organic material</p>
                          </MyDiv>
                      </Col>
                      <Col sm={3}>
                      <MyDiv className="work-section-inner">
                        <img src={Harvesting} alt="image-work" />
                        <h4>Water Restoration</h4>
                        <p>We are working with communities and community leaders to restore natural water bodies</p>
                          </MyDiv>
                      </Col>
                      <Col sm={3}>
                      <MyDiv className="work-section-inner">
                        <img src={Land} alt="image-work" />
                        <h4>Awareness</h4>
                        <p>Through this work we are partnering with communities to provide training and critical resources to support transition to sustainable farming practices</p>
                          </MyDiv>
                      </Col>
                      <Col sm={3}>
                      <MyDiv className="work-section-inner">
                        <img src={Natural} alt="image-work" />
                        <h4>Equity</h4>
                        <p>This work is liberating farming communities and proppeling them to a place of financial freedom</p>
                          </MyDiv>
                      </Col>
                      {/* <Col sm={12} className='works-button text-center'>
                      <MyDiv className="work-section-inner ">
                      <Link to="#" className="more-btn">Know more</Link>
                      </MyDiv>
                      </Col> */}
                </Row>
          </Container>
      </MyDiv>

      <MyDiv className="lets-us-work">
      <Container>
        <Row>
          <MyDiv className="col-sm-6 left-tleft-info">
            <MyDiv className="tracktor-icon hide-for-small-only">
            <img src={Tracktor} alt="roller-compactor" />
            </MyDiv>
            
            <MyDiv className="live_project-info">
            <HeadingThree>Live. Grow. Protect.</HeadingThree>
            <PTag>We keep you updated with our works. </PTag>
            </MyDiv>
          </MyDiv>
          <MyDiv className="col-sm-6">
              <MyDiv className="newsletter-subscription-info">
              <form onSubmit={handleSubmit(onSubmit)} id='contactform' type="post">
                <MyDiv className="subscription-inner">
                  <MyDiv className="subscription-inner-email-fun">

                  <input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      placeholder='Enter your email ID'
                      {...register('email')}
                      className={`text-input form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                  {/* <input type="email" className="form-control text-input" placeholder="Enter your email ID" name='email' id='email' aria-describedby="emailHelp" /> */}
                  <button type="submit" className="btn-newsletter">Let me know</button> 
                  <div className="invalid-feedback">{errors.email?.message}</div>  
                  </MyDiv>            
                </MyDiv>
                
                </form>
              </MyDiv>
          </MyDiv>
          <MyDiv className="mobile-only-show-tracktor">
          <img src={Tracktor} alt="roller-compactor" />
          </MyDiv>
        </Row>
      </Container>
    </MyDiv>

<Section className="our-supporter">
    <MyDiv className="our-supporter-innner">
        <Container>
          <Row>
            <MyDiv className="supporter-top-title">
              <HeadingThree>Our <strong>Supporters</strong></HeadingThree>
            </MyDiv>
          </Row>
          <Row className="supporter-itme">
            <Col sm={4} className="supporter-list">
              <MyDiv className="supporter-list-inner">
              <img className="supporter-logo"  src= {customer_logo1} alt="Vanagam" />
              <MyDiv className="supporter-desc">
                <p>Nammalvar Ecological Foundation, Vanagam (https://vanagam.org/) , Karur - an institution founded and nurtured by Nammalvar himself. The current initiative has been made possible by the efforts of the Managing Trustee Thiru. Marutham Kumar from Vanagam.</p>
              </MyDiv>
              </MyDiv>
            </Col>
            <Col sm={4} className="supporter-list">
              <MyDiv className="supporter-list-inner">
              <img className="supporter-logo"  src= {customer_logo2} alt="nanban foundation" />
              <MyDiv className="supporter-desc">
                <p>The word 'nanban' literally means 'friend' in the classic Indian language Tamil. True to its meaning, Nanban's sole vision is helping the community at large attain financial freedom and supporting the underprivileged through socially relevant initiatives.</p>
              </MyDiv>
              </MyDiv>
            </Col>
            <Col sm={4} className="supporter-list">
              <MyDiv className="supporter-list-inner">
              <img className="supporter-logo"  src= {customer_logo3} alt="Vanagam" />
              <MyDiv className="supporter-desc">
                {/* <p>Namsandhai Uzhavar Urpathiyaalar Kuzhu and Aivanam Producer Company, Nilgiris - A producer organization with more than 1000 members and a producer company that brings 10 seed saver's initiatives together is represented in the Multiversity venture by Thiru. Shanmuganathan.</p> */}
                <p>Nanban initiatives and Yunkawasi joined forces to implement a project with indigenous communities in the Andes of Peru, to provide assistance and support for maintaining the traditional agricultural practices that Ancient Peruvians established millenia ago.</p>
              </MyDiv>
              </MyDiv>
            </Col>
            
          </Row>
        </Container>
    </MyDiv>
</Section>


      </>

  );
}

export default Home;
