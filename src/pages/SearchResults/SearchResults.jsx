// import { useEffect, useState } from "react";
// Import components
import Loading from "../../components/Loading/Loading";
// Import containers
import ListOfGifs from "../../containers/ListOfGifs/ListOfGifs";
// Import Services
// import { getGifs } from "../../services/getGifs";
// Import custom hooks
import { useGifs } from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  return <>
    {loading 
      ? <Loading /> 
      : <ListOfGifs gifs={gifs} />
    }
  </>
}

export default SearchResults;