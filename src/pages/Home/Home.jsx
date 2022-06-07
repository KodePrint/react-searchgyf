import { useState } from "react";
import { Link, useLocation } from "wouter";
// Import components
import ListOfGifs from "containers/ListOfGifs/ListOfGifs";
import Loading from 'components/Loading/Loading'
// import TrendingSearches from "containers/TrendingSearches/TrendingSearches";
import { LazyTrending } from "containers/TrendingSearches/TrendingSearches";
// Import custom hooks
import { useGifs } from "hooks/useGifs";

const POPULAR_GIFS = [
  'Super Sayayin 4',
  'Mario',
  'Homero',
  'Rocket Racoon'
]

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()

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
      <form onSubmit={handleSubmit} className='SearchForm'>
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
      <div className="LastSearch">
        <h3>Last Search</h3>
        { loading ? <Loading /> : <ListOfGifs gifs={gifs} /> }
      </div>
      <LazyTrending />
    </>
  );
}

export default Home;