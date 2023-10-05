import React, { useEffect, useState } from 'react';
import { MyDiv, HeadingThree, PTag, SpanTag } from '../common/Common';
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import axios from 'axios';
import parse from 'html-react-parser';

const HomeNews = () => {
  const [data, setData] = useState(null);
  const baseurl = 'https://mfmn.stellarsolutionsindia.com/admin/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl + 'Api/news/news_events');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data && data.map((item, i) => (
        <MyDiv className="lake-program-section">
            <Container>
                <Row>
                  <div className="lake-program-inner">
                  <Row>
                    <Col sm={12} md={2} className={"title-content"}>
                        <HeadingThree>{item.post_title}</HeadingThree>
                        {/* <PTag className={"lake-program-date hide-for-small-only"}>{item.post_date}</PTag> */}
                    </Col>
                    <Col sm={12} md={10} className={"desc-content"}>
                    <PTag>{parse(item.post_description.substring(0, 250))}</PTag>
                           
                           {/* <SpanTag className={"lake-program-date shwo-for-small-only"}>{item.post_date}</SpanTag> */}
                        <a href={'newsnevents/' + item.post_slug}>View more</a>
                    </Col>
                    </Row>
                    </div>                                                  
                </Row>
            </Container>
      </MyDiv>
      ))}
    </>
  );
};

export default HomeNews;
