import { useContext } from 'react'
import GifsContext from 'context/GifsContext'
import { TrendingGifsContext } from 'context/TrendinGifsContext';

export const useGlobalGifs = () => {
  const { gifs } = useContext(GifsContext)
  const { trendinGifs } = useContext(TrendingGifsContext)

  const globalGifs = gifs.concat(trendinGifs)
  return globalGifs;
}