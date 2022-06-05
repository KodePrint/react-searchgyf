import { useState } from 'react';
import './styles/App.scss'

// Creamos una constante con GIFs de Developers
const GIF = [
  'https://media2.giphy.com/media/bGgsc5mWoryfgKBx1u/200w.webp?cid=ecf05e47bhwyaxqkfcu0ewd5m1zv3jbbhybxpu4f622vf3pz&rid=200w.webp&ct=g',
  'https://media4.giphy.com/media/KrkvAXa1HZAjK/giphy.webp?cid=ecf05e47bhwyaxqkfcu0ewd5m1zv3jbbhybxpu4f622vf3pz&rid=giphy.webp&ct=g',
  'https://media0.giphy.com/media/9LQHvkbIzTSLe/200w.webp?cid=ecf05e47bhwyaxqkfcu0ewd5m1zv3jbbhybxpu4f622vf3pz&rid=200w.webp&ct=g',
  'https://media2.giphy.com/media/KAq5w47R9rmTuvWOWa/200.webp?cid=ecf05e47bhwyaxqkfcu0ewd5m1zv3jbbhybxpu4f622vf3pz&rid=200.webp&ct=g',
  'https://media2.giphy.com/media/4Zgy9QqzWU8C3ugvCa/giphy.webp?cid=ecf05e47bhwyaxqkfcu0ewd5m1zv3jbbhybxpu4f622vf3pz&rid=giphy.webp&ct=g'
]

// Creamos otra constante con GIFs de Avengers
const DIFERENTS_GIF = [
  'https://media3.giphy.com/media/N8X0zLaoVR0NW/giphy.webp?cid=ecf05e47n0exdula2no9oiaygu7jh5c785kbvxe1zot88s3s&rid=giphy.webp&ct=g',
  'https://media4.giphy.com/media/hvdL7Xcmperfi/200w.webp?cid=ecf05e47n0exdula2no9oiaygu7jh5c785kbvxe1zot88s3s&rid=200w.webp&ct=g',
  'https://media4.giphy.com/media/IhsgZEmpm3gpa/giphy.webp?cid=ecf05e4759ft4j3cwkdbki8w6dkvnbntjoujnool5di4eepx&rid=giphy.webp&ct=g'
]

function App() {
  const [gifs, setGifs] = useState(GIF)

  fetch('https://api.giphy.com/v1/gifs/search?api_key=YnvNKbJEoanVvFeGIdulWJjWyZg5NdYu&q=pandas&limit=25&offset=0&rating=g&lang=en')
  
  return (
    <div className="App">
      <sectoiin className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} alt="gif" />)
        }
        <button onClick={() => setGifs(DIFERENTS_GIF)}>Change Gifs</button>
      </sectoiin>
    </div>
  );
}

export default App;
