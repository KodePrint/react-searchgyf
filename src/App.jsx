import { useState, useEffect } from 'react';
import { getGifs } from './services/getGifs';
import './styles/App.scss'

function App() {
  // Crear el estado de los gifs
  const [gifs, setGifs] = useState([])

  // Efecto de carga de los gif al renderizar el componente
  useEffect(() => {
    console.log('actualizando los gifs')
    // Utilizando el fetch para obtener los gifs
    getGifs({ keyword: 'baby groot' }).then(gifs => setGifs(gifs))
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => {
            return <div key={singleGif.id} className="">
                <p>{singleGif.id}</p>
                <h3>{singleGif.title}</h3>
                <img src={singleGif.url} alt="gif" />
              </div>
            }
          )
        }
      </section>
    </div>
  );
}

export default App;
