
import MarkdownPreview from '@uiw/react-markdown-preview';
import React, { useState } from 'react';
import { fetchReadme } from '@varandas/fetch-readme'; 
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import axios from 'axios';
import '../ProjectDisplay.css';
import Navbar from './Navbar';

function MarkdownToHtml(text){
  return(
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
  )
}

export default function ProjectDisplay(){
  
  const params = useParams();

  const [repoLink, setRepoLink] = useState('');
  const [title, setTitle] = useState('');
  const [collaborators, setCollaborators] = useState([]);
  const [readme, setReadme] = useState(null);

  const fetchRepoInfo = async () => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repoLink}`);
      setTitle(response.data.name);
      
      const collaboratorsResponse = await axios.get(response.data.collaborators_url);
      setCollaborators(collaboratorsResponse.data.map(collaborator => collaborator.login));
    } catch (error) {
      console.log(error);
    }
  };
  
  (async () => {
    var readmeFile = await fetchReadme({
      username: 'OpenLake',
      repository: `${params.projectId}`,
    })
    readmeFile=readmeFile.replace(/\.\//g,`https://raw.githubusercontent.com/OpenLake/${params.projectId}/master/`) //For those markdowns which use local directory format for linking images
    setReadme(readmeFile);
    console.log((readmeFile)); 
  })()

  return (
    <div className='markdown'>
      <Navbar />
      <div className='mdf-body'>
        <div className="mdf">
            <MarkdownPreview  className="ffs" source={readme} />
        </div>
      </div>
    </div>
  );
};

