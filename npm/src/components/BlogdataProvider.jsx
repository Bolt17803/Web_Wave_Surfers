import React,{useState} from "react";
import BlogsContext from '../contexts/blogContext'
import Blogs from "./Blogs";
const BlogdataProvider=({sheetData,children})=>{
  const test=[1,2,3];
    const [data, setData] = useState(test);

    return (
        <BlogsContext.Provider value={data}>
          {children}
        </BlogsContext.Provider>
      );
    };

export default BlogdataProvider;