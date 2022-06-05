import ListOfGifs from './containers/ListOfGifs';
import { Route, Link } from 'wouter';
import './styles/App.scss'

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link href="/gif/ssj4">Super Sayayin 4</Link>
        <Link href="/gif/Mario">Mario</Link>
        <Link href="/gif/Homero">Homero</Link>
        <Link href="/gif/rocket racoon">Rocket Racoon</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
