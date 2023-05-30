import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// import CommitCard from './repocard'
import './orgpage.css'

const OrgRepo = () => {
    const [post, setPost] = useState(null);

    const location = useLocation();

    useEffect(() => {
      axios.get(`https://api.github.com/repos${location.pathname}/commits`)
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
    
              </div>
          </>
      )
  }
}


export default OrgRepo;