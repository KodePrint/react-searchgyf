// import { useEffect, useState } from "react";
// Import components
import Loading from "components/Loading/Loading";
// Import containers
import ListOfGifs from "containers/ListOfGifs/ListOfGifs";
// Import Services
// import { getGifs } from "services/getGifs";
// Import custom hooks
import { useGifs } from "hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return <>
    {loading 
      ? <Loading /> 
      : <>
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
      </>
    }
    <button 
    className="btn-primary btn-more-gifs" 
    onClick={handleNextPage}>
      Get more Gif's
    </button>
  </>
}

export default SearchResults;