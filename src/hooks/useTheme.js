import { useEffect, useContext } from "react"
import { getSystemTheme } from "services/getSystemTheme"
import ThemeContext from "context/ThemeContext"

export const useTheme = () => {
  const { themeDark, setThemeDark } = useContext(ThemeContext)
  // Get a body
  const body = document.getElementsByTagName('body')[0]

  // Recuperamos el tema del sistema
  const systemTheme = getSystemTheme()
  // Recuperamos el tema del localStorage
  const localTheme = window.localStorage.getItem('theme')

  useEffect(() => {
    if (systemTheme === "dark" || localTheme === 'dark') {
      setThemeDark(true)
      body.classList.add("dark")
    } else {
      setThemeDark(false)
      body.classList.remove("dark")
    }
  }, [ setThemeDark, systemTheme, body ])
  console.log(systemTheme)

  // Efecto de cambio de tema


  return { themeDark, setThemeDark }
}