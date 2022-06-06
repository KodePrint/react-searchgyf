import { useState, useEffect } from "react";
import { getGifs } from "../services/getGifs";

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)

    const kyewordToUse = keyword || window.localStorage.getItem('lastKeyword') || 'random'

    getGifs({ keyword: kyewordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        window.localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword])

  return { loading, gifs }
}