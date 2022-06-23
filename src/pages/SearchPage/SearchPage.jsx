import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
// Import components
import SearchForm from "components/SearchForm/SearchForm";
import Loading from "components/Loading/Loading";
import ListOfGifs from "containers/ListOfGifs/ListOfGifs";
// Import Custom Hooks
import { useGifs } from "hooks/useGifs";
import { useTheme } from "hooks/useTheme";
// Import Styles
import TitleStyle from './styles.module.scss'
import { useSEO } from "hooks/useSEO";

const SearchPage = () => {
  const [path, pushLocation] = useLocation();
  const {loading, gifs, kyewordToUse} = useGifs()
  const { theme } = useTheme();

  const handleSubmit = (data) => {
    // navegar a la pagina del gif
    pushLocation(`/search/${data.keyword}`);
  }
  return (
    <>
      <Helmet>
          <title>{`Searchphy | Search`}</title>
          <meta name="description" content="Use the search form to find the perfect Gif...!" />
      </Helmet>
      <div>
        <SearchForm onSubmit={handleSubmit} />
        <div className='LastSearch'>
          <h3 className={
          `${theme === 'light' 
            ? (TitleStyle.title +' '+ TitleStyle.light) 
            : (TitleStyle.title +' '+ TitleStyle.dark) }`
          }
          >
            Last Search: <b>{decodeURI(kyewordToUse)}</b>
          </h3>
          { loading ? <Loading /> : <ListOfGifs gifs={gifs} /> }
        </div>
      </div>
    </> 
  )
}

export default SearchPage;