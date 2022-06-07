import Gif from 'components/Gifs/Gif';
import { useGlobalGifs } from 'hooks/useGlobalGifs';
import './Detail.scss'

const Detail = ({params}) => {
  
  const gifs = useGlobalGifs()
  
  const gif = gifs.find(singleGif =>
    singleGif.id === params.id
  );

  return (
    <div className="Detail">
      <Gif {...gif} />
    </div>
    )
}

export default Detail;