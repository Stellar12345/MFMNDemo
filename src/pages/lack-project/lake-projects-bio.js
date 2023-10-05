import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section, HeadingFive } from '../../common/Common';


import dhanushree_img from "../../assets/img/watermanagement/lacke-bio/dhanushree.jpg";
import nimal_raghavan_img from "../../assets/img/watermanagement/lacke-bio/nimal-raghavan.jpg";

import dhanushree_popup from "../../assets/img//watermanagement/lacke-bio/dhanushree-popup.png";
import nimal_raghavan_popup from "../../assets/img//watermanagement/lacke-bio/nimal-raghavan-popup.png";


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Anchor from 'react-bootstrap/Anchor';


import { Link } from "react-router-dom";


// * Dhanushree - start * //

function Dhanushree (props) {
    const [lgShow, setLgShow] = useState(false);
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter Dhanushree" centered aria-modal="true" role="dialog" scrollable={true} id="preetha">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={4}>
                            <img src={dhanushree_popup} alt="Dhanushree_popup"/>
                        </Col>

                        <Col sm={12} md={12} lg={8} className="lf-modal-content">
                            <HeadingTwo>Ms. Dhanaasri Ponnusamy</HeadingTwo>
                            {/* <HeadingFive></HeadingFive> */}
                            {/* <PTag>Dhanaasri Ponnusamy is from an agriculture background, native of Sathyamangalam. Graduated in the fields of Botany and Law is passionate in environmental conservation and social works.</PTag> */}
                            <PTag>Dhanaasri Ponnusamy, born and raised in the picturesque Western Ghats mountain region, comes
from an agricultural background. With a solid educational foundation in Botany, she nurtures a
profound love for plants, animals, and the preservation of the natural environment. Furthermore,
Dhanaasri holds a law degree and is deeply committed to social welfare, law, and conservation.</PTag>
<PTag>Dhanaasri&#39;s extensive knowledge of botany, coupled with her deep-rooted passion for
environmental conservation, makes her an ideal addition to the MFMN project. Her understanding
of the intricate balance between flora, fauna, and their ecosystems enables her to contribute
meaningfully to the initiative. She is dedicated to protecting biodiversity and promoting sustainable
practices that benefit both the environment and communities.</PTag>
<PTag>Moreover, Dhanaasri&#39;s legal background empowers her to address environmental challenges
through the lens of justice and advocacy. Her passion for social welfare drives her to champion the
rights of marginalized communities and ensure equitable access to a healthy and sustainable
environment.</PTag>
<PTag>The expertise and dedication that Dhanaasri brings to the MFMN project make her an invaluable
asset. Her ability to bridge her knowledge of botany, law, and social welfare enables her to
contribute holistically to the project&#39;s goals. With Dhanaasri&#39;s involvement, the MFMN project can
make significant strides towards environmental conservation and community well-being.</PTag>
                            
                        </Col>
                    </Row>
            </Container>
        </Modal.Body>
    </Modal>
    );
  }

  // * Dhanushree - End * //

  // * Nimal - Start * // 

  function Nimal (props) {
    const [lgShow, setLgShow] = useState(false);
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter nimal" centered aria-modal="true" role="dialog" scrollable={true} id="nimal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={4}>
                        <img src={nimal_raghavan_popup} alt="Nimal"/>
                    </Col>

                    <Col sm={12} md={12} lg={8} className="lf-modal-content">
                        <HeadingTwo>Mr. Nimal Raghavan</HeadingTwo>
                        {/* <HeadingFive>Chairman & CEO Nanban Group of Companies</HeadingFive> */}
                        <PTag>Nimal Raghavan, an Engineer by profession is now an organic farmer and a social
activist. Nimal was born in an agricultural family, in Nadiyam village close to Thanjavur
district in Tamil Nadu. At 31 years of age, in 2018 he was devasted by the havoc left
behind by the Gaja cyclone in his hometown. That day he decided to quit his job in
Dubai and move back to Nadiyam to dedicate his life to the betterment of his homeland.</PTag>
<PTag>He developed a natural tendency since childhood to connect with others, be empathetic
and be more aware of others' needs. His active participation in NSS camps and social
awareness programs further ignited his passion to help others and shaped him to be more socially responsible.</PTag>
<PTag>His passion is towards the conservation and rejuvenation of water bodies while raising
awareness in his community. He has so far successfully restored 155 water bodies and
planted 16.20 lakh saplings. He uses modern techniques to restore the water bodies,therefore long-time sustenance is ensured.</PTag>
<PTag><strong>He recently won the Better India'sWater Warrior award, his work was selected among 1700+ participants across India.</strong></PTag>
<PTag>Currently, Nimal is focusing on raising awareness of climate change and finding
solutions, rejuvenation of water bodies, afforestation and reforestation, implementing
rainwater harvesting systems and developing Miyawaki forests. He is involved in schools
like conducting workshops on environmental awareness such as plastic use and wastage, the importance of trees and planting saplings with students.</PTag>
<PTag>He is now restoring lakes from Kanyakumari to Kashmir.Recently, he also started restoring lakes in working for African countries.</PTag>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    </Modal>
    );
  }

  // * Nimal - End * //




function Lackourpeople() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);

  return (
    <>
      <Section className="meet-sec">
       
            <Row>
                <Col sm={12} md={10} lg={10} xxl={8}>
                    <HeadingTwo className="restoration-text"> Our Team</HeadingTwo>
                </Col>
            </Row>

            <Row>
                               <Col sm={12} md={6} lg={4} className="modal-center">
                    <MyDiv className="body-card-imges">
                        <MyDiv className="body-content">
                            <Anchor variant="primary" onClick={() => setModalShow1(true)} id="gopala">
                                <img src={nimal_raghavan_img} alt="Nimal Raghavan"/>
                            </Anchor>
                            
                            <HeadingFour>Mr. Nimal Raghavan</HeadingFour>
                                {/* <PTag>Chairman & CEO<br></br>
                                Nanban Group of Companies</PTag> */}
                        </MyDiv>

                            <Nimal
                            show={modalShow1}
                            onHide={() => setModalShow1(false)}
                            />
                    </MyDiv>
                </Col>
                <Col sm={12} md={6} lg={4} className="modal-center">
                    <MyDiv className="body-card-imges">
                        <MyDiv className="body-content">
                            <Anchor variant="primary" onClick={() => setModalShow(true)} id="dhanushree">
                                <img src={dhanushree_img} alt="dhanushree"/>
                            </Anchor>
                            
                            <HeadingFour>Ms. Dhanaasri Ponnusamy</HeadingFour>
                                {/* <PTag><br></br>
                                </PTag> */}
                        </MyDiv>

                            <Dhanushree
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />
                    </MyDiv>
                </Col>

                
            </Row>

        
    </Section>

    </>

    );
}
export default Lackourpeople;