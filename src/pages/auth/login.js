import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import { MyDiv, HeadingTwo } from '../../common/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Define navigate here

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  useEffect(() => {
    if (isLoggedIn) {
      // Redirect the user to the dashboard or another page
      navigate('/dashboard/user-dashboard', { state: { isLoggedIn: true } });
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    axios.post('https://mfmn.stellarsolutionsindia.com/admin/Api/login', formData)
      .then(response => response.data)
      .then(data => {
        if (data.status === 'success') {
          setSuccessMessage('Your login was successful.');
          setErrorMessage('');
          localStorage.setItem('userData', JSON.stringify(data.user.id));
          localStorage.setItem('isLoggedIn', true);
          setTimeout(() => {
            navigate('/dashboard/user-dashboard', { state: { isLoggedIn: true } });
          }, 2000);
        } else {
          setSuccessMessage('');
          setErrorMessage(data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
 
  return (
    <>
      <MyDiv className="mfmn-forms-page mfmn-login-info-page">
        <Container>
          <Row>
            <MyDiv className="top-heading">
              <HeadingTwo>Login</HeadingTwo>
            </MyDiv>
          </Row>
          <Row className="info-forms-full">
            <Col className="info-forms-filed" md={9} sm={12}>
              <Form id="signup" onSubmit={handleSubmit(onSubmit)}>
                {successMessage && (
                  <Row>
                    <Col md={12}>
                      <div className="success-message text-center text-green">{successMessage}</div>
                    </Col>
                  </Row>
                )}
                {errorMessage && (
                  <Row>
                    <Col md={12}>
                      <div className="error-message text-center error-message">{errorMessage}</div>
                    </Col>
                  </Row>
                )}
                <MyDiv className="info-forms-itmes">
                  <Row className="info-forms-itmes-list">
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Email Address<sup>*</sup>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          {...register('email')}
                          placeholder="Enter Your Email"
                          isInvalid={errors.email}
                        />
                        {errors.email && (
                          <Form.Control.Feedback type="invalid">{errors.email.message}</Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="info-forms-itmes-list">
                    <Col md={12}>
                      <Form.Group className="">
                        <Form.Label>
                          Password<sup>*</sup>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          {...register('password')}
                          placeholder="Enter Password"
                          isInvalid={errors.password}
                        />
                        {errors.password && (
                          <Form.Control.Feedback type="invalid">{errors.password.message}</Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="login-itmes-list">
                    <Col md={6} sm={6}>
                      <Button type="submit" className="btn-mfmn-y">
                        Login
                      </Button>
                      <a href="/signup" className="btn-mfmn-outline">
                        Sign Up
                      </a>
                    </Col>
                    <Col md={6} sm={6} className="forget-pass-info">
                      <a href="/forgotpassword" className="forget-pass">
                        Forgot Password?
                      </a>
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

export default Login;
