import { useState, useEffect } from "react";
import { getTrendingGifs } from "services/getTrendingGifs";

export const useTrendinGifs = () => {
  const [loading, setLoading] = useState(false)
  const [trendinGifs, setTrendinGifs] = useState([])

  useEffect(() => {
    setLoading(true)

    getTrendingGifs()
      .then(gifs => {
        setTrendinGifs(gifs)
        setLoading(false)
      })
  },[])

  return { loading, trendinGifs }
}