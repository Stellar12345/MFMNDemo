import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { slice } from 'lodash';
import axios from "axios";
// import Lodmore from "../../assets/img/gallery/load-more.png";
import Search_imgs from "../assets/img/gallery/preview.png";
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../common/Common';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import { Link } from "react-router-dom";

function OurGallery() {
    const baseurl = 'https://mfmn.stellarsolutionsindia.com/admin/';
  const [galleryData, setGalleryData] = useState([]);

  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(6);

  const initialPosts = slice(galleryData, 0, index);

  const loadMore = () => {
    setIndex(index + 5);
    //console.log(index);
    if (index >= galleryData.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl + "Api/gallery");
        const jsonData = response.data;
      
      // console.log(jsonData);
        setGalleryData(jsonData);
      } catch (error) {
        console.log("Error fetching API data:", error);
      }
    };
    fetchData();
  }, []);

  const onInit = () => {
    //console.log('lightGallery has been initialized');
    
  };
  


  return (
    <>
      <MyDiv className="our-gallery-items">
      <Container>
      <HeadingTwo className="title-head text-center">Photos</HeadingTwo>
        <LightGallery
          onInit={onInit}
          speed={1500}
          plugins={[]}
        >
          {initialPosts.map((item) => (
            <div className="col-xs-6 col-sm-3 gallery-list"  data-toggle="lightbox"
            data-gallery="example-gallery" data-src={baseurl + item.gallery_popup_image} >
           
            <MyDiv  key={item.id} className="gallery-list-items" >
              <img src={baseurl +item.gallery_image} alt={item.title} className="gallery-img"/>
             
              <div className="preview-img">
                <div className="search-icon">
                  <img src={Search_imgs} alt="search" />
                </div>
              </div>
            </MyDiv>
          
            <MyDiv className="gallery-title"><SpanTag>{item.gallery_title}</SpanTag></MyDiv>
            </div>
          ))}
             
        </LightGallery>
<MyDiv className="more-allery-data">
{isCompleted ? (
            <button
              onClick={loadMore}
              type="button"
              className="btn-more-list-outline  disabled"
            >
              
              <span>That's It</span>
            </button>
          ) : (
            <button onClick={loadMore} type="button" className="btn-more-list-outline">
              <span>load more</span>
            </button>
          )}
</MyDiv>
          
     {/* <div className="col-xs-6 col-sm-3 loadmore-data">
          {isCompleted ? (
            <button
              onClick={loadMore}
              type="button"
              className="btn-more-list  disabled"
            >
              <img src={Lodmore} alt="" className="img-no-show" />
              <span>That's It</span>
            </button>
          ) : (
            <button onClick={loadMore} type="button" className="btn-more-list">
              <img src={Lodmore} alt="" className="img-no-show" />
              <span>load more</span>
            </button>
          )}
        </div> */}
       </Container>
      </MyDiv>
    </>
  );
}

export default OurGallery;
