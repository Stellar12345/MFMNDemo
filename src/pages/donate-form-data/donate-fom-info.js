import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { MyDiv, HeadingThree, PTag, Section } from '../../common/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import axios from "axios";
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Donateform() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [userDataApi, setUserDataApi] = useState(null);

  useEffect(() => {
    // Fetch projects on component mount
    fetchProjects();
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


  const fetchProjects = () => {
    // Make API call to fetch projects
    fetch('https://mfmn.stellarsolutionsindia.com/admin/Api/Project/index_get/')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  };
  const userData = JSON.parse(localStorage.getItem('userData'));
  // console.log(userData);

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
      reset(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const validationSchema = Yup.object().shape({
    project: Yup.string()
    .nullable()
    .required('Select Project'),

    first_name: Yup.string().required('First Name is required *')
      .min(3, 'First Name must be at least 3 characters *')
      .max(20, 'First Name must not exceed 20 characters *')
      .matches(/^[A-Za-z].*$/, 'First Name empty space is not allowed'),
    last_name: Yup.string().required('Last Name is required *')
      .min(1, 'Last Name must be at least 1 characters *')
      .max(20, 'Last Name must not exceed 20 characters *')
      .matches(/^[A-Za-z].*$/, 'Last Name empty space is not allowed'),
    email_address: Yup.string().required('Email is required').email('Email is invalid'),
    code: Yup.string().required('required *')
    .min(2, 'First Name must be at least 2 characters *'),
    mobile_no: Yup.string().required('Phone Number is required *')
    .matches(/^[0-9].*$/, 'Must start with a number '),
    // pan_number: Yup.string().required('Pan Number is required *'),
    address: Yup.string().required('Address is required *').matches(/^[A-Za-z].*$/, 'Address is empty space is not allowed'),
    country: Yup.string().test('required', 'Please select an country', value => value !== ''),
    state: Yup.string().required('Select State'),
    city: Yup.string().required('Select City'),
    pincode: Yup.string().required('Pincode is required')
    .matches(/^[0-9].*$/, 'Must start with a number '),
    // donation_amount: Yup.string(),
    contribution_price: Yup.string().when('donation_amount', {
      is: (donationAmount) => !donationAmount, // Check if donation_amount is not set
      then: (schema) =>
        schema.required(
          'Please select a contribution amount or enter a custom amount'
        )
      .matches(/^[0-9].*$/, 'Must start with a number '),
    }),
  });
  
  // ...
  
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm({
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

  const onSubmit = data => {

    // console.log(JSON.stringify(data, null, 2));
    axios.post('https://mfmn.stellarsolutionsindia.com/admin/Api/donation/pay_donation',
      JSON.stringify(data)).then((response) => {
        console.log(response.status);
        document.getElementById("contactform").reset();
        if (response.data.status == 'success') {
          // Swal.fire({
          //   text: response.data.message,
          //   icon: 'success',
          // });
          navigate('/thankyou');
        }
        else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
            type: "error"
          });
        }

        //console.log(response.data);
      });
  };

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    mobile_no: '',
    email_address: '',
    message: '',
    code: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
    console.log(state);
  };

  useEffect(() => {

  }, [])

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    if (userData) {
      fetchUserData();
    }
    // Fetch projects and countries
    fetchProjects();
    fetchCountries();
  }, []);

  const [errorVisible, setErrorVisible] = useState(true);

  return (

    <>

      <Form onSubmit={handleSubmit(onSubmit)} id='contactform' type="post">
        <MyDiv className="donate-list-of-info">
          <Section className='donate-project-sec'>

            <Row className="donate-project-form">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Select any Charitable Project<sup>*</sup>
                  </Form.Label>
                  {/* <Form.Control
            as="select"
            {...register("project")}
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className={`form-select ${errors.project ? 'is-invalid' : ''}`}
          >
            <option value="">Select a Project</option>
            {projects.map((project) => (
              <option key={project.projects_id} value={project.projects_id}>
                {project.projects_name}
              </option>
            ))}
          </Form.Control> */}
                  <Form.Control
                    as="select"
                    {...register('project')}
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className={`form-select ${!selectedProject && errors.project ? 'is-invalid' : ''}`}
                  >
                    <option value="">Select a Project</option>
                    {projects.map((project) => (
                      <option key={project.projects_id} value={project.projects_id}>
                        {project.projects_name}
                      </option>
                    ))}
                  </Form.Control>
                  {!selectedProject && <div className="invalid-feedback">{errors.project?.message}</div>}
                  {/* <div className="invalid-feedback">{errors.project?.message}</div> */}
                </Form.Group>
              </Col>

            </Row>
            <Row className="contribute-sec">
              <Col lg={12} xs={12}>
                <PTag>Choose your contribution</PTag>
                <Row>
                  <ul className="contribution-info">
                    {[
                      { id: "contribution-500", label: "₹ 500" },
                      { id: "contribution-1000", label: "₹ 1000" },
                      { id: "contribution-2000", label: "₹ 2000" },
                      { id: "contribution-5000", label: "₹ 5000" },
                      { id: "contribution-10000", label: "₹ 10000" },
                    ].map((amount) => (
                      <li key={amount.id} className="contribution-list-items">
                        <Form.Group className="list-of-contribution">
                          <Form.Check
                            className="cont-list"
                            type="radio"
                            id={amount.id}
                            name="donation_amount"
                            label={amount.label}
                            value={amount.label}
                            {...register("donation_amount")}
                            onClick={() => setErrorVisible(false)}
                          />
                        </Form.Group>
                      </li>
                    ))}
                    {/* Custom contribution amount input */}
                    <li>
                      <Form.Group className="contribution-text-file">
                        <Form.Control
                          name="contribution_price"
                          type="text"
                          placeholder="Enter the amount"
                          className={`contribution-text ${errors.contribution_price ? 'is-invalid' : ''}`}
                          {...register("contribution_price")}
                          onClick={() => setErrorVisible(false)}
                        />
                      </Form.Group>
                    </li>
                  </ul>
                  {/* <div className="invalid-feedback" style={{display : "block"}}>{errors.donation_amount?.message}</div> */}
                  {errorVisible && ( <div className="invalid-feedback" style={{display : "block"}}>{errors.contribution_price?.message}</div> )}

                </Row>
                <Row className="recurring-selection">
                  <MyDiv className="recurring-cont">

                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check
                        inline
                        type="checkbox"
                        name="is_recurring"
                        className="recurring-check-box"
                        id="recurring-check"
                        label=" Make this a recurring contribution"
                        {...register("is_recurring")}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        value="Y"
                      />
                    </Form.Group>
                  </MyDiv>
                </Row>
              </Col>
            </Row>

          </Section>
        </MyDiv>

        <MyDiv className="donate-list-of-info">
          <Section className='personal-section'>

            <Row>
              <Col md={12} >
                <HeadingThree className="top-title-info">Personal<strong> details</strong></HeadingThree>
              </Col>
            </Row>
            <Row className="personal-list-itmes">
              <Col md={6} >
                <Form.Group className="mb-4">
                  <Form.Label>
                    First Name
                  </Form.Label>
                  <Form.Control
                    name="first_name"
                    Value={userDataApi?.firstname || ''}
                    type="text"
                    onChange={handleChange}
                    placeholder='Enter First Name'
                    {...register('first_name')}
                    className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.first_name?.message}</div>

                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>
                    Last Name
                  </Form.Label>
                  <Form.Control
                    type='tex'
                    name='last_name'
                    Value={userDataApi?.lastname || ''}
                    placeholder='Enter Last Name'
                    onChange={handleChange}
                    {...register('last_name')}
                    className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.last_name?.message}</div>
                </Form.Group>
              </Col>
            </Row>
            <Row className="personal-list-itmes">
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>
                    Email
                  </Form.Label>
                  <Form.Control
                    name="email_address"
                    type="email"
                    Value={userDataApi?.email || ''}
                    onChange={handleChange}
                    placeholder='Enter Your Email'
                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                    {...register('email_address')}
                    className={`read-only-input ${errors.email_address ? 'is-invalid' : ''}`// Apply the CSS class here
                    }
                  />
                  <div className="invalid-feedback">{errors.email_address?.message}</div>
                </Form.Group>
              </Col>
              <Col md={6} >
                <MyDiv className="mb-4">
                  <Form.Label>
                    Phone
                  </Form.Label>
                  <Row>
                    <Col xs={4}>
                      <Form.Control
                        type='text'
                        name='code'
                        Value={userDataApi?.code || ''}
                        class='form-control'
                        placeholder='IND +91'
                        onChange={handleChange}
                        {...register('code')}
                        className={`form-control ${errors.code ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.code?.message}</div>
                    </Col>
                    <Col xs={8}><Form.Control
                      type='text'
                      name='mobile_no'
                      Value={userDataApi?.mobile_no || ''}
                      class='form-control'
                      placeholder='Enter Phone Number'
                      onChange={handleChange}
                      maxLength={13}
                      minLength={10}
                      {...register('mobile_no')}
                      className={`form-control ${errors.mobile_no ? 'is-invalid' : ''}`}
                    />
                      <div className="invalid-feedback">{errors.mobile_no?.message}</div>
                    </Col>
                  </Row>
                </MyDiv>
              </Col>
            </Row>
            <Row className="personal-list-itmes">
              <Col md={6} >
                <Form.Group className="mb-4">
                  <Form.Label>
                    Pan Number
                  </Form.Label>
                  <Form.Control
                    name="pan_number"
                    type="text"
                    Value={userDataApi?.pan_number || ''}
                    onChange={handleChange}
                    placeholder='Pan Number'
                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                    {...register('pan_number')}
                    className={`form-control ${errors.pan_number ? 'is-invalid' : ''}`
                    }
                  />
                  <div className="invalid-feedback">{errors.pan_number?.message}</div>
                </Form.Group>
              </Col>
            </Row>
          </Section>
        </MyDiv>

        <MyDiv className="donate-list-of-info">
          <Section className='billing-section'>
            <Row>
              <Col md={12}>
                <HeadingThree className="top-title-info">Billing<strong> address</strong></HeadingThree>
              </Col>
            </Row>
            <Row className="personal-list-itmes">
              <Col md={12}>
                <Form.Group className="mb-4">
                  <Form.Label>
                    Address
                  </Form.Label>
                  <Form.Control
                    name="address"
                    type="text"
                    onChange={handleChange}
                    defaultValue={userDataApi?.address || ''}
                    placeholder='Address'
                    {...register('address')}
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`
                    }
                  />
                  <div className="invalid-feedback">{errors.address?.message}</div>
                </Form.Group>
              </Col>
            </Row>
            <Row className="personal-list-itmes">
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>
                    Country
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
                  {!selectedCountry && <div className="invalid-feedback">{errors.country?.message}</div>}
                  {/* <div className="invalid-feedback">{errors.country?.message}</div> */}
                  {/* {errors.inquiry_country && <div className="invalid-feedback">{errors.inquiry_city.message}</div>}
              <div className="invalid-feedback">{errors.email_address?.message}</div> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>
                    State / Province
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
                  {!selectedState && <div className="invalid-feedback">{errors.state?.message}</div>}
                  {/* <div className="invalid-feedback">{errors.state?.message}</div> */}
                  {/* {errors.inquiry_country && <div className="invalid-feedback">{errors.inquiry_city.message}</div>}
              <div className="invalid-feedback">{errors.email_address?.message}</div> */}
                </Form.Group>
              </Col>
            </Row>
            <Row className="personal-list-itmes">
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>
                    City / District
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
                  {/* {errors.inquiry_country && <div className="invalid-feedback">{errors.inquiry_city.message}</div>}
              <div className="invalid-feedback">{errors.email_address?.message}</div> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label>
                    Pincode
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='pincode'
                    class='form-control'
                    placeholder='Pincode'
                    defaultValue={userDataApi?.pincode || ''}
                    onChange={handleChange}
                    {...register('pincode')}
                    className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.pincode?.message}</div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
              {/* <Button type="submit" className="btn-mfmn-y" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit'}
                      </Button> */}
                <Button type="submit" className="payment-btn">
                  Proceed to payment
                </Button>
              </Col>
            </Row>

          </Section>
        </MyDiv>
      </Form>

    </>

  );
}

export default Donateform;
