import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MyDiv } from '../common/Common';

import Logo from '../assets/img/logo.png';
import Ch_arrowdown from '../assets/img/arrow-down.png';

function Header() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollDown, setScrollDown] = useState(false);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('scrolled', scrollDown);
  }, [scrollDown]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollDown(window.scrollY > 50);
    });
    setUrl(location.pathname);
  }, [location]);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(-1);

  const handleMenuClick = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const isSubmenuOpen = (index) => {
    return openSubmenuIndex === index;
  };

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');

    // Redirect to the login page
    navigate('/login');
  };


  return (
    <Navbar bg="light" expand="lg" sticky="top" className={isActive ? 'bg-sal-col' : ''}>
      <Container className='p-0'>
        <Row className='hader-width m-0 p-0'>
        <Col md={2} className="logo-align-top">
        <Navbar.Brand href="/" className='logo-align'>
          <img src={Logo} className="img-responsive header-logo" />
        </Navbar.Brand>
        </Col>
        {/* <Col md={9}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto header-height main-menu">
            <MyDiv className="HeaderMainMenu">
            <NavDropdown title="About Us" id="basic-nav-dropdown">
            <MyDiv className="">
              <span>Who we are</span>
              Know about us
              Our Journey
              Our Philosophy
              Our People
              How we work
            </MyDiv>
              <NavDropdown.Item>What We Do</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Know about us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Journey</NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link href="#link">Support</Nav.Link>
            <Nav.Link href="#link">News & Events</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
            </MyDiv>
            <MyDiv className="special-btn">
              <Nav.Link className='sign-in-btn' >Sign in</Nav.Link>
              <Nav.Link className='donate-btn' >Donate</Nav.Link>
            </MyDiv>
          </Nav>
        </Navbar.Collapse>
        </Col> */}
        <Col md={10} className='p-0'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  onClick={handleClick} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto header-height main-menu">
            <MyDiv className="HeaderMainMenu">
            <NavDropdown  className={"underline" + (url === "/ourphilosophy" ?" actives" : "") +  (url === "/howwework" ?" actives" : "") +  (url === "/location" ?" actives" : "") + (url === "/helpingfarmer" ?" actives" : "") + (url === "/naturalwayoffarming" ?" actives" : "") + (url === "/ourpeople" ?" actives" : "") + (url === "/healthierfood" ?" actives" : "") + (url === "/watermanagement" ?" actives" : "") + (url === "/around-the-globe" ?" actives" : "") + (url === "/advancingsustainability" ?" actives" : "") + (url === "/regenerativeagriculture" ?" actives" : "") + (url === "/ourjourney" ?" actives" : "") + (url === "/aboutus" ?" actives" : "") }
                title="About Us"
                id="basic-nav-dropdown"
              >
                <Container className="eventsNav maga-main-menu sub-menus">
                  <Row className=''>
                    <Col xs="12" md="3" className="text-left">
                      <Dropdown.Header>Who we are</Dropdown.Header>
                      <Nav.Link href="/aboutus" >Know about us</Nav.Link>
                      <Nav.Link href="/ourjourney">Our Journey</Nav.Link>
                      <Nav.Link href="/ourphilosophy" >Our Philosophy</Nav.Link>
                      <Nav.Link href="/ourpeople">Our People</Nav.Link>
                      <Nav.Link href="/howwework">How we work</Nav.Link>
                    </Col>

                    {/* <Col xs="12" md="5" className="text-left">
                      <Dropdown.Header>
                       What we do
                      </Dropdown.Header>
                      <Nav.Link href="/helpingfarmer">Helping farmers</Nav.Link>
                      <Nav.Link href="/naturalwayoffarming">Natural way of farming</Nav.Link>
                      <Nav.Link href="/watermanagement">Water management</Nav.Link>
                      <Nav.Link href="/healthierfood">Healthier food for all</Nav.Link>
                      <Nav.Link href="/advancingsustainability">Advancing sustaibanility</Nav.Link>
                      <Nav.Link href="/regenerativeagriculture">Regenerative agriculture</Nav.Link>
                    </Col> */}
                  
                  <Col xs="12" md="5" className="text-left"> 
                        <Dropdown.Header> What we do </Dropdown.Header>
                      <Dropdown.Header className='ch-heading'><a className='nav-link'>Trilogy of MFMN</a></Dropdown.Header>

                      {/* <Dropdown.Header className='ch-heading'>
                        <Nav.Link href="/naturalwayoffarming" className='ch-dropmenu'>Natural way of farming</Nav.Link>
                      <ul className="ch-submenu">
                        <li><Nav.Link href="/helpingfarmer">Helping farmers</Nav.Link></li>
                      <li><Nav.Link href="/regenerativeagriculture">Regenerative agriculture</Nav.Link></li>
                      </ul>
                      </Dropdown.Header> */}
           <Dropdown className='sub-ch-dropmenu'>
      <Dropdown.Header className='ch-heading' >
      <Nav.Link href="/naturalwayoffarming" className='ch-dropmenu'>Natural way of farming</Nav.Link>
      <span onClick={() => handleMenuClick(1)} className='ch-sub-nave-icon' >
      <img src={Ch_arrowdown} className="" />
      </span>
      </Dropdown.Header>
      <Dropdown.Menu show={isSubmenuOpen(1)} className='sub-ch-dropdown-menu'>
        <Nav.Link href="/helpingfarmer">Helping farmers</Nav.Link>
        <Nav.Link href="/regenerativeagriculture">Regenerative agriculture</Nav.Link>
      </Dropdown.Menu>
    </Dropdown>   

    <Dropdown className='sub-ch-dropmenu'>
      <Dropdown.Header className='ch-heading' >
      <Nav.Link   className='ch-dropmenu'>Environmental Activities</Nav.Link>
      <span onClick={() => handleMenuClick(2)} className='ch-sub-nave-icon' >
      <img src={Ch_arrowdown} className="" />
      </span>
      </Dropdown.Header>
      <Dropdown.Menu show={isSubmenuOpen(2)} className='sub-ch-dropdown-menu'>
        <Nav.Link href="/watermanagement">Water management</Nav.Link>
      </Dropdown.Menu>
    </Dropdown>   

    <Dropdown className='sub-ch-dropmenu'>
      <Dropdown.Header className='ch-heading' >
      <Nav.Link  className='ch-dropmenu'>Bringing Awareness</Nav.Link>
      <span onClick={() => handleMenuClick(3)}  className='ch-sub-nave-icon' >
      <img src={Ch_arrowdown} className="" />
      </span>
      </Dropdown.Header>
      <Dropdown.Menu show={isSubmenuOpen(3)} className='sub-ch-dropdown-menu'>
      <Nav.Link href="/green-earth">Green Earth</Nav.Link>
      <Nav.Link href="/healthierfood">Healthier food for all</Nav.Link>
      <Nav.Link href="/advancingsustainability">Advancing sustaibanility</Nav.Link>
      </Dropdown.Menu>
    </Dropdown>
                      

                      
                      {/* <Dropdown.Header className='ch-heading'><a>Environmental Activities</a></Dropdown.Header> 
                      <Nav.Link href="/watermanagement">Water management</Nav.Link>

                      <Dropdown.Header className='ch-heading'><a>Bringing Awareness</a></Dropdown.Header>
                      <Nav.Link href="/green-earth">Green Earth</Nav.Link>
                      <Nav.Link href="/healthierfood">Healthier food for all</Nav.Link>
                      <Nav.Link href="/advancingsustainability">Advancing sustaibanility</Nav.Link> */}
                    </Col>

                    <Col xs="12" md="4" className="text-left">
                      <Dropdown.Header>
                        Where we work
                      </Dropdown.Header>
                      <Nav.Link href="/location">Locations</Nav.Link>
                      <Nav.Link href="/around-the-globe">MFMN Around the Globe</Nav.Link>
                    </Col>
                  </Row>
                </Container>
                 
              </NavDropdown>
              <NavDropdown  className={"support-sub-menu underline" + (url === "/workwithus" ?" actives" : "") +  (url === "/csrpartnership" ?" actives" : "")}
                title="Support"
                id="basic-nav-dropdown"
              >
                <Container className="eventsNav subnav maga-main-menu sub-menus ">
                  <Row className=''>
                    <Col  md="12" className="text-left">
                      <Nav.Link href="/workwithus" >Work with us</Nav.Link>
                      {/* <Nav.Link href="javascript:void(0)">Donate</Nav.Link> */}
                      <Nav.Link href="/csrpartnership" >CSR Partnership</Nav.Link>
                    </Col>
                  </Row>
                </Container>
                
              </NavDropdown>
              {/* <Nav.Link href="/newsnevents" className={"underline" + (url === "/newsnevents" ?" active" : "")}>News & Events</Nav.Link> */}
              <Nav.Link href="/blog" className={"underline" + (url === "/blog" ?" active" : "")}>Blog</Nav.Link>
              {/* <Nav.Link href="/gallery" className={"underline" + (url === "/gallery" ?" active" : "")}>Gallery</Nav.Link> */}

              <NavDropdown  className={"support-sub-menu underline" + (url === "/videos" ?" actives" : "") + (url === "/gallery" ?" actives" : "") }
                title="Gallery"
                id="basic-nav-dropdown"
              >
                <Container className="eventsNav subnav maga-main-menu sub-menus ">
                  <Row className=''>
                    <Col  md="12" className="text-left">
                      <Nav.Link href="/gallery" >Photos</Nav.Link>
                      <Nav.Link href="/videos" >Videos</Nav.Link>
                    </Col>
                  </Row>
                </Container>
                
              </NavDropdown>

              <Nav.Link href="/contactus"  className={"underline" + (url === "/contactus" ?" active" : "")}>Contact us</Nav.Link>
              {isLoggedIn && (
                      <Nav.Link
                      as={Link}
                      to="/dashboard/user-dashboard"
                      className={"underline" + (url === "/dashboard/user-dashboard" ?" active" : "")}
                    >
                      Dashboard
                    </Nav.Link>
                     
                    )}
              </MyDiv>
              <MyDiv className="special-btn">
              <Nav>
                {isLoggedIn ? (
                  <Nav.Link as={Link} to="/login" onClick={handleLogout} className="sign-in-btn">
                    Sign Out
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/login" className="sign-in-btn">
                    Sign in
                  </Nav.Link>
                )}
              </Nav>
              <Nav.Link as={Link} to="/donate" className="donate-btn">
                Donate
              </Nav.Link>
            </MyDiv>
              {/* <MyDiv className="special-btn">
              <Nav.Link href="/login" className='sign-in-btn'>Sign in</Nav.Link>
              <Nav.Link href="/donate" className='donate-btn'>Donate</Nav.Link>
            </MyDiv> */}
            </Nav>
           
          </Navbar.Collapse>
        </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;