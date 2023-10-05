import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Row , Form , Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv,LabelTag,  HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../../common/Common';
import { FaEnvelope, FaLocationArrow, FaMap, FaMapMarked, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, IconName } from "react-icons/fa";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import jsonData from './country-list';

function Signup() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const panRegex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  
   const validationSchema = Yup.object().shape({
      
      from_name: Yup.string().required('First Name is required *')
         .min(3, 'First Name must be at least 3 characters *')
        .max(20, 'First Name must not exceed 20 characters *'),

         to_name: Yup.string().required('Last Name is required *')
        .min(1, 'Last Name must be at least 1 characters *')
        .max(20, 'Last Name must not exceed 20 characters *'),

        code: Yup.string().required('required *')
         .matches(phoneRegExp,'required *'),

         mobile_number: Yup.string().required('Phone Number is required *')
        .matches(phoneRegExp,"Phone Number is invalid *"),

        pan_number: Yup.string().required('PAN Number is required')
        .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, 'Invalid PAN number'),
       
        reply_to: Yup.string()
        .required('Email is required *')
        .email('Email is invalid *'),
     
        deadline: Yup.string().when("inquiry_topic", {
         is: val => val == "1",
         then: Yup.string().required("Numbers only *").max(10, 'Year 4 Digit only'),
       }),
       address: Yup.string().required('Address is required *')
        .max(150, 'Message must not exceed 150 characters *'),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(validationSchema)
    });
    const handleCountrySelection = (e) => {
      const selectedCountry = e.target.value;
      const country = jsonData.find(
        (country) => country.name === selectedCountry
      );
      setSelectedCountry(selectedCountry);
      setSelectedState("");
      setSelectedCity("");
      setStateOptions(country ? country.states : []);
      setCityOptions([]);
    };
  
    const handleStateSelection = (e) => {
      const selectedState = e.target.value;
      const state = stateOptions.find(
        (state) => state.name === selectedState
      );
      setSelectedState(selectedState);
      setSelectedCity("");
      setCityOptions(state ? state.cities : []);
    };
  
    const handleCitySelection = (e) => {
      setSelectedCity(e.target.value);
    };
  
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
               pan_number:'',
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
      pan_number:'',
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
  
  return (
    <>
    <MyDiv className="mfmn-forms-page">
    <Container>
      <Row>
      <MyDiv className="top-heading">
        <HeadingTwo>Sign <strong>Up</strong></HeadingTwo>
      </MyDiv>
     </Row>
      <Row className='info-forms-full'>
        <Col className="info-forms-filed" md={9} sm={12}>
        <Form className=""  id='signup' type="post" onSubmit={handleSubmit(onSubmit)}>
          <MyDiv className="info-forms-itmes">
            <Row className='info-forms-itmes-list'>
              <Col md={6}>
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
              <Col md={6}>
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
            <Row className='info-forms-itmes-list'>
              <Col md={6}>
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
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      Pan Number<sup>*</sup>
                      </Form.Label>
                      <Form.Control 
                        type='text'
                        name='pan_number'
                        class='form-control'
                        placeholder='Pan Number'
                        onChange={handleChange}
                        {...register('to_pan')}
                        className={`form-control ${errors.pan_number ? 'is-invalid' : ''}`}
                             />
                       <div className="invalid-feedback">{errors.pan_number?.message}</div>
                    </Form.Group>
              </Col>
            </Row>


            <Row className='info-forms-itmes-list'>
              <Col md={6}>
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
              </Col>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      Address<sup>*</sup>
                      </Form.Label>
                      <Form.Control 
                        type='text'
                        name='address'
                        class='form-control'
                        placeholder='Address'
                        onChange={handleChange}
                        {...register('address')}
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                             />
                       <div className="invalid-feedback">{errors.address?.message}</div>
                    </Form.Group>
              </Col>
            </Row>

            <Row className='info-forms-itmes-list'>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      Country<sup>*</sup>
                      </Form.Label>
                      {/* <select
                  name='inquiry_country'
                  {...register('inquiry_country')}
                  className={`inquiry_topic text-select form-control ${errors.inquiry_country ? 'is-invalid' : ''}`}>
                    <option value="">country1</option>
                    <option value="country2">country2</option>
                    <option value="country3">country3</option>
                </select> */}
                
     
                      <Form.Control
                        as="select"
                        className={`inquiry_topic text-select form-control ${errors.inquiry_city ? 'is-invalid' : ''}`}
                        value={selectedCountry}
                        onChange={handleCountrySelection}
                      >
                        <option className="d-none" value="">
                          Select Country
                        </option>
                        {jsonData.map((country, key) => (
                          <option key={key} title={country.code} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </Form.Control>
                {errors.inquiry_country && <div className="invalid-feedback">{errors.inquiry_country.message}</div>}
                    <div className="invalid-feedback">{errors.reply_to?.message}</div>
                    </Form.Group>

              </Col>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      State<sup>*</sup>
                      </Form.Label>
                      {/* <select  name='inquiry_state'  {...register('inquiry_state')}
                       className={`inquiry_topic text-select form-control ${errors.inquiry_state ? 'is-invalid' : ''}`}>
                        <option value="">state1</option>
                        <option value="state2">state2</option>
                        <option value="state3">state3</option>
                </select> */}
                <Form.Control
        as="select"
        className={`inquiry_topic text-select form-control ${errors.inquiry_city ? 'is-invalid' : ''}`}
        value={selectedState}
        onChange={handleStateSelection}
        disabled={!selectedCountry}
      >
        <option className="d-none" value="">
          Select State
        </option>
        {stateOptions.map((state, key) => (
          <option key={key} value={state.name}>
            {state.name}
          </option>
        ))}
      </Form.Control>
                  {errors.inquiry_state && <div className="invalid-feedback">{errors.inquiry_state.message}</div>}
                    <div className="invalid-feedback">{errors.reply_to?.message}</div>
                    </Form.Group>
              </Col>
            </Row>


            <Row className='info-forms-itmes-list'>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      City<sup>*</sup>
                      </Form.Label>
                      {/* <select
                  name='inquiry_city'
                  {...register('inquiry_city')}
                  className={`inquiry_topic text-select form-control ${errors.inquiry_city ? 'is-invalid' : ''}`}>
                    <option value="">city</option>
                    <option value="city1">city</option>
                    <option value="city2">city</option>
                </select> */}
                   <Form.Control
        as="select"
        className={`inquiry_topic text-select form-control ${errors.inquiry_city ? 'is-invalid' : ''}`}
        value={selectedCity}
        onChange={handleCitySelection}
        disabled={!selectedState}
      >
        <option className="d-none" value="">
          Select City
        </option>
        {cityOptions.map((city, key) => (
          <option key={key} value={city}>
            {city}
          </option>
        ))}
      </Form.Control>
                {errors.inquiry_country && <div className="invalid-feedback">{errors.inquiry_city.message}</div>}
                    <div className="invalid-feedback">{errors.reply_to?.message}</div>
                    </Form.Group>
              </Col>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      Pincode<sup>*</sup>
                      </Form.Label>
                      <Form.Control 
                        type='text'
                        name='to_pincode'
                        class='form-control'
                        placeholder='Pincode'
                        onChange={handleChange}
                        {...register('to_pincode')}
                        className={`form-control ${errors.to_pincode ? 'is-invalid' : ''}`}
                             />
                       <div className="invalid-feedback">{errors.to_pincode?.message}</div>
                    </Form.Group>
              </Col>
            </Row>
            <Row className='info-forms-itmes-list'>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      Password<sup>*</sup>
                      </Form.Label>
                      <Form.Control 
                      name="pass_to"
                      type="Password"
                      onChange={handleChange}
                      placeholder='password'
                      {...register('pass_to')}
                      className={`form-control ${errors.pass_to ? 'is-invalid' : ''}`
                      }
                      />
                    <div className="invalid-feedback">{errors.pass_to?.message}</div>
                    </Form.Group>
              </Col>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      Confirm Password<sup>*</sup>
                      </Form.Label>
                      <Form.Control 
                        type='password'
                        name='to_confirm'
                        class='form-control'
                        placeholder='Confirm Password'
                        onChange={handleChange}
                        {...register('to_confirm')}
                        className={`form-control ${errors.to_confirm ? 'is-invalid' : ''}`}
                             />
                       <div className="invalid-feedback">{errors.to_confirm?.message}</div>
                    </Form.Group>
              </Col>
            </Row>
            <Row className='info-forms-itmes-list'>
            <Col md={6}>
            <Form.Group  controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I Agree to Terms & Conditions*" />
                </Form.Group>
              </Col>
              </Row>
                <Row className='info-forms-itmes-list'>
                  <Col md={6}>
                        <Button type="submit" className="btn-mfmn-y">Sign Up</Button>
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

export default Signup;