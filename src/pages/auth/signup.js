import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Row , Form , Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingTwo, } from '../../common/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [setSuccess] = useState('');

  useEffect(() => {
    // Fetch countries on component mount
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    // Make API call to fetch countries
    fetch('https://mfmn.stellarsolutionsindia.com/admin/Api/Allcountry/')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error(error));
  };

  const fetchStates = (countryId) => {
    // Make API call to fetch states based on the selected country
    fetch(`https://mfmn.stellarsolutionsindia.com/admin/Api/Allcountry/states/${countryId}`)
      .then(response => response.json())
      .then(data => setStates(data))
      .catch(error => console.error(error));
  };

  const fetchCities = (stateId) => {
    // Make API call to fetch cities based on the selected state
    fetch(`https://mfmn.stellarsolutionsindia.com/admin/Api/Allcountry/city/${stateId}`)
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error(error));
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setSelectedState('');
    setSelectedCity('');
    if (selectedCountry) {
      fetchStates(selectedCountry);
      setStates([]);
      setCities([]);
    } else {
      setStates([]);
      setCities([]);
    }
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
    setSelectedCity('');
    if (selectedState) {
      fetchCities(selectedState);
    } else {
      setCities([]);
    }
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
  };


  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required').min(3, 'First Name must be at least 3 characters').max(20, 'First Name must not exceed 20 characters').matches(/^[A-Za-z].*$/, 'First Name empty space is not allowed'),
    lastname: Yup.string().required('Last Name is required').min(1, 'Last Name must be at least 1 character').max(20, 'Last Name must not exceed 20 characters').matches(/^[A-Za-z].*$/, 'Last Name empty space is not allowed'),
    code: Yup.string().required('Code is required'),
    mobile_number: Yup.string().required('Phone Number is required'),
    // pan_number: Yup.string().required('PAN Number is required'),
    address:Yup.string().required('Address is required').matches(/^[A-Za-z].*$/, 'Address is empty space is not allowed'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    country: Yup.string().test('required', 'Please select an option', value => value !== ''),
    // country: Yup.string().required('Select Country'),
    state: Yup.string().required('Select State'),
    city: Yup.string().required('Select City'),
    to_pincode: Yup.string().required('Pincode is required'),
    pass_to: Yup.string().required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]+$/,
      'Password must contain at least one letter, one number, and one special character'
    ),
    confirm_to: Yup.string().oneOf([Yup.ref('pass_to'), null], 'Passwords must match').required('Confirm Password is required'),
    agree: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions.').required('You must agree to the terms and conditions.'),

  });
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data, e) => {
    setSubmitting(true); // Set submitting to true
    setLoading(true); // Set loading to true
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://mfmn.stellarsolutionsindia.com/admin/Api/Customers');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        setSuccessMessage(xhr.responseText);
        setIsSuccess(true);
        setLoading(false);
        setSubmitting(false);
        // Reset the form fields
        reset();
        setSelectedCountry('');
        setSelectedState('');
        setSelectedCity('');
      } else {
        setSuccessMessage(xhr.responseText);
        setIsSuccess(false);
        setLoading(false);
        setSubmitting(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
    xhr.onerror = function () {
      setLoading(false); 
      setSuccess(false);
      setSubmitting(false); // Set submitting to false on error
      setSuccessMessage("An error occurred'"); // Set the success message
      window.scrollTo({ top: 0, behavior: 'smooth' });

    };
    xhr.send(JSON.stringify(data));
    
  };
  
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (isLoggedIn) {
    // Redirect the user to the dashboard or another page
    navigate('/dashboard/user-dashboard', { state: { isLoggedIn: true } });
  }


  return (
    <>
    <MyDiv className="mfmn-forms-page">
    <Container>
      <Row>
      <MyDiv className="top-heading">
        <HeadingTwo>Sign <strong>Up</strong></HeadingTwo>
      </MyDiv>
      {!errors.email && successMessage && (
        <MyDiv className="top-heading">
          <div className={`success-message ${isSuccess ? 'text-green' : 'text-red'}`}>
            {successMessage}
          </div>
        </MyDiv>
      )}
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
                          name="firstname"
                          type="text"
                          placeholder='Enter first name'
                          {...register('firstname')}
                          className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                      />
                    <div className="invalid-feedback">{errors.firstname?.message}</div>

                    </Form.Group>
              </Col>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      Last name<sup>*</sup>
                      </Form.Label>
                      <Form.Control 
                        type='tex'
                        name='lastname'
                        class='form-control'
                        placeholder='Enter last Name'
                        {...register('lastname')}
                        className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                             />
                       <div className="invalid-feedback">{errors.lastname?.message}</div>
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
                      name="email"
                      type="email"
                      placeholder='Enter your email'
                      pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                      {...register('email')}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`
                      }
                      />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                    </Form.Group>
              </Col>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      Pan Number
                      </Form.Label>
                      <Form.Control 
                        type='text'
                        name='pan_number'
                        class='form-control'
                        placeholder='Pan number'
                        {...register('pan_number')}
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
                      <Form.Control
                      as="select"
                      {...register('country')}
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      className={`form-select ${!selectedCountry && errors.country ? 'is-invalid' : ''}`}
                    >
                      <option value="">Select Country</option>
                      {countries.map(country => (
                        <option key={country.c_id} value={country.c_id}>
                          {country.c_name}
                        </option>
                      ))}
                    </Form.Control>
                    {/* <div className="invalid-feedback">{errors.country?.message}</div> */}
                    {!selectedCountry && <div className="invalid-feedback">{errors.country?.message}</div>}
                    </Form.Group>

              </Col>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      State<sup>*</sup>
                      </Form.Label>
                      <Form.Control
                          as="select"
                          {...register('state')}
                          value={selectedState}
                          onChange={handleStateChange}
                          className={`form-select ${!selectedState && errors.state ? 'is-invalid' : ''}`}
                          
                        >
                          <option value="">Select State</option>
                          {states.map(state => (
                            <option key={state.state_id} value={state.state_id}>
                              {state.state_name}
                            </option>
                          ))}
                        </Form.Control>
                    {/* <div className="invalid-feedback">{errors.state?.message}</div> */}
                    {!selectedState && <div className="invalid-feedback">{errors.state?.message}</div>}
                    </Form.Group>
              </Col>
            </Row>

            <Row className='info-forms-itmes-list'>
              <Col md={6}>
              <Form.Group className="mb-3">
                      <Form.Label>
                      City<sup>*</sup>
                      </Form.Label>
                      <Form.Control
                as="select"
                {...register('city')}
                value={selectedCity}
                onChange={handleCityChange}
                className={`form-select ${!selectedCity && errors.city ? 'is-invalid' : ''}`}
              >
                <option value="">Select City</option>
                {cities.map(city => (
                  <option key={city.city_id} value={city.city_id}>
                    {city.city_name}
                  </option>
                ))}
              </Form.Control>
                    {/* <div className="invalid-feedback">{errors.city?.message}</div> */}
                    {!selectedCity && <div className="invalid-feedback">{errors.city?.message}</div>}

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
                      placeholder='Password'
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
                        name='confirm_to'
                        class='form-control'
                        placeholder='Confirm Password'
                        {...register('confirm_to')}
                        className={`form-control ${errors.confirm_to ? 'is-invalid' : ''}`}
                             />
                       <div className="invalid-feedback">{errors.confirm_to?.message}</div>
                    </Form.Group>
              </Col>
            </Row>
            <Row className='info-forms-itmes-list'>
            <Col md={6}>
            <Form.Group  controlId="formBasicCheckbox">
                    <Form.Check 
                    type="checkbox" 
                    label="I Agree to Terms & Conditions*"
                    name='agree'
                    value="1"
                    {...register('agree')}
                    className={` ${errors.agree ? 'is-invalid' : ''}`}
                    />
                 <div className="invalid-feedback">{errors.agree?.message}</div>
                </Form.Group>
              </Col>
              </Row>
                <Row className='info-forms-itmes-list'>
                  <Col md={6}>
                        <Button type="submit" className="btn-mfmn-y" disabled={submitting}>Sign Up</Button>
                  </Col>
                  <Col md={12}>
                  {loading && <div className="loader">Loading...</div>}
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