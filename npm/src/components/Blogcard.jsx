import React, {useState } from 'react';
import createClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
// import logo from '../assets/openlake_logo.png'
import { Link } from 'react-router-dom';
import '../Blogcard.css'

const builder = imageUrlBuilder(createClient);
// function urlFor(source){
//   return (source);
// }

const Blogcard = ({blog}) => {
  const dynamicPath=`/blog/+${blog.slug?blog.slug.current:""}`;
  const [tags,setTags]=useState('');
  const modifiedTags=(content)=>{
    setTags(content.split(' ').map(function(i){
      if(i.length>0){
         return "#"+i;
      }
    }).join(' '));
  }
  const [cards, setCards] = useState([]);
  // let { title, tags ,image} = props;
  return (
    <div className="card">
      <div className='card-image'><img src={(blog.blogimage) && builder.image(blog.blogimage).width(200).url()} alt={blog.title} /></div>
      {/*  */}
      <div className="card-title"><h5>{blog.title}{" "}</h5></div>
        <div className="description"><p>{blog.metadesc}</p></div>
      <Link className='navigate'  to={dynamicPath} >Read More</Link>
   
      {/* href={"/blog/" + blog.slug} */}
        {/* <p>
          <small className="author">
            By {!author ? "unknown" : author}
          </small>
        </p> */}
        {/* <a href={newsUrl} target="_blank"
            rel="noreferrer"className="navigate">Read More</a> */}
    </div>
  );
};

export default Blogcard;
