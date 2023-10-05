import React from "react";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";
import { MyDiv, PTag } from '../common/Common';
import Container from 'react-bootstrap/Container';
import Facebook from '../assets/img/Footer/fb-icon.png';
import Insta from '../assets/img/Footer/insta-icon.png';
import Twitter from '../assets/img/Footer/twitter.png';
import Youtube from '../assets/img/Footer/Youtube.png';


function Footer(){
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    return(
        <>
        <MyDiv className="inner-page-footer links">
            <Container className="footer-container">
                <Row>
                <Col  md={2} className="footer">
                    <div className="footer-bottom-info">
                        <h5>Who we are</h5>
                        <ul className="footer-nav ms-auto">
                            <li className="footer-item mx-0"><a className="footer-link" href="/aboutus">Know About us</a></li>
                            <li className="footer-item mx-0"><a className="footer-link" href="/ourjourney">Our journey</a></li>
                            <li className="footer-item mx-0"><a className="footer-link" href="/ourphilosophy">Our philosophy</a></li> 
                            <li className="footer-item mx-0"><a className="footer-link" href="/ourpeople">Our people</a></li> 
                            <li className="footer-item mx-0"><a className="footer-link" href="/howwework">How we work</a></li>                
                            {/* <li className="footer-item mx-0"><a className="footer-link" href="/newsnevents">News & events</a></li>  */}
                        </ul>
                    </div>
                    </Col>
                    <Col  md={3}  className="footer">
                    <div className="footer-bottom-info">
                        <h5>What we do</h5>
                        <ul className="footer-nav ms-auto">
                        <li className="footer-item mx-0"><a className="footer-link" href="/helpingfarmer">Helping farmers</a></li>
                        <li className="footer-item mx-0"><a className="footer-link" href="/naturalwayoffarming">Natural way of farming training</a></li>
                        <li className="footer-item mx-0"><a className="footer-link" href="/watermanagement">Water management</a></li> 
                        <li className="footer-item mx-0"><a className="footer-link" href="/healthierfood">Healthier food for all</a></li> 
                        <li className="footer-item mx-0"><a className="footer-link" href="/advancingsustainability">Advancing sustainability</a></li>                
                        <li className="footer-item mx-0"><a className="footer-link" href="/regenerativeagriculture">Regenerative agriculture</a></li> 
                        </ul>
                    </div>
                    </Col>
                    <Col  md={2}  className="footer">
                    <div className="footer-bottom-info">
                        <h5>Where we work</h5>
                            <ul className="footer-nav ms-auto">
                            <li className="footer-item mx-0"><a className="footer-link" href="/location">Tamil Nadu</a></li>
                            <li className="footer-item mx-0"><a className="footer-link" href="/location">Odisha</a></li>
                            <li className="footer-item mx-0"><a className="footer-link" href="/location">Yunkawasi</a></li> 
                            <li className="footer-item mx-0"><a className="footer-link" href="/location">USA</a></li> 
                            
                        </ul>
                    </div>
                    </Col>
                   
                    <Col  md={2}  className="footer">
                    <div className="footer-bottom-info">
                        <h5>Support</h5>
                        <ul className="footer-nav ms-auto">
                        <li className="footer-item mx-0"><a className="footer-link" href="/workwithus">Work with us</a></li>
                        {/* <li className="footer-item mx-0"><a className="footer-link" href="javascript:void(0)">Donate</a></li> */}
                        <li className="footer-item mx-0"><a className="footer-link" href="/csrpartnership">CSR partnership</a></li>
                        <li className="footer-item mx-0"><a className="footer-link" href="/blog">Blog</a></li> 
                        <li className="footer-item mx-0"><a className="footer-link" href="/gallery">Gallery</a></li>     
                        <li className="footer-item mx-0"><a className="footer-link" href="/contactus">Contact Us</a></li> 
                        </ul>
                    </div>
                    </Col>  
                    <Col  md={3}  className="footer">
                    <div className="footer-bottom-info">
                        <h5>Follow us on</h5>
                        <a className="mail-us social" target="_blank" href="https://www.facebook.com/people/Nanban-Mfmn/pfbid02EpduZABMrY3HD5F5DbbrQRSpgumzJD9KeFDjizSKHtqBbyKD13sJBtbe9Zr2dpGQl/"><img src={Facebook}  /></a>	
                        <a className="mail-us social"  target="_blank" href="https://twitter.com/mfmnnanban"><img src={Twitter}  /></a>	
                         <a className="mail-us social"  target="_blank" href="https://www.instagram.com/nanbanmfmn/"><img src={Insta}  /></a>	
                        <a className="mail-us social"  target="_blank" href="https://www.youtube.com/@MFMNNanban"><img src={Youtube}  /></a>	
                    </div>
                    <br />  <br />
                    {/* <div className="footer-bottom-info">
                        <h5>Reach us</h5> 
                        <a className="mail-us" href="mailto:contact@nanbanmfmn.org">contact@nanbanmfmn.org</a>	
                    </div> */}
                    </Col>  
                         
                </Row>
            </Container>
            {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <FaAngleUp />
        </button>
      )}
            <MyDiv className="inner-page-footers">
       <MyDiv className=" inner-page-btm-footer">
            <Container className="footer-container">
                <Row>
                    <Col md={12}>
                        <div className="footer-bottom-info">
                            <h4>© 2023 Mothers for Mother Nature. All Rights Reserved.</h4>
                        </div>
                    </Col>                                                  
                </Row>
            </Container>
            </MyDiv>
       </MyDiv>
       </MyDiv>
       {/* <MyDiv className="inner-page-footer">
       <MyDiv className=" inner-page-btm-footer">
            <Container className="footer-container">
                <Row>
                    <Col md={12}>
                        <div className="footer-bottom-info">
                            <h4>© 2022 Mothers for Mother Nature. All Rights Reserved.</h4>
                        </div>
                    </Col>                                                  
                </Row>
            </Container>
            </MyDiv>
       </MyDiv> */}
    </>
        
    )
}
export default Footer;