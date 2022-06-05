import { useState, useEffect } from "react"
import { getGifs } from "../services/getGifs"
import Gif from "../components/Gif"

const ListOfGifs = ({ keyword }) => {
  // Crear el estado de los gifs
  const [gifs, setGifs] = useState([])

  // Efecto de carga de los gif al renderizar el componente
  useEffect(() => {
    console.log('actualizando los gifs')
    // Utilizando el fetch para obtener los gifs
    getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [keyword])

  return gifs.map(({ id, title, url }) => 
    <Gif 
      key={id} 
      title={title} 
      url={url} 
    />)
}

export default ListOfGifs