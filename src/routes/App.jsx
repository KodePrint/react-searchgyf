import { useContext } from 'react';
import { Route, Link, Switch } from 'wouter';
// Import components
import Navbar from 'containers/Navbar/Navbar';
import HeadBar from 'containers/HeadBar/HeadBar';
// Import pages
import FavsGifs from 'pages/FavsGifs/FavsGifs';
import Wrapper from 'containers/Wrapper/Wrapper';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import Login from 'pages/Login/Login';
import SearchPage from 'pages/SearchPage/SearchPage';
import SearchResults from 'pages/SearchResults/SearchResults';
import Detail from 'pages/Detail/Detail';
// Import context
import { GifsContextProvider } from 'context/GifsContext';
import { ThemeContext } from 'context/ThemeContext';
// Import customHooks
// Import assetsgit a
// Import css

function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={theme}>
      <HeadBar />
        <Navbar />
        <Wrapper>
          <Switch>
            <GifsContextProvider>
              <Route path="/" component={Home} />
              <Route path="/search" component={SearchPage} />
              <Route path="/login" component={Login} />
              <Route path="/favs" component={FavsGifs} />
              <Route path="/search/:keyword" component={SearchResults} />
              <Route path="/gif/:id" component={Detail} />
              <Route path='*' component={NotFound} />
            </GifsContextProvider>
          </Switch>
        </Wrapper>
    </div>
  );
}

export default App;
