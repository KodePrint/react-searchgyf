import { useState, useEffect } from 'react';
import './styles/App.scss'

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=YnvNKbJEoanVvFeGIdulWJjWyZg5NdYu&q=developer&limit=25&offset=0&rating=g&lang=en'

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
  // Crear el estado de los gifs
  const [gifs, setGifs] = useState(GIF)

  // Efecto de carga de los gif al renderizar el componente
  useEffect(() => {
    console.log('actualizando los gifs')
    fetch(apiURL)
      .then(res => res.json())
      .then(({data = []}) => {
        if (Array.isArray(data)) {
          const gifs = data.map(image => image.images.downsized_medium.url)
          setGifs(gifs)
        }
      } )
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img key={singleGif} src={singleGif} alt="gif" />)
        }
      </section>
    </div>
  );
}

export default App;
