import { useState, useEffect, useContext } from "react";
import { getGifs } from "services/getGifs";
import GifsContext from "context/GifsContext";

const INTIAL_PAGE = 0;

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INTIAL_PAGE)
  //const [gifs, setGifs] = useState([])
  const { gifs, setGifs } = useContext(GifsContext)
  
  // Recuperamos la ultima busqueda
  const kyewordToUse = keyword || window.localStorage.getItem('lastKeyword') || 'random'
  
  // Efecto de carga de los gifs
  useEffect(() => {
    setLoading(true)

    getGifs({ keyword: kyewordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        window.localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, kyewordToUse, setGifs])

  // Efecto cada vez que la pagina cambie
  useEffect(() => {
    if (page === INTIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: kyewordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [kyewordToUse, page, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}