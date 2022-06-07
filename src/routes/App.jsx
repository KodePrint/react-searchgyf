import { Route, Link } from 'wouter';
// Import pages
import Home from '../pages/Home/Home';
import SearchResults from '../pages/SearchResults/SearchResults';
import Detail from '../pages/Detail/Detail';
// Import context
import { GifsContextProvider } from '../context/GifsContext';
// Import assets
import logo from '../assets/logos/KodePrint_Withe.png'
// Import css
import './App.scss'

function App() {
  
  return (
    // <StaticContext.Provider value={ {name: 'KodePrint', suscribeteAlCanal: true} }>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img className='Logo' src={logo} alt="KodePrint" />
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    // </StaticContext.Provider>
  );
}

export default App;
