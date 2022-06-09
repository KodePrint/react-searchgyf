import { useRef, useEffect } from 'react'
import Masonry from 'react-masonry-css'

// Import components
import Gif from "components/Gifs/Gif"
// Import CSS
import "./ListOfGifs.scss"

const ListOfGifs = ({ gifs }) => {
  
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  

  const container = useRef('')

  return (
    <div ref={container} className="ListOfGifs">
      <Masonry
        className='my-masonry-grid'
        breakpointCols={breakpointColumnsObj}
        columnClassName='my-masonry-grid_column'
      >
        {
          gifs.map(({ id, title, url }) => 
            <Gif 
              id={id}
              key={id} 
              title={title} 
              url={url} 
            />)
        }
      </Masonry>
    </div>
  )
}

export default ListOfGifs