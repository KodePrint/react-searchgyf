import { useContext } from 'react';
import { Route, Link, Switch } from 'wouter';
// Import components
import Navbar from 'containers/Navbar/Navbar';
import HeadBar from 'containers/HeadBar/HeadBar';
// Import pages
import Wrapper from 'pages/Wrapper/Wrapper';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import Login from 'pages/Login/Login';
import SearchResults from 'pages/SearchResults/SearchResults';
import Detail from 'pages/Detail/Detail';
// Import context
import { GifsContextProvider } from 'context/GifsContext';
import { ThemeContextProvider } from 'context/ThemeContext';
// Import customHooks
// Import assets
import logo from 'assets/logos/KodePrint_Withe.png'
// Import css
import AppStyle from './styles.module.css';

function App() {
  
  return (
    <ThemeContextProvider>
      <div className={AppStyle.app}>
        <HeadBar />
          <Navbar />
          <Wrapper>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Wrapper>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
