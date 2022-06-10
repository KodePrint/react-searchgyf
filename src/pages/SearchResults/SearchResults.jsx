import { useRef, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";
// Import components
import Loading from "components/Loading/Loading";
// Import containers
import ListOfGifs from "containers/ListOfGifs/ListOfGifs";
// Import Services
// import { getGifs } from "services/getGifs";
// Import custom hooks
import { useGifs } from "hooks/useGifs";
import { useNearScreen } from "hooks/useNearScreen";

const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ 
    externalRef: loading ? null : externalRef, 
    once: false 
  })

  const debounceHandleNextPage = useCallback(
    debounce(
      () => setPage(prevPage => prevPage + 1), 200
    ), 
  [])
  
  
  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])
  
  return <>
    {loading 
      ? <Loading /> 
      : <>
        <h3 className="App-title">{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
    {/* <button 
    className="btn-primary btn-more-gifs" 
    onClick={handleNextPage}>
      Get more Gif's
    </button> */}
  </>
}

export default SearchResults;