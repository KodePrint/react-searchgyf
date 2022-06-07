// Import components
import Gif from "components/Gifs/Gif"
// Import CSS
import "./ListOfGifs.scss"

const ListOfGifs = ({ gifs }) => {

  return (
    <div className="ListOfGifs">
      {
        gifs.map(({ id, title, url }) => 
          <Gif 
            id={id}
            key={id} 
            title={title} 
            url={url} 
          />)
      }
    </div>
  )
}

export default ListOfGifs