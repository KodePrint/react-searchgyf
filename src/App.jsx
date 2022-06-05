import { useState, useEffect } from 'react';
import Gif from './components/Gif';
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
          gifs.map(({ id, title, url }) => <Gif 
            key={id} 
            title={title} 
            url={url} 
          />)
        }
      </section>
    </div>
  );
}

export default App;
