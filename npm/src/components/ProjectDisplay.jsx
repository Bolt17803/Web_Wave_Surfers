
import MarkdownPreview from '@uiw/react-markdown-preview';
import React, { useState } from 'react';
import { fetchReadme } from '@varandas/fetch-readme'; 
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import axios from 'axios';
import '../ProjectDisplay.css';
import Disqus from "disqus-react"
import Navbar from './Navbar';
import { AnimatePresence, motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1658184145200-3358c3338585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  'https://images.unsplash.com/photo-1658186309018-1e3b880acd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1658193624919-50e49d7847e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80',
  'https://images.unsplash.com/photo-1658901097742-98954bfd9b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80',
  'https://images.unsplash.com/photo-1658901097917-f3e4f3cb5f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80',
  'https://images.unsplash.com/photo-1642320009030-ff80041e25ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80',
  'https://images.unsplash.com/photo-1658901097893-cfe9605ca208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80',
  'https://images.unsplash.com/photo-1659039288596-45cf0fbaee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1658730335794-c5edd544ccbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
]

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
}


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
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  function nextStep() {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index - 1)
  }

  const disqusShortname = "openlake-latentvectors"
  const disqusConfig = {
    url: "http://localhost:5173",
    identifier: `${params.projectId}`,
    title: `${params.projectId}`
  }

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
      <div className='mdf-container'>
        <div className='mdf-body'>
          <div className='slideshow-container'>
            <div className='slideshow'>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  variants={variants}
                  animate='animate'
                  initial='initial'
                  exit='exit'
                  src={images[index]}
                  alt='slides'
                  className='slides'
                  key={images[index]}
                  custom={direction}
                />
              </AnimatePresence>
              <button className='prevButton' onClick={prevStep}>
                ◀
              </button>
              <button className='nextButton' onClick={nextStep}>
                ▶
              </button>
            </div>
          </div>
          <div className="mdf">
              <MarkdownPreview  className="ffs" source={readme} />
          </div>
        </div>
      </div>
      <div className='comment-section'>
      <Disqus.DiscussionEmbed
          className='disqus'
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </div>
  );
};

