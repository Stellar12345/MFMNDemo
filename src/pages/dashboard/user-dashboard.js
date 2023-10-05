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
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom";

function Userdashboard() {

  const [userDataApi, setUserDataApi] = useState(null);
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
  
    // Retrieving user data from local storage
  const userData = JSON.parse(localStorage.getItem('userData'));
  //console.log(userData);
 
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://mfmn.stellarsolutionsindia.com/admin/Api/Customers/getuser/${userData}`
      );

      setUserDataApi(response.data);

      // Set default selections for country, state, and city based on user's data
      setSelectedCountry(response.data.country_id);
      setSelectedState(response.data.state_id);
      setSelectedCity(response.data.city_id);

      // Fetch states and cities based on user's data
      fetchStates(response.data.country_id);
      fetchCities(response.data.state_id);

      // Assuming 'reset' is the reset function from react-hook-form
      if(!isLoggedIn) {
      reset(response.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const [user, setUser] = useState(null);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required').matches(/^[A-Za-z].*$/, 'First Name empty space is not allowed'),
    last_name: Yup.string().required('Last Name is required').matches(/^[A-Za-z].*$/, 'Last Name empty space is not allowed'),
    // user_email: Yup.string().email('Invalid email').required('Email Address is required'),
    // pan_number: Yup.string().required('Pan Number is required'),
    mobile_number: Yup.string().required('Phone Number is required'),
    address: Yup.string().required('Address is required').matches(/^[A-Za-z].*$/, 'Address is empty space is not allowed'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    pin_code: Yup.string().required('Pincode is required'),
    // pass: Yup.string().required('Password is required'),
    confirm_pass: Yup.string()
      .oneOf([Yup.ref('pass'), null], 'Passwords must match')
      // .min(8, 'Password must be at least 8 characters long')
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]+$/,
      //   'Password must contain at least one letter, one number, and one special character'
      // ),
      // .required('Confirm Password is required'),
  });

  const { register, handleSubmit, setValue, formState: { errors },reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: userDataApi,
  });
  useEffect(() => {
    if (userDataApi) {
      // Set default values using the setValue function from useForm
      setValue('first_name', userDataApi.firstname || '');
      setValue('last_name', userDataApi.lastname || '');
      setValue('user_email', userDataApi.email || '');
      setValue('pan_number', userDataApi.pan_number || '');
      setValue('code', userDataApi.code || '');
      setValue('mobile_number', userDataApi.mobile_no || '');
      setValue('address', userDataApi.address || '');
      setValue('country', userDataApi.country_id || '');
      setValue('state', userDataApi.state_id || '');
      setValue('city', userDataApi.city_id || '');
      setValue('pin_code', userDataApi.pincode || '');
      // ... set other default values
    }
  }, [userDataApi, setValue]);


  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      const response = await axios.post(
        `https://mfmn.stellarsolutionsindia.com/admin/Api/Customers/update_user/${userData}`,
        JSON.stringify(data)
      );
 if (response.status === 200) {
      // Fetch updated user data
      fetchUserData();

      Swal.fire({
        text: response.data,
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          // Reset the form
          reset();
          fetchUserData();
        }
      });
    }  else {
        Swal.fire({
          text: response.data,
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        text: 'An error occurred while submitting the form.',
        icon: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <div className="mfmn-forms-page mfmn-login-info-page">
          <Container>
            <Row>
              <Col>
                <h2>User <strong>Dashboard</strong></h2>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="user-data-info">
                <ul className="user-pro-menu-list hid-mobile-view">
                  <li><a href="javascript:void(0)">User Profile</a></li>
                  {/* <li><a href="javascript:void(0)">User Profile2</a></li> */}
                </ul>
              </Col>
              <Col md={9}>
                <div className="user-pro-details-info">
                  <Row className="top-designation">
                    <Col xs={4} md={3}>
                    <Form.Label>User Role</Form.Label>
                    </Col>
                    <Col xs={8} md={9}>
                    <Form.Label>MFMN User</Form.Label>
                    </Col>
                  </Row>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="pro-design-form">
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name<sup>*</sup></Form.Label>
                          <Form.Control
                            name="first_name"
                            type="text"
                            Value={userDataApi?.firstname || ''}
                            placeholder="Enter your first name"
                            {...register('first_name')}
                            className={errors.first_name ? 'is-invalid' : ''}
                          />
                          <div className="invalid-feedback">{errors.first_name?.message}</div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name<sup>*</sup></Form.Label>
                          <Form.Control
                            name="last_name"
                            type="text"
                            defaultValue={userDataApi?.lastname || ''}
                            placeholder="Enter your last name"
                            {...register('last_name')}
                            className={errors.last_name ? 'is-invalid' : ''}
                          />
                          <div className="invalid-feedback">{errors.last_name?.message}</div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address<sup>*</sup></Form.Label>
                          <Form.Control
                            name="user_email"
                            type="email"
                            defaultValue={userDataApi?.email || ''}
                            placeholder="Enter your email"
                            {...register('user_email')}
                            readOnly 
                            className={`read-only-input ${errors.user_email ? 'is-invalid' : ''}`} // Apply the CSS class here
                            />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>PAN Number</Form.Label>
                          <Form.Control
                            name="pan_number"
                            type="text"
                            defaultValue={userDataApi?.pan_number || ''}
                            placeholder="Enter your pan number"
                            {...register('pan_number')}
                            className={errors.pan_number ? 'is-invalid' : ''}
                          />
                          <div className="invalid-feedback">{errors.pan_number?.message}</div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
              <Col >
                        <Form.Group className="mb-3">
                          <Form.Label>
                           Phone<sup>*</sup>
                          </Form.Label>
                          <Row>
                            <Col className='col-4'>
                              <Form.Control 
                              name="code"
                              type="text"
                              defaultValue={userDataApi?.code || ''}
                              placeholder='IND +91'
                              className={`form-control ${errors.code ? 'is-invalid' : ''}`}
                              {...register('code')}
                               />
                              <div className="invalid-feedback">{errors.code?.message}</div>
                              </Col>
                            <Col className='col-8'>
                              <Form.Control 
                              type='text'
                              name='mobile_number'
                              class='form-control'
                              defaultValue={userDataApi?.mobile_no || ''}
                              placeholder='Enter phone number'
                              className={`form-control ${errors.mobile_number ? 'is-invalid' : ''}`}
                              {...register('mobile_number')}
                               />
                               {errors.mobile_number && <div className="invalid-feedback">{errors.mobile_number.message}</div>}
                               </Col>
                          </Row>
                        </Form.Group>
                      </Col>              
                    </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Address<sup>*</sup></Form.Label>
                          <Form.Control
                            name="address"
                            type="text"
                            placeholder="Enter Your Address"
                            defaultValue={userDataApi?.address || ''}
                            {...register('address')}
                            className={errors.address ? 'is-invalid' : ''}
                          />
                          <div className="invalid-feedback">{errors.address?.message}</div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                                <Form.Label>
                                Country<sup>*</sup>
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    {...register('country')}
                                    value={selectedCountry} // Set the selected value
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
                                      value={selectedState}
                                      {...register('state')}
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
                          <Form.Label>Pincode<sup>*</sup></Form.Label>
                          <Form.Control
                            name="pin_code"
                            type="text"
                            defaultValue={userDataApi?.pincode || ''}
                            placeholder="Enter your pincode"
                            {...register('pin_code')}
                            className={errors.pin_code ? 'is-invalid' : ''}
                          />
                          <div className="invalid-feedback">{errors.pin_code?.message}</div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Password<sup>*</sup></Form.Label>
                          <Form.Control
                            name="pass"
                            type="password"
                            placeholder="Enter your password"
                            {...register('pass')}
                            className={errors.pass ? 'is-invalid' : ''}
                          />
                          <div className="invalid-feedback">{errors.pass?.message}</div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Confirm Password<sup>*</sup></Form.Label>
                          <Form.Control
                            name="confirm_pass"
                            type="password"
                            placeholder="Confirm your password"
                            {...register('confirm_pass')}
                            className={errors.confirm_pass ? 'is-invalid' : ''}
                          />
                          <div className="invalid-feedback">{errors.confirm_pass?.message}</div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="pro-design-form-bottom">
                      <Col xs={12}>
                      <Button type="submit" className="btn-mfmn-y" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit'}
                      </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <MyDiv className="mfmn-forms-page">
        <Container>
          <Row>
            <MyDiv className="top-heading text-center">
            <HeadingTwo>Please login to access the user dashboard</HeadingTwo><br /><br />
            <a class="more-btn" href="/login" style={{ float: 'inherit'}}>Login</a>
            </MyDiv>
          </Row>
        </Container>
      </MyDiv>
      )}
    </>
  );
}

export default Userdashboard;