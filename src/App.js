import './App.css';
import logoReact from './imagenes/logo.svg'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import { useState } from 'react'

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);      
  };

  const reiniciarContador = () => {
    setNumClics(0);     
  };

  const decrementarClic = () =>{
    setNumClics(numClics - 1);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={logoReact} alt='logo de FreeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics = {numClics}
        />
        <Boton
          texto = 'Aumentar'
          esBotonDeClic = {true}
          manejarClic = { manejarClic }
        />
         <Boton
          texto = 'Decrementar'
          esBotonDeClic = {true}
          manejarClic = { decrementarClic}
        />
        <Boton
          texto = 'Reiniciar'
          esBotonDeClic = {false}
          manejarClic = { reiniciarContador}
        />
       
      </div>
    </div>

  );
}

export default App;
