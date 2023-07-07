import React,{useContext, useState} from 'react'
import '../Blogform.css'
const Blogform=({isVisible,onClick})=>{
    const [form1, setForm1] = useState([]);
    const [form2, setForm2] = useState([]);
    const [uploaded, setUploaded] = useState(false);
    const contentChange = (event) => {
        setForm1(Array.from(event.target.files));
      };
    
      const imageChange = (event) => {
        setForm2(Array.from(event.target.files));
      };

      const toggle=(isVisible)=>{
        isVisible=!isVisible;
      }

      const handleClick=()=>{
        onClick();
      }
   
      const handleSubmit = async (event) => {
        /*Code to do POST request on clicking the submit button*/
      };
    return(
            <div style={{display: isVisible ? 'flex' : 'none'}} className="box">
                <img id="closeBtn" src="src/assets/x-mark.png" alt="" onClick={handleClick}/>
                <div className="input-box">
                    <h2 className="upload-file">Upload Files</h2>
                    <form action="">
                        <input type="file" accept='.doc,.docx,.pdf' id="contentUpload" onChange={contentChange} hidden/>
                        <label htmlFor="contentUpload" className='uploadLabel'>
                            <span><i className='fa fa-cloud-upload'></i></span>
                            <p>Click to Upload content</p>
                        </label>
                    <div className="selected-files">
                                {form1.length > 0 && (
                        <ul className='selected'>
                            {form1.map((file, index) => (
                            <li key={index}>{file.name.slice(0,34)+'...'}</li>
                            ))}
                        </ul>)}
                    </div>
                        <input type="file" accept='.jpg,.jpeg,.png' id='imageUpload'  onChange={imageChange} hidden/>
                        <label htmlFor="imageUpload" className='uploadLabel'>
                            <span><i className='fa fa-cloud-upload'></i></span>
                            <p>Click to Upload image</p>
                        </label>
                    <div className="selected-files">
                        {form2.length > 0 && (
                        <ul className='selected'>
                            {form2.map((file, index) => (
                            <li key={index}>{file.name.slice(0,34)+'...'}</li>
                            ))}
                        </ul>)}
                     </div>
                     <div className="blog-title">
                        <label htmlFor="">Title</label>
                        <input type="text" id="title" name="title" placeholder="Enter the title"/>
                    </div>
                    <div className="blog-tags">
                        <label htmlFor="">Tags</label>
                        <input type="text" id="tags" name="tags" placeholder="Enter the tags"/>
                    </div>
                    </form>
                <div id="uploadButton">
                    <button type="submit">Upload</button></div>
                </div>  
                {uploaded && <p>File uploaded successfully!</p>}
            </div>
    );
}

export default Blogform;