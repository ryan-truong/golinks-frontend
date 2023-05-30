import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import RepoCard from './repocard'
import './orgpage.css'

const OrgPage = () => {
    const [post, setPost] = useState(null);

    const location = useLocation();

    useEffect(() => {
      axios.get(`https://api.github.com/orgs${location.pathname}/repos`)
      .catch(function (error){
          console.log(error.response);
      })
      .then((response) => {
        setPost(response.data);
      });
    }, []);

    console.log(post);

    return(
        <>
            <h1>{location.pathname.slice(1)} repos</h1>
            <RepoCard 
                name="netflix" 
                language="Java" 
                description="Test"
                star="5"
                fork="10"
                date="Jan"
            />
        </>
    )
}

export default OrgPage;