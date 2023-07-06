import React,{useContext, useState} from 'react'
import '../Blogform.css'
const Blogform=({isVisible})=>{
    const [form1, setForm1] = useState([]);
    const [form2, setForm2] = useState([]);
    const [uploaded, setUploaded] = useState(false);
    const contentChange = (event) => {
        setForm1(Array.from(event.target.files));
      };
    
      const imageChange = (event) => {
        setForm2(Array.from(event.target.files));
      };
   
      const handleSubmit = async (event) => {
        /*Code to do POST request on clicking the submit button*/
      };
    return(
            <div style={{display: isVisible ? 'flex' : 'none'}} className="box">
                {/* <img id="closeBtn" src="src/assets/x-mark.png" alt="" onClick={}/> */}
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
                    </form>
                <div id="uploadButton">
                    <button type="submit">Upload</button></div>
                </div>  
                {uploaded && <p>File uploaded successfully!</p>}
                {/* <div id="fileWrapper">
                    <h3 className="uploaded">Uploaded Documents</h3>
                    <div className="showfilebox">
                        <div className="left">
                            <span className="filetype">Pdf</span>
                            <h3>Aks.pdf</h3>
                        </div>
                        <div className="right">
                            <span>&#215;</span>
                        </div>
                    </div>
                </div> */}
            </div>


        // NOT WORKING 
    //     <div className='form'>
    //     <form  action="" onSubmit={handleSubmit}>
    //     <input
    //         type="file"
    //         id="imageUpload"
    //         accept=".jpg,.jpeg,.png"
    //         onChange={handleFileChange} 
    //         hidden
    //       />
    //       <label htmlFor="fileUpload">Choose an image for your blog:
    //       <span><i className='fa fa-cloud-upload'></i></span>
    //                <p>Click to Upload</p></label>
    //       {selectedFile && <p>Selected File: {fileName}</p>}
    //     </form>
    //     <form>
    //     <input
    //         type="file"
    //         id="contentUpload"
    //         accept=".pdf,.doc,.docx"
    //         onChange={handleFileChange} 
    //       />
    //     <label htmlFor="fileUpload">Choose the content for your blog:
    //     <span><i className='fa fa-cloud-upload'></i></span>
    //                <p>Click to Upload</p></label>
    //       {selectedFile && <p>Selected File: {fileName}</p>}
    //     </form>
    //     <button id="uploadButton" type="submit">Upload</button>
    //     {uploaded && <p>File uploaded successfully!</p>}
    //   </div>
    );
}

export default Blogform;