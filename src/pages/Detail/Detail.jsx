import Gif from 'components/Gifs/Gif';
import { useGlobalGifs } from 'hooks/useGlobalGifs';
import { useSEO } from 'hooks/useSEO';
import { Helmet } from 'react-helmet';
import './Detail.scss'

const Detail = ({params}) => {

  
  const gifs = useGlobalGifs()
  
  const gif = gifs.find(singleGif =>
    singleGif.id === params.id
  );
  
  const title = gif ? gif.title : '';
  
  return (
    <div className="Detail">
      <Helmet>
        <title>{title} | Searchphy</title>
      </Helmet>
      <Gif {...gif} />
    </div>
    )
}

export default Detail;