import { useState, useEffect } from "react";
import { useLocation } from "wouter";
// Import context
// Import components
import SearchForm from "components/SearchForm/SearchForm";
import ListOfGifs from "containers/ListOfGifs/ListOfGifs";
import Loading from 'components/Loading/Loading'
// import TrendingSearches from "containers/TrendingSearches/TrendingSearches";
import { LazyTrending } from "containers/TrendingSearches/LazyTrending";
// Import custom hooks
import { useTrendinGifs } from "hooks/useTrendinGifs";
import { useGifs } from "hooks/useGifs";
import { useCallback, useContext } from "react";
import { useTheme } from "hooks/useTheme";
// Import Services
import { getTrendingGifs } from "services/getTrendingGifs";
// Import Styles
import Title from '../SearchResults/styles.module.scss';

const Home = () => {

  const { theme } = useTheme()
  const { loading, trendinGifs } = useTrendinGifs()
  
  // const [path, pushLocation] = useLocation()
  // const {loading, gifs} = useGifs()

  // const handleSubmit = useCallback(({ keyword }) => {
  //   // navegar a otra route
  //   pushLocation(`/search/${keyword}`)
  // }, [pushLocation])
  
  return (
    <div>
      <h3 className={
          `${theme === 'light' 
            ? (Title.base +' '+ Title.light) 
            : (Title.base +' '+ Title.dark) }`
        }
      >
        Trending</h3>
      <ListOfGifs gifs={trendinGifs} />
    </div>
  )
  // return (
  //   <>
  //     <SearchForm onSubmit={handleSubmit} />
  //     <div className="LastSearch">
  //       <h3>Last Search</h3>
  //       { loading ? <Loading /> : <ListOfGifs gifs={gifs} /> }
  //     </div>
  //     <LazyTrending />
  //   </>
  // );
}

export default Home;