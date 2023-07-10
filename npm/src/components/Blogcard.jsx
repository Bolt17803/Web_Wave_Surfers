import React, {useState } from 'react';
import '../Blogcard.css'
const Blogcard = (props) => {
  const [cards, setCards] = useState([]);
  let { title, tags } = props;
  return (
    <div className="card">
      <div className='card-image'><img src="" alt="..." /></div>
      <div className="card-title"><h5>{title}{" "}</h5></div>
        <div className="description"><p>{tags}</p></div>
      <button className='navigate'>Read More</button>

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
