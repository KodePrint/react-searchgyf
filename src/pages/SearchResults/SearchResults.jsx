import { useEffect, useState } from "react";
// Import components
import Loading from "../../components/Loading/Loading";
// Import containers
import ListOfGifs from "../../containers/ListOfGifs/ListOfGifs";
// Import Services
import { getGifs } from "../../services/getGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params
  const [loading, setLoadig] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoadig(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoadig(false)
      })
  }, [keyword])

  return (
    <>
      {
        loading 
        ? <Loading /> 
        : <ListOfGifs gifs={gifs} />
      }
    </>
  );
}

export default SearchResults;