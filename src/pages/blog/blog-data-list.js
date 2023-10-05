import React, { useEffect, useState, useMemo } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import { MyDiv, HeadingOne, PTag, HeadingFour, HeadingThree, HeadingTwo, HeadingFive, Section, SpanTag } from '../../common/Common';
import Postauthor from '../../assets/img/blog/post-auth.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';
import Blogcategory from './blog-category';

export default function Blogpostdata() {
  const [data, setData] = useState(null);
  const baseurl = 'https://mfmn.stellarsolutionsindia.com/admin/';

  const [bloggenre, setBlogGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [visibleBlogpost, setVisibleBlogpost] = useState(6);
  const [sortOrder, setSortOrder] = useState("latest");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl + 'Api/blog');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterBlogPosts = useMemo(() => {
    let filteredBlogPosts = data ? data.datalist : [];

    if (bloggenre && bloggenre !== "All") {
      filteredBlogPosts = filteredBlogPosts.filter((blog) => {
        const blogGenres = blog.category_name.map((val) => val.toLowerCase());
        return blogGenres.includes(bloggenre.toLowerCase());
      });
    }

    if (searchTerm !== "") {
      filteredBlogPosts = filteredBlogPosts.filter((blog) => {
        const searchFields =
          `${blog.blog_title.toLowerCase()} ` +
          `${blog.blog_date} ` +
          `${blog.blog_author.toLowerCase()} ` +
          `${Array.isArray(blog.blog_description) ? blog.blog_description.join(" ").toLowerCase() : ""}`;
        return searchFields.includes(searchTerm.toLowerCase());
      });
    }

    if (sortOrder === "oldest") {
      filteredBlogPosts = filteredBlogPosts.sort((a, b) => new Date(a.blog_date) - new Date(b.blog_date));
    } else if (sortOrder === "latest") {
      filteredBlogPosts = filteredBlogPosts.sort((a, b) => new Date(b.blog_date) - new Date(a.blog_date));
    }

    return filteredBlogPosts;
  }, [data, bloggenre, searchTerm, sortOrder]);

  useEffect(() => {
    if (searchTerm !== "") {
      setBlogGenre("");
    }
  }, [searchTerm]);

  const handleLoadMore = () => {
    setVisibleBlogpost((prevVisibleBlogpost) => prevVisibleBlogpost + 3);

    if (visibleBlogpost >= filterBlogPosts.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  const blogPostsToShow = filterBlogPosts.slice(0, visibleBlogpost);
  return (
    <Container className='news-event-sec'>
         <MyDiv className="blog-post-filter"></MyDiv>
         <Form>
          <Row>
        <Col sm="4" className='post-filter-itmes'>
                <MyDiv className="posted-filter">
                  <label>Category</label>
                  <select
                id="category-info"
                className="selected_option"
                value={bloggenre}
                onChange={(e) => setBlogGenre(e.target.value)}
              >
                <Blogcategory/>
              </select>
                    
                </MyDiv>
            </Col>
            <Col sm="4">
            <MyDiv className="posted-filter">
                  <label>Sort by</label>
                  <select id="post-sort" className="selected_option"  value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </MyDiv>
            </Col>
            <Col sm="4" >
              <MyDiv className="posted-filter">
              <label>Search by keyword</label>
              <input
         placeholder='Enter keyword' className='input-keyword-search'
          name="searchMovie"          
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
              </MyDiv>
            </Col>
        
      </Row>
      </Form>
      <Row className="farmer-sec">
        {blogPostsToShow.map((blogpost, index) => {
          return (
            <Col md={4} sm={4}   key={blogpost.id} className='blog-posted-list'>
            <MyDiv className="farmingimg"  key={blogpost.id}>
            <a href={'blog/'+ blogpost.blog_slug}>          
            <img src={baseurl + blogpost.blog_image} className='img-fluid'/>
            </a>
              < MyDiv className="posted-data-items">
                <MyDiv className="posted-info">
                <SpanTag className="posted-info-date">{blogpost.blog_date}</SpanTag>
                <SpanTag  className="posted-info-auth"><img src={Postauthor} className='post-auther'/>{blogpost.blog_author}</SpanTag> 
                </MyDiv>
                <MyDiv className="posted-title">          
                <a href={'blog/'+ blogpost.blog_slug}>
                <HeadingFour>{blogpost.blog_title}</HeadingFour>
                </a>        
                </MyDiv>
                </MyDiv>
                <PTag>{parse(blogpost.blog_description && blogpost.blog_description.substring(0, 65))}</PTag>
          </MyDiv>
           </Col>
          );
        })}
  </Row>

      {/* {movies.length > visibleMovies && (
        <button className="btn" onClick={handleLoadMore}>
          Load More
        </button>
      )} */}
          <Col lg={12}className="text-center">
          {isCompleted ? (            
              <button onClick={handleLoadMore} type="button" className="load-btn disabled">
              That's It
              </button>          
          
          ) : (          
              <button onClick={handleLoadMore} type="button" className="load-btn">
                Load More 
              </button>           
          )}
         </Col>

    </Container>
  );
}
