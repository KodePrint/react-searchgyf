import React, { useState } from 'react'
import { getSystemTheme } from 'services/getSystemTheme'

export const ThemeContext = React.createContext({})

export const ThemeContextProvider = ({children}) => {
  // Get localStorage theme
  const localTheme = window.localStorage.getItem('theme') || getSystemTheme()
  // Local Storage to save the theme chocie
  const [theme, setTheme] = useState(localTheme)

  return <ThemeContext.Provider value={{ theme, setTheme }} >
    {children}
  </ThemeContext.Provider>
}