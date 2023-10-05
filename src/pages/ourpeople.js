import React, { useState, useEffect } from 'react';
import Anchor from 'react-bootstrap/Anchor';
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import { MyDiv, HeadingOne, HeadingTwo, HeadingFour, HeadingFive, PTag, Section } from '../common/Common';
import axios from 'axios';
import parse from 'html-react-parser';
import { Button, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";


import Lackprojectbio from "../pages/lack-project/lake-projects-bio";

function OurPeople() {
  const baseurl = 'https://mfmn.stellarsolutionsindia.com/admin/';
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseurl + '/Api/ourpeople');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };
   
  return (
    <>
      <MyDiv>
        <section className="our-philosophy-banner our-people-banner">
          <Container>
            <Row>
              <Col md={12}>
                <HeadingOne className="restoration-text">Our People</HeadingOne>
              </Col>
            </Row>
          </Container>
        </section>
      </MyDiv>

      <Section className="meet-sec">
        <Container>
          <Row>
            <Col sm={12} md={10} lg={10} xxl={6}>
              <HeadingTwo className="restoration-text">Meet our skilled professionals who bring their expertise and creativity to work.</HeadingTwo>
            </Col>
          </Row>

          <Row className="our-people-info-top">
            {data.map((item) => (
              item.member_type === '1' && (
                <Col sm={12} md={6} lg={4} className="modal-center our-people-list" key={item.id}>
                  <MyDiv className="body-card-imges">
                    <MyDiv className="body-content">
                      <Anchor variant="primary" onClick={() => handleItemClick(item)}>
                        <img src={baseurl + item.ourpeople_image} alt="profile-img" />
                      </Anchor>
                      <HeadingFour>{item.ourpeople_title}</HeadingFour>
                      <PTag>{item.ourpeople_designation}</PTag>
                      <PTag>{item.ourpeople_company_name}</PTag>
                    </MyDiv>
                  </MyDiv>
                </Col>
              )
            ))}
          </Row>

          <Lackprojectbio/> 



          <Row>
            <Col sm={12} md={12} className="modal-center">
              <MyDiv className="body-card-content">
                <MyDiv className="body-content">
                  <HeadingTwo className="our-title-header">Our Advisory Board</HeadingTwo> 
                </MyDiv>
              </MyDiv>
            </Col>
            {data.map((item) => (
              item.member_type === '2' && (
                <Col sm={12} md={6} lg={4} className="modal-center our-people-list" key={item.id}>
                  <MyDiv className="body-card-imges">
                    <MyDiv className="body-content">
                      <Anchor variant="primary" onClick={() => handleItemClick(item)}>
                        <img src={baseurl + item.ourpeople_image} alt="profile-img" />
                      </Anchor>
                      <HeadingFour>{item.ourpeople_title}</HeadingFour>
                      <PTag>{item.ourpeople_designation}</PTag>
                      {/* <PTag>{item.ourpeople_company_name}</PTag> */}
                    </MyDiv>
                  </MyDiv>
                </Col>
              )
            ))}
          </Row>
        </Container>

        <Modal show={modalOpen} onHide={() => setModalOpen(false)} size="xl" scrollable={true} aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col sm={12} md={12} lg={4}>
                  <img src={baseurl + selectedItem?.ourpeople_popup_image} alt="profile-img" />
                </Col>

                <Col sm={12} md={12} lg={8} className="lf-modal-content">
                  <HeadingTwo>{selectedItem?.ourpeople_title}</HeadingTwo>
                  <HeadingFive>{selectedItem?.ourpeople_designation}</HeadingFive>
                 { selectedItem?.member_type === '1' && (
                  <HeadingFive>{selectedItem?.ourpeople_company_name}</HeadingFive>
                 )
                }
                  {selectedItem?.ourpeople_description && parse(selectedItem.ourpeople_description)}
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </Section>
    </>
  );
}

export default OurPeople;
