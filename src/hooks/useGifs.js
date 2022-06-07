import { useState, useEffect, useContext } from "react";
import { getGifs } from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false)
  //const [gifs, setGifs] = useState([])
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)
    // Recuperamos la ultima busqueda
    const kyewordToUse = keyword || window.localStorage.getItem('lastKeyword') || 'random'

    getGifs({ keyword: kyewordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        window.localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs])

  return { loading, gifs }
}