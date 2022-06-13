import React, { useState } from 'react'

const Context = React.createContext({})

export const ThemeContextProvider = ({children}) => {
  const [themeDark, setThemeDark] = useState()

  return <Context.Provider value={{ themeDark, setThemeDark }} >
    {children}
  </Context.Provider>
}

export default Context