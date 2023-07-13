import React, {useEffect,useState,useContext} from 'react'
import Navbar from "./Navbar";
import "../Blogs.css";
import Blogcard from "./Blogcard";
import Blogform from './Blogform';
import Footer from './Footer';
import BlogsContext from '../contexts/blogContext'
import PropTypes from 'prop-types'
import createClient from "../client";


 const Blogs=({props}) =>{
    const [articles, setArticles]=useState([])
    const [page, setPage]=useState(1)
    const [totalResults, setTotalResults]=useState(0)
    const [searchedTitle,setSearchedTitle]=useState('');
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    // const [contents, setContents] = useState([]);
    const [blogs,SetBlogs]=useState(null)
    const handleInputChange = (event) => {
      setSearchedTitle(event.target.value.toLowerCase());
    };

    const handleBackgroundClick = () => {
      setIsBoxVisible(false);
    };
  /*Close the form on clicking the Esc or Del button */
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.keyCode === 27 ||event.keyCode === 46 ) { // 27 is the keycode for the Escape button
          setIsBoxVisible(false);
        }
      };
      const handleKeyPress=(event)=>{
        if(event.key === 'Escape' && isBoxVisible==false){
          window.history.back();
        }
      }

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.addEventListener('keydown', handleKeyPress);
    };
  }, []); 

  /*Toggling function for box visibility*/
    const handleClick = () => {
      setIsBoxVisible(!isBoxVisible);
      console.log('hello world');
    };
    
      // const cap=props.category;
      // document.title=props.category;

    //   const updateNews=async()=>{
    //     console.log("cdm")
    //     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=83951c0e1b35448c95fd7924393c9e9a&page=${page}&pageSize=${props.pageSize}`;
    //     let data = await fetch(url); //fetch API returns a promise 83951c0e1b35448c95fd7924393c9e9a
    //     let parsedData= await data.json()
    //     setArticles(parsedData.articles);
    //     setTotalResults(parsedData.totalResults);

    //   }

    //   useEffect(()=>{
    //     updateNews();
    //    },[])

    //    const fetchMoreData = async() => {
    //     console.log("cdm")
    //     const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize+1}`;
    //     setPage(page+1);
    //     let data = await fetch(url); //fetch API returns a promise
    //     let parsedData= await data.json()
    //     setArticles(parsedData.articles);
    //   setTotalResults(parsedData.totalResults);
    // };

  /*Filter the blogs as per input given in input section*/
    const filteredContents = blogs?blogs.filter((content) =>
    content.metadesc.toLowerCase().includes(searchedTitle)
  ):null
    
  const displayedContents = searchedTitle ? filteredContents : blogs;

  useEffect(() => {
	  createClient
			.fetch(
				`*[_type == "blog"]`
			)
			.then((data) => SetBlogs(data))
			.catch(console.error);
	}, []);

  return (
    
  <div className='blogContainer'>
    <Navbar />
    <div className='blogBackground'></div>
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
      <p id="path">$cd~/Blogs</p>
      <div className="add-blog">
      <img id='write'  style={{transform: isBoxVisible ? 'rotate(45deg)' : 'none'}} src="src/assets/plus.png" alt="" onClick={handleClick}/>
      <Blogform onClick={handleClick} isVisible={isBoxVisible}/>
      <p className='new-blog'>Write Blog</p>
      </div>
      <form action="" className="search-bar" method="get">
        <input type="text" placeholder="Search for blogs..." name="q" value={searchedTitle} onChange={handleInputChange}/>
        <button type="submit">
          <img src="src/assets/search.png" alt="" />{" "}
        </button>
      </form>
      {/*  */}
      <div  className={`cardContainer ${isBoxVisible ? 'blurred' : ''}`} onClick={handleBackgroundClick}>
        <h2>OUR BLOGS</h2>
        <div className="cards">
            {displayedContents && displayedContents.map((blog)=>{
                    return <div className="card-design" key={blog._id}>
                    <Blogcard blog={blog}/>
                    {/* imageUrl={element.urlToImage} tags={element.Tags?element.Tags.slice(0,88)+"....":""*/}
                    </div>
            })}
        </div>
      </div>
      <div className="footer">
          <Footer/>
        </div>
    </div>
    
  );
}
  

Blogs.defaultProps={
    country: "in",
    pageSize: 8,
    category: 'general'
  }
  Blogs.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

export default Blogs

