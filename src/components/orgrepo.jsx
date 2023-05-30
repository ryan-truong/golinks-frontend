import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import RepoCard from './repocard'
import './orgpage.css'

const OrgRepo = () => {
    const [post, setPost] = useState(null);

    const location = useLocation();

    useEffect(() => {
      axios.get(`https://api.github.com/repos${location.pathname}/git/commits`)
      .catch(function (error){
          console.log(error.response);
      })
      .then((response) => {
        setPost(response.data);
      });
    }, []);

    console.log(post);

    if(post != null){
      return(
          <>
              <h1>{location.pathname.split("/").slice(-1)} commits</h1>
              <div className = 'container'>
                  {post.map( (entry) => (
                      <RepoCard key={entry.id}
                      name={entry.name}
                      language={entry.language}
                      description={entry.description}
                      star={entry.stargazers_count}
                      fork={entry.forks_count}
                      date={entry.created_at.substring(0,entry.created_at.indexOf("T"))}
                      />
                  )
                  )}
              </div>
          </>
      )
  }
}


export default OrgRepo;