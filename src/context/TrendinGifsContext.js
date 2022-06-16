import React, { useState } from 'react'

export const TrendingGifsContext = React.createContext({})

export const TrendinGifsContextProvider = ({children}) => {
  const [trendinGifs, setTrendinGifs] = useState([])

  return <TrendingGifsContext.Provider value={{ trendinGifs, setTrendinGifs }} >
    {children}
  </TrendingGifsContext.Provider>
}