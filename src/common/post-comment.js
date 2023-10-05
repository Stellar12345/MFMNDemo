import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Row , Form , Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv,LabelTag,  HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../common/Common';
import { FaEnvelope, FaLocationArrow, FaMap, FaMapMarked, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, IconName } from "react-icons/fa";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
function Postcomments() {


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  
   const validationSchema = Yup.object().shape({
      
      from_name: Yup.string().required('First Name is required *')
         .min(3, 'First Name must be at least 3 characters *')
        .max(20, 'First Name must not exceed 20 characters *'),
         to_name: Yup.string().required('Last Name is required *')
        .min(1, 'Last Name must be at least 1 characters *')
        .max(20, 'Last Name must not exceed 20 characters *'),
         code: Yup.string().required('requireds *'),
         mobile_number: Yup.string().required('Phone Number is required *')
        .matches(phoneRegExp,"Phone Number is invalid *"),
    
       
        reply_to: Yup.string()
        .required('Email is required *')
        .email('Email is invalid *'),
     
        deadline: Yup.string().when("inquiry_topic", {
         is: val => val == "1",
         then: Yup.string().required("Numbers only *").max(10, 'Year 4 Digit only'),
       }),
        message: Yup.string().required('Message is required *')
        .max(499, 'Message must not exceed 500 characters *'),
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
      axios.post('https://mfmn.stellarsolutionsindia.com/admin/Api/Contact_api/send_email',
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
               from_name: '',
               to_name: '',
               mobile_number: '',
               reply_to: '',
               message: '',
               code: '',
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
      from_name: '',
      to_name: '',
      mobile_number: '',
      reply_to: '',
      message: '',
      code: '',
   });
   
   function onChange(value) {
    console.log("Captcha value:", value);
  }
   const handleChange = (e) => {
      const value = e.target.value;
      setState({ ...state, [e.target.name]: value });
       console.log(state);
   };

  useEffect(() => {
    document.body.classList.add('bg-layout')
  
    return () => {
      document.body.classList.remove('bg-layout')
    }
  }, [])

  return (
    <>
         <section className="contactfrom">
            <Container>
                <Row className='d-flex flex-column pt-2'>
                <Col lg={8}>
                    <HeadingThree className="contact-form-title blog-commet-title">Share your <strong>comment</strong>
                    </HeadingThree>
                    </Col>
                <Col lg={9}>
                <Form className="mb-5 mt-4 pt-3" onSubmit={handleSubmit(onSubmit)} id='contactform' type="post">
                <Row>
                  <Col md="auto"className='col-md-6'>
                    <Form.Group className="mb-3">
                      <Form.Label>
                      First name<sup>*</sup>
                      </Form.Label>
                      <Form.Control 

                          name="from_name"
                          type="text"
                          onChange={handleChange}
                          placeholder='Enter first name'
                          {...register('from_name')}
                          className={`form-control ${errors.from_name ? 'is-invalid' : ''}`}
                      />
                    <div className="invalid-feedback">{errors.from_name?.message}</div>

                    </Form.Group>
                  </Col>
                  <Col md="auto"className='col-md-6'>
                    <Form.Group className="mb-3">
                      <Form.Label>
                      Last name<sup>*</sup>
                      </Form.Label>
                      <Form.Control 
                        type='tex'
                        name='to_name'
                        class='form-control'
                        placeholder='Enter last Name'
                        onChange={handleChange}
                        {...register('to_name')}
                        className={`form-control ${errors.to_name ? 'is-invalid' : ''}`}
                             />
                       <div className="invalid-feedback">{errors.to_name?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="auto" className='col-md-6'>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        Email<sup>*</sup>
                      </Form.Label>
                      <Form.Control 
                      name="reply_to"
                      type="email"
                      onChange={handleChange}
                      placeholder='Enter your email'
                      pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                      {...register('reply_to')}
                      className={`form-control ${errors.reply_to ? 'is-invalid' : ''}`
                      }
                      />
                    <div className="invalid-feedback">{errors.reply_to?.message}</div>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Row>
                      <Col >
                        <Form.Group className="mb-3">
                          <Form.Label>
                           Phone<sup>*</sup>
                          </Form.Label>
                          <Row>
                            <Col className='col-4'>
                              <Form.Control 
                              type='text'
                              name='code'
                              class='form-control'
                              placeholder='IND +91'
                              onChange={handleChange}
                              {...register('code')}
                              className={`form-control ${errors.code ? 'is-invalid' : ''}`}
                               />
                              <div className="invalid-feedback">{errors.code?.message}</div>

                              </Col>
                            <Col className='col-8'><Form.Control 
                              type='text'
                              name='mobile_number'
                              class='form-control'
                              placeholder='Enter phone number'
                              onChange={handleChange}
                              maxLength={13}
                              minLength={10}
                              pattern="[0-9]{10}"
                              {...register('mobile_number')}
                              className={`form-control ${errors.mobile_number ? 'is-invalid' : ''}`}
                               />
                                <div className="invalid-feedback">{errors.mobile_number?.message}</div>
                               </Col>


                          </Row>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Comments<sup>*</sup>
                    </Form.Label>
                    <Form.Control 
                     as="textarea"
                     type='text'
                     name='message'
                     maxLength="500"
                     onChange={handleChange}
                     placeholder='Enter your comments'
                     {...register('message')}
                     className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  />
                   <div className="invalid-feedback">{errors.message?.message}</div>
                  </Form.Group>
                </Row>
                <Row>
                <Col xs="auto pt-5">
                       <Button type="submit" className="mb-2">
                         Submit
                      </Button>
                      </Col>
                      </Row>
              </Form>
              </Col>
                </Row>
            </Container>
        </section>
    </>
  );
}

export default Postcomments;