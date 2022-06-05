import { useState, useEffect } from "react"
import { getGifs } from "../services/getGifs"
import Gif from "../components/Gif"
import Loading from "../components/Loading"

const ListOfGifs = (props) => {
  const { keyword } = props.params
  // Crear el estado de los gifs
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  // Efecto de carga de los gif al renderizar el componente
  useEffect(() => {
    setLoading(true)
    // Utilizando el fetch para obtener los gifs
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  if (loading) return <Loading />

  return gifs.map(({ id, title, url }) => 
    <Gif 
      id={id}
      key={id} 
      title={title} 
      url={url} 
    />)
}

export default ListOfGifs