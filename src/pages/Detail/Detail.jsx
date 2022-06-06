import { useContext } from "react";
import StaticContext from '../../context/StaticContext'
import GifsContext from '../../context/GifsContext'

const Detail = ({params}) => {
  
  const {gifs} = useContext(GifsContext);
  console.log(gifs);

  return (
    <h1>Gif con id: {params.id}</h1>
  );
}

export default Detail;