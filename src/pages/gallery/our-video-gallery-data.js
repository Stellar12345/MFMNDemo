import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { slice } from 'lodash';
import axios from "axios";
import Lodmore from "../../assets/img/gallery/load-more.png";
import Search_imgs from "../../assets/img/gallery/preview.png";
import { MyDiv, HeadingOne, HeadingThree, PTag, SpanTag, HeadingFour, HeadingTwo, Section } from '../../common/Common';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import { Link } from "react-router-dom";

import videosData from './our-video-data-itmes.json';

function VideoGallery() {
  const initialVideosPerPage = 3; // Number of videos to show initially
  const additionalVideosPerPage = 3; // Number of videos to show on "Load More" click
  const [videos, setVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    setVideos(videosData);
  }, []);

  useEffect(() => {
    setVisibleVideos(videos.slice(0, initialVideosPerPage));
  }, [videos]);

  const loadMoreVideos = () => {
    const startIndex = visibleVideos.length;
    const endIndex = startIndex + additionalVideosPerPage;
    const nextVideos = videos.slice(startIndex, endIndex);
    const newVisibleVideos = [...visibleVideos, ...nextVideos];

    setVisibleVideos(newVisibleVideos);

    if (newVisibleVideos.length >= videos.length) {
      setShowLoadMore(false);
    }
  };


  return (
    <>
        <MyDiv className="my-video-part-info">
          <HeadingTwo className="title-head">
            {/* Videos */} &nbsp;
            </HeadingTwo>
          <MyDiv className="my-video-list">
          <Row>
          {/* <Col md={4} className="my-video-list-items">           
          <MyDiv className="video-container-items">
            <iframe width="100%"  src="https://www.youtube.com/embed/fX2tAG9vAF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; picture-in-picture; " allowfullscreen></iframe>
          </MyDiv>
          </Col>
          <Col md={4} className="my-video-list-items">           
          <MyDiv className="video-container-items">
            <iframe width="100%"  src="https://www.youtube.com/embed/fX2tAG9vAF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; picture-in-picture; " allowfullscreen></iframe>
          </MyDiv>
          </Col>
          <Col md={4} className="my-video-list-items">           
          <MyDiv className="video-container-items">
            <iframe width="100%"  src="https://www.youtube.com/embed/fX2tAG9vAF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; picture-in-picture; " allowfullscreen></iframe>
          </MyDiv>
          </Col>
          <Col md={4} className="my-video-list-items">           
          <MyDiv className="video-container-items">
            <iframe width="100%"  src="https://www.youtube.com/embed/fX2tAG9vAF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; picture-in-picture; " allowfullscreen></iframe>
          </MyDiv>
          </Col> */}

        {visibleVideos.map((video, index) => (
                  <Col md={4} className="my-video-list-items" key={video.id}>
                    <MyDiv className="video-container-items">
                      <iframe
                        width="100%"
                        src={video.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; picture-in-picture;"
                        allowFullScreen
                      ></iframe>
                    </MyDiv>
                  </Col>
                ))}
      </Row>
      <MyDiv className="more-btn-aline">  
          
{showLoadMore ? (
          <button onClick={loadMoreVideos} type="button" className="btn-more-list-outline">
          <span>Load More</span>
        </button>
      ) : (
    
          <button
          onClick={loadMoreVideos}
          type="button"
          className="btn-more-list-outline disabled"
        >
          <span>That's It</span>
        </button>
      )}
          </MyDiv>  

          </MyDiv>

        </MyDiv>
    </>
  );
}

export default VideoGallery;
