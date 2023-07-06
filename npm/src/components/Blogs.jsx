import React, {useEffect,useState} from 'react'
import Navbar from "./Navbar";
import "../Blogs.css";
import Blogcard from "./Blogcard";
import Blogform from './Blogform';
import PropTypes from 'prop-types'
import App from '../App';
 const Blogs=(props) =>{
    const [articles, setArticles]=useState([])
    const [page, setPage]=useState(1)
    const [totalResults, setTotalResults]=useState(0)
    const [searchedTitle,setSearchedTitle]=useState('');
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    // const [contents, setContents] = useState([]);
    const handleInputChange = (event) => {
      setSearchedTitle(event.target.value.toLowerCase());
    };


    const handleClick = () => {
      setIsBoxVisible(!isBoxVisible);
    };
    
      const cap=props.category;
      document.title=props.category;

      const updateNews=async()=>{
        console.log("cdm")
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=83951c0e1b35448c95fd7924393c9e9a&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url); //fetch API returns a promise 83951c0e1b35448c95fd7924393c9e9a
        let parsedData= await data.json()
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);

      }

      useEffect(()=>{
        updateNews();
       },[])

       const fetchMoreData = async() => {
        console.log("cdm")
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url); //fetch API returns a promise
        let parsedData= await data.json()
        setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    };

    const filteredContents = articles.filter((content) =>
    content.title.toLowerCase().includes(searchedTitle)
  );
    
  const displayedContents = searchedTitle ? filteredContents : articles;
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
      <Blogform isVisible={isBoxVisible}/>
      <p className='new-blog'>Write Blog</p>
      </div>
      <form action="" className="search-bar" method="get">
        <input type="text" placeholder="Search for blogs..." name="q" value={searchedTitle} onChange={handleInputChange}/>
        <button type="submit">
          <img src="src/assets/search.png" alt="" />{" "}
        </button>
      </form>
      {/*  */}
      <div  className={`cardContainer ${isBoxVisible ? 'blurred' : ''}`}>
        <h2>OUR BLOGS</h2>
        <div className="cards">
            {displayedContents.map((element)=>{
                    return <div className="card-design" key={element.url}>
                    <Blogcard  title={element.title?element.title:""} description={element.description?element.description.slice(0,88)+"....":""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
            })}
        </div>
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
