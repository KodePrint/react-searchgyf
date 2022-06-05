import ListOfGifs from './containers/ListOfGifs';
import { Route } from 'wouter';
import './styles/App.scss'

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <a href="/gif/ssj4">Super Sayayin 4</a>
        <a href="/gif/Mario">Mario</a>
        <a href="/gif/Homero">Homero</a>
        <a href="/gif/rocket racoon">Rocket Racoon</a>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
