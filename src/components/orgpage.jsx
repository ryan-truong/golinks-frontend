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

    function compare( a, b ) {
        if ( a.stargazers_count < b.stargazers_count ){
          return 1;
        }
        if ( a.stargazers_count > b.stargazers_count ){
          return -1;
        }
        return 0;
      }

    if(post != null){
        post.sort( compare );

        return(
            <>
                <h1>{location.pathname.slice(1)} repos</h1>
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

export default OrgPage;