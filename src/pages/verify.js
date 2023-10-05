import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyDiv, HeadingTwo, PTag } from '../common/Common';
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Verification = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const [verificationStatus, setVerificationStatus] = useState('verifying');
    const [verificationMessage, setVerificationMessage] = useState('');

    useEffect(() => {
        async function verifyEmail() {
            try {
                const response = await axios.get(`https://mfmn.stellarsolutionsindia.com/admin/Api/Customers/verifyEmail/${token}`);

                if (response.data.success === true) {
                    setVerificationStatus('verified');
                } else {
                    setVerificationStatus('failed');
                }
                setVerificationMessage(response.data.message);
            } catch (error) {
                console.error('An error occurred:', error);
                setVerificationStatus('failed');
                setVerificationMessage('Error occurred while verifying email');
            }
        }

        if (token) {
            verifyEmail();
        }
    }, [token]);

    return (

        <MyDiv className="mfmn-forms-page thankyou">
            <Container>
                <Row>
                    <MyDiv className="top-heading">
                        <h1>Thank you for registering!</h1><br />
                        <PTag>{verificationMessage}</PTag><br /><br />
                        <a class="more-btn" href="/login" style={{ float: "initial" }}>Login</a>
                    </MyDiv>
                </Row>
            </Container>
        </MyDiv>

    );
};

export default Verification;
