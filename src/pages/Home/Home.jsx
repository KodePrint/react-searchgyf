import { useLocation } from "wouter";
// Import components
import SearchForm from "components/SearchForm/SearchForm";
import ListOfGifs from "containers/ListOfGifs/ListOfGifs";
import Loading from 'components/Loading/Loading'
// import TrendingSearches from "containers/TrendingSearches/TrendingSearches";
import { LazyTrending } from "containers/TrendingSearches/LazyTrending";
// Import custom hooks
import { useGifs } from "hooks/useGifs";
import { useCallback } from "react";

const Home = () => {
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()

  const handleSubmit = useCallback(({ keyword }) => {
    // navegar a otra route
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])
  
  return (<h1>Home</h1>)
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