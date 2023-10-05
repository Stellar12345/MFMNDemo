import { useEffect, useState, useMemo } from "react";
import { Row, Col, Form,Container } from "react-bootstrap";
import { MyDiv, HeadingOne, PTag, HeadingFour, HeadingThree,HeadingTwo, HeadingFive, Section, SpanTag } from '../../common/Common';
import Postauthor from '../../assets/img/blog/post-auth.png';
import { Link } from 'react-router-dom';

import allblogpost from "./blog-post.json";
import genreOptions from "./genre-cat.json";

export default function Blogpostdata() {
  
  const [bloggenre, setGenre] = useState("");
  const [searchTerm, setSearchTem] = useState("");
  const [isCompleted, setIsCompleted] = useState(false)
  const [visibleBlogpost, setVisibleBlogpost] = useState(6);
  const [sortOrder, setSortOrder] = useState("latest");

  const blogs = useMemo(() => {
    let filteredBlogpost = allblogpost;
    if (bloggenre !== "") {
      filteredBlogpost = filteredBlogpost.filter((blog) => {
        const blogGenre = blog.genre.map((val) => val.toLowerCase());
        return blogGenre.includes(bloggenre);
      });
    }
  
    if (searchTerm !== "") {
      filteredBlogpost = filteredBlogpost.filter((blog) => {
        const searchFields =
          `${blog.title.toLowerCase()} ` +
          `${blog.year} ` +
          `${blog.genre.join("").toLowerCase()}` +
          `${blog.postedby.toLowerCase()}` +
          `${blog.description.join("").toLowerCase()}`;
        return searchFields.includes(searchTerm.toLowerCase());
      });
    }
  
    if (sortOrder === "oldest") {
      filteredBlogpost = filteredBlogpost.sort((a, b) => a.year - b.year);
    } else if (sortOrder === "ascendings") {
      filteredBlogpost = filteredBlogpost.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (sortOrder === "descendings") {
      filteredBlogpost = filteredBlogpost.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }
    return filteredBlogpost;
  }, [bloggenre, searchTerm, sortOrder]);

  useEffect(() => {
    if (searchTerm !== "") {
      setGenre("");
    }
  }, [searchTerm]);
  const handleLoadMore = () => {
    setVisibleBlogpost((prevVisibleBlogpost) => prevVisibleBlogpost + 3);

    if (visibleBlogpost >= blogs.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  };
  const blogsToShow = blogs.slice(0, visibleBlogpost);
  return (
    <Container className='news-event-sec'>
         <MyDiv className="blog-post-filter"></MyDiv>
         <Form>
          <Row>
        <Col sm="4" className='post-filter-itmes'>
                <MyDiv className="posted-filter">
                  <label>Category</label>
                    <select id="category-info"  className="selected_option" 
                value={bloggenre}
                onChange={(e) => setGenre(e.target.value)}
                    >
                        {genreOptions.map((option, i) => {
                          return (
                            <option className="py-2" value={option.value} key={i}>
                              {option.label}
                            </option>
                          );
                        })}
              </select>
                </MyDiv>
            </Col>
            <Col sm="4">
            <MyDiv className="posted-filter">
                  <label>Sort by</label>
                  <select
      id="post-sort"
      className="selected_option"
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="ascendings">Latest</option>
      <option value="descendings">Oldest</option>
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
          onChange={(e) => setSearchTem(e.target.value)}
        />
              </MyDiv>
            </Col>
        
      </Row>
      </Form>
      <Row className="farmer-sec">
        {blogsToShow.map((blogpost, index) => {
          return (
            <Col md={4} sm={4}   key={blogpost.id} className='blog-posted-list'>
            <MyDiv className="farmingimg"  key={blogpost.id}>
              <MyDiv className="farmingimg-inner">
            <Link to={blogpost.slug}>          
            <img src={require('../../assets/img/blog/' + blogpost.imageurl)} className='img-fluid'/>
            </Link>
            </MyDiv>
              < MyDiv className="posted-data-items">
                <MyDiv className="posted-info">
                <SpanTag className="posted-info-date">{blogpost.year}</SpanTag>
                <SpanTag  className="posted-info-auth"><img src={Postauthor} className='post-auther'/>{blogpost.postedby}</SpanTag> 
                </MyDiv>
                <MyDiv className="posted-title">          
                <a href={'blog/'+ blogpost.slug}>
                <HeadingFour>{blogpost.title}</HeadingFour>
                </a>        
                </MyDiv>
                </MyDiv>
                <PTag>{blogpost.description && blogpost.description[0].substring(0, 130) + '.'}</PTag>
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
