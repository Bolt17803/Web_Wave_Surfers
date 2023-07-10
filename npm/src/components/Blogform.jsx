import React,{useContext, useState,useEffect} from 'react'
import '../Blogform.css'
import Blogcard from './Blogcard';
import X from '../assets/x-mark.png'
import axios from 'axios';
import Blogs from './Blogs';
import BlogdataProvider from './BlogdataProvider'
// import blogContext from '../contexts/blogContext';
import DrivePicker from 'react-google-drive-picker'

const Blogform=({isVisible,onClick})=>{
    // const [content, setContent] = useState([]);
    // const [image, setImage] = useState([]);
    const [uploaded, setUploaded] = useState(false);
    const [image, setImage] = useState(null);
    const [content,setContent] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTag] = useState('');
    const [openPicker,data,authResponse]= DrivePicker()
    // const [formData, setFormData] = useState({});
    const [sheetData, setSheetData] = useState([]);

    // const handleOpenPicker=()=>{
    //     openPicker({
    //         clientId: "",
    //         developerKey: "",
    //         viewId: "DOCS",
    //         showUploadView: true,
    //         showUploadFolders: true,
    //         supportDrives: true,
    //         multiselect:true
    //     })
    // }

    const contentChange = (event) => {
        setContent(event.target.files[0]);
      };
    
      const imageChange = (event) => {
        setImage(event.target.files[0]);
      };
    
    const titleChange=(event)=>{
        setTitle(event.target.value)
    }

    const tagsChange=(event)=>{
        setTag(event.target.value)
    }

      const handleClick=()=>{
        onClick();
      }

   
      const handleSubmit = async (event) => {
        event.preventDefault();
            fetch('https://sheetdb.io/api/v1/5t4vzczfual72', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    'Title': `${title}`,
                    'Tags': `${tags}`
                }
            ]
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                setSheetData(data);
                console.log(sheetData);
              }
        });
        setUploaded(true);
  }

        useEffect(() => {
            if (sheetData.length > 0) {
            console.log('sheetData:', sheetData);
            }
        }, [sheetData]);

        // const formData={
        //     title:`${title}`,
        //     tags:`${tags}`,
        // };

    
    return(
            <div style={{display: isVisible ? 'flex' : 'none'}} className="box">
                <img id="closeBtn" src={X} alt="" onClick={handleClick}/>
                <div className="input-box">
                    <h2 className="upload-file">Upload Files</h2>
                    <form action="">
                        <input type="file" accept='.doc,.docx,.pdf' id="contentUpload" onChange={contentChange} hidden/>
                        <label htmlFor="contentUpload" className='uploadLabel'>
                            <span><i className='fa fa-cloud-upload'></i></span>
                            <p>Click to Upload content</p>
                        </label>
                    <div className="selected-files">
                        {content && content.name.slice(0,34)+'...'}
                    </div>
                        <input type="file" accept='.jpg,.jpeg,.png' id='imageUpload'  onChange={imageChange} hidden/>
                        <label htmlFor="imageUpload" className='uploadLabel'>
                            <span><i className='fa fa-cloud-upload'></i></span>
                            <p>Click to Upload image</p>
                        </label>
                    <div className="selected-files">
                           {image && image.name.slice(0,34)+'...'}
                     </div>

                    {/* <div className="blog-content">
                        <label htmlFor="">Content</label>
                        <textarea name="content" id="content" onChange={contentChange} placeholder='<Write your content...../>'></textarea>
                    </div> */}

                     <div className="blog-title">
                        <label htmlFor="">Title</label>
                        <input type="text" id="title" name="title" placeholder="Enter the title" onChange={titleChange} style={{color:'black'}}/>
                    </div>
                    <div className="blog-tags">
                        <label htmlFor="">Tags</label>
                        <input type="text" id="tags" name="tags" placeholder="Enter the tags" onChange={tagsChange} style={{color:'black'}}/>
                    </div>
                    </form>
                <div id="uploadButton">
                    <button type="submit" onClick={handleSubmit}>Upload</button></div>
                </div>  
                {uploaded && <p style={{color:'white'}}>File uploaded successfully!</p>}
                    <BlogdataProvider sheetData={sheetData}/>
            </div>
    );
}

export default Blogform;