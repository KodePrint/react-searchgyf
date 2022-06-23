import { useState, useEffect, useContext } from "react";
import { getTrendingGifs } from "services/getTrendingGifs";
import { TrendingGifsContext } from "context/TrendinGifsContext";

export const useTrendinGifs = () => {
  const [loading, setLoading] = useState(false)
  const { trendinGifs, setTrendinGifs } = useContext(TrendingGifsContext)

  useEffect(() => {
    setLoading(true)

    getTrendingGifs()
      .then(gifs => {
        setTrendinGifs(gifs)
        setLoading(false)
      })
  },[setTrendinGifs])

  return { loading, trendinGifs }
}