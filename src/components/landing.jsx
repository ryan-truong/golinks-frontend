import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './landing.css'

const Landing = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();


    const handleSubmit = e =>{
        e.preventDefault();
        navigate(`/${search}`)
    }
    return(
        <div className='wrapper'>
        <h1>Search For a GitHub Organization</h1>
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className = 'container'>
                <label htmlFor="githubOrgSearch" hidden>
                  Search For a GitHub Organization
                </label>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="form-control"
                    id="githubOrgSearch"
                    aria-describedby="githubOrgSearch"
                    placeholder="Search for a GitHub Organization"
                  />
              </div>
              <button type="submit" className='container'>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Landing;