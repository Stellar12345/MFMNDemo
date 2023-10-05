import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { MyDiv, HeadingTwo, PTag, Section } from '../../common/Common';

function ForgotPassword() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  // Check for login status and redirect if necessary
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard/user-dashboard', { state: { isLoggedIn: true } });
    }
  }, [isLoggedIn, navigate]);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validationSchema = Yup.object().shape({
    user_email: Yup.string().required('Email is required').email('Invalid email format'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://mfmn.stellarsolutionsindia.com/admin/Api/Customers/resetPasswordRequest',
        { email: data.user_email }
      );
      if (response.data.status === 'success') {
        setMessage({
          status: response.data.status,
          text: response.data.message,
        });
      } else {
        setMessage({
          status: 'error',
          text: 'Error requesting password reset.',
        });
      }
  
    } catch (error) {
      setMessage({
        status: 'error',
        text: 'Error requesting password reset.',
      });
    }
  };
  

  return (
    <>
      <MyDiv className="mfmn-forms-page mfmn-login-info-page">
        <Container>
          <Row>
            <MyDiv className="top-heading">
              <HeadingTwo>Forgot <strong>Password</strong></HeadingTwo>
            </MyDiv>
          </Row>
          <Row className='info-forms-full'>
            <Col className="info-forms-filed" md={9} sm={12}>
            <Row>
            <MyDiv className="top-heading">
               <MyDiv className={`message ${message.status === 'success' ? 'success-message' : 'error-message'}`}>
                {message.text}
               </MyDiv>
            </MyDiv>
          </Row>
           
              <Form className="" id='signup' type="post" onSubmit={handleSubmit(onSubmit)}>
                <MyDiv className="info-forms-itmes">
                  <Row className='info-forms-itmes-list'>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Your Email"
                          {...register('user_email')}
                          isInvalid={!!errors.user_email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.user_email?.message}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className='login-itmes-list'>
                    <Col md={6}>
                      <Button type="submit" className="btn-mfmn-y">Reset Password</Button>
                      <a href="/login" className="btn-mfmn-outline">Return to Login</a>
                    </Col>
                  </Row>
                </MyDiv>
              </Form>
            </Col>
          </Row>
        </Container>
      </MyDiv>
    </>
  );
}

export default ForgotPassword;
