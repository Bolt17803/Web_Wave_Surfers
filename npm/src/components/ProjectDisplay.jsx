import React, { useState } from 'react';
import axios from 'axios';

export default function ProjectDisplay(){

  const [repoLink, setRepoLink] = useState('');
  const [title, setTitle] = useState('');
  const [collaborators, setCollaborators] = useState([]);

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
  console.log(window.innerWidth,window.innerHeight)
  return (
    <div>
      <input type="text" placeholder="Enter repo link" value={repoLink} onChange={(e) => setRepoLink(e.target.value)} />
      <button onClick={fetchRepoInfo}>Fetch Info</button>
      
      {title && (
        <div>
          <h2>Repository Title: {title}</h2>
          <h3>Collaborators:</h3>
          <ul>
            {collaborators.map((collaborator, index) => (
              <li key={index}>{collaborator}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

