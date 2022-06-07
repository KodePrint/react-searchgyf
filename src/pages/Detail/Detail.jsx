import { useContext } from "react";
import Gif from '../../components/Gifs/Gif';
import GifsContext from '../../context/GifsContext'

const Detail = ({params}) => {
  
  const { gifs } = useContext(GifsContext);
  
  const gif = gifs.find(singleGif =>
    singleGif.id === params.id
  );

  return (
    <Gif {...gif} />
    )
}

export default Detail;