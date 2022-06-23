import { Helmet } from 'react-helmet';
// Import context
// Import components
import ListOfGifs from "containers/ListOfGifs/ListOfGifs";
import Loading from 'components/Loading/Loading'
// import TrendingSearches from "containers/TrendingSearches/TrendingSearches";
import { LazyTrending } from "containers/TrendingSearches/LazyTrending";
// Import custom hooks
import { useTrendinGifs } from "hooks/useTrendinGifs";
import { useTheme } from "hooks/useTheme";
// Import Services
// Import Styles
import Title from '../SearchResults/styles.module.scss';

const Home = () => {

  const { theme } = useTheme()
  const { loading, trendinGifs } = useTrendinGifs()

  return (
    <>
      <Helmet>
        <title>Searchphy | Home</title>
        <meta name="description" content="Search your favorite Gif with Searchpy, it uses the Gifphy API to find the best GIF's" />
      </Helmet>
      <div>
        <LazyTrending />
        <h3 className={
          `${theme === 'light' 
          ? (Title.base +' '+ Title.light) 
          : (Title.base +' '+ Title.dark) }`
        }
        >
          Trending
        </h3>
        {
          loading
          ? <Loading />
          : <ListOfGifs gifs={trendinGifs} />
        }
      </div>
    </>
  )
}

export default Home;