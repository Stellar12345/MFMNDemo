import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyDiv, HeadingTwo, PTag } from '../common/Common';
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <MyDiv className="mfmn-forms-page thankyou">
    <Container>
        <Row>
            <MyDiv className="top-heading">
            <h1>Thank You for Your Donation!</h1><br />
            <p>Your donation has been successfully submitted. We appreciate your support!</p><br /><br />
            <a class="more-btn" href="/donate" style={{ float: "initial"}}> More Donate</a>
            </MyDiv>
        </Row>
    </Container>
    </MyDiv>
  );
};

export default ThankYouPage;
