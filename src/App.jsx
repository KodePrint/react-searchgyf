import ListOfGifs from './containers/ListOfGifs';
import './styles/App.scss'

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword='ps5' />
      </section>
    </div>
  );
}

export default App;
