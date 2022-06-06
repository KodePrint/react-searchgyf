import Home from '../pages/Home/Home';
import SearchResults from '../pages/SearchResults/SearchResults';
import Detail from '../pages/Detail/Detail';
import { Route } from 'wouter';
import './App.scss'

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
