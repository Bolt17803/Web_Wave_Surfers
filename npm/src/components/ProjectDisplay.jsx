
import MarkdownPreview from '@uiw/react-markdown-preview';
import React, { useEffect, useState } from 'react';
import { fetchReadme } from '@varandas/fetch-readme'; 
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import axios from 'axios';
import '../ProjectDisplay.css';
import Disqus from "disqus-react"
import Navbar from './Navbar';
import { AnimatePresence, motion } from 'framer-motion'
import imgs from './Images.js';



/* CODE FOR MAINTAINERS:
const regex = /- 👤 \*\*(.*)\*\* \[@(.*)\]\((.*)\)/g;
    const maintainers = [];
    let match;

    while ((match = regex.exec(readmeFile)) !== null) {
      const [, name, username, githubLink] = match;
      maintainers.push({ name, username, githubLink });
    }

    console.log(maintainers);
*/
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

function ContributorCard(contributor){
  return(
    <a href={contributor.url}>
      <div className='contributor-card' onClick={()=>navigate(`https://api.github.com/users/${contributor.login}`)}>
        <img src={contributor.profilePic}></img>
        <h1>{contributor.name}</h1>
      </div>
    </a>
  );
}
function MarkdownToHtml(text){
  return(
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
  )
}

const fetchData = () => {
  return fetch(`https://api.github.com/users/${githubUser}`)
    .then((response) => response.json())
    .then((data) => setGithubData(data));
}

export default function ProjectDisplay(){

  var projectRepo = ['Activity-Tracker','canonforces','Leaderboard-Pro','Knowledge-Sharing-Platform','Homework-Scheduler ','Photo-Sharing-App','iitbh-cgpa']
  
  const params = useParams();

  const [repoLink, setRepoLink] = useState('');
  const [title, setTitle] = useState('');
  const [collaborators, setCollaborators] = useState([]);
  const [readme, setReadme] = useState(null);
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [contributors, setContributors] = useState([]);
  //const [repoName, setRepoName]  = useState(params.projectId);
  const images = imgs[projectRepo.findIndex((id)=>(id===params.projectId))]
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
  
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/OpenLake/${params.projectId}/contributors`);
        const data = response.data;

        const contributorsData = await Promise.all(
          data.map(async contributor => {
            const contributorResponse = await axios.get(`https://api.github.com/users/${contributor.login}`);
            const contributorData = contributorResponse.data;
            return {
              username: contributor.login,
              name: contributorData.name || 'N/A',
              profilePic: contributorData.avatar_url,
              url:`https://github.com/${contributor.login}`
            };
          })
        );

        setContributors(contributorsData);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };

    fetchContributors();
  }, []);

  console.log(contributors)
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
    console.log(readme);
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
          <h1 className='contributors-heading'>Contributors</h1>
          <div className='contributor-section'>
            {contributors.map(contributor => <ContributorCard name={contributor.name} profilePic={contributor.profilePic} url={contributor.url}/>)}
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

