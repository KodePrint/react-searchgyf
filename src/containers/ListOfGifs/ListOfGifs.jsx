import { useState, useEffect } from "react"
import { getGifs } from "../../services/getGifs"
import Gif from "../../components/Gifs/Gif"
import Loading from "../../components/Loading/Loading"

const ListOfGifs = (props) => {
  console.log(props)
  // const { keyword } = props.params
  // // Crear el estado de los gifs
  // const [gifs, setGifs] = useState([])
  // const [loading, setLoading] = useState(false)

  // // Efecto de carga de los gif al renderizar el componente
  // useEffect(() => {
  //   setLoading(true)
  //   // Utilizando el fetch para obtener los gifs
  //   getGifs({ keyword })
  //     .then(gifs => {
  //       setGifs(gifs)
  //       setLoading(false)
  //     })
  // }, [keyword])

  // if (loading) return <Loading />

  return (
    <h1>Resultado</h1>
  )
  // return gifs.map(({ id, title, url }) => 
  //   <Gif 
  //     id={id}
  //     key={id} 
  //     title={title} 
  //     url={url} 
  //   />)
}

export default ListOfGifs