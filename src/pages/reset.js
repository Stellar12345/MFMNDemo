import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingTwo } from '../common/Common';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';

const schema = Yup.object().shape({
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]+$/,
      'Password must contain at least one letter, one number, and one special character'
    ),
});

function ResetPassword() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  console.log(token);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `https://mfmn.stellarsolutionsindia.com/admin/Api/Customers/resetPassword/${token}`,
        { 
          new_password: data.newPassword,
          token: data.token
        }
        
      );
  
      if (response.data.status === 'success') {
        setMessage({
          status: 'success',
          text: response.data.message,
        });
      } else {
        setMessage({
          status: 'error',
          text: response.data.message,
        });
      }
    } catch (error) {
      setMessage({
        status: 'error',
        text: 'Error resetting password.',
      });
    }
  };
  
  return (
    <MyDiv className="mfmn-forms-page mfmn-login-info-page">
      <Container>
        <Row>
          <MyDiv className="top-heading">
            <HeadingTwo>Reset <strong>Password</strong></HeadingTwo>
          </MyDiv>
        </Row>
        <div className={`message ${message.status === 'success' ? 'success-message' : 'error-message'}`}>
          {message.text}
        </div>
        <Row className='info-forms-full'>
          <Col className="info-forms-filed" md={9} sm={12}>
          <Form className="" id='signup' type="post" onSubmit={handleSubmit(onSubmit)}>
  <MyDiv className="info-forms-itmes">
    <Row className='info-forms-itmes-list'>
      <Col md={12}>
        <Form.Group>
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            name="newPassword"
            placeholder="Enter Your New Password"
            {...register("newPassword")}
          />
          <Form.Control
            type="hidden"
            name="token"
            value={token} // Set the value of the hidden token field
            {...register("token")}
          />
          {errors.newPassword && (
            <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
              {errors.newPassword.message}
            </Form.Control.Feedback>
          )}
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
  );
}

export default ResetPassword;