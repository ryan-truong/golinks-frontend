import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Landing = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();


    const handleSubmit = e =>{
        e.preventDefault();
        navigate(`/${search}`)
    }
    return(
        <div>
        <h1>Search for an Organization</h1>
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="githubOrgSearch" hidden>
                  Search for an organization
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
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Landing;