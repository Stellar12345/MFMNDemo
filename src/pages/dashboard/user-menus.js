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

function Usermenu() {
  

  useEffect(() => {
  }, [])
    return (
        <>
        <ul className='user-pro-menu-list hid-mobile-view'>
          <li><a href='javascript:void(0)'>User Profile</a></li>
          <li><a href='javascript:void(0)'>Donation History</a></li>
        </ul>
        <DropdownButton id="dropdown-basic-button" title="User menu" className='mobile-view-show  user-pro-mob-menu' >
      <Dropdown.Item href="javascript:void(0)">User Profile</Dropdown.Item>
      <Dropdown.Item href="javascript:void(0)">Donation History</Dropdown.Item>

    </DropdownButton>
      
        </>
  );
}
export default Usermenu;