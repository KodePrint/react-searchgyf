import { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = [
  'Super Sayayin 4',
  'Mario',
  'Homero',
  'Rocket Racoon'
]

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  console.log(path)

  const handleSubmit = (e) => {
    // navegar a otra route
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
          onChange={handleChange} 
          type="text" 
          value={keyword}
          placeholder="Search for a gif" 
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <h3 className="App-title">The more searching gifs</h3>
      <ul>
        {
          POPULAR_GIFS.map(popularGif => (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>
                Gif  de {popularGif}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default Home;