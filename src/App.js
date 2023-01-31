//import logo from './logo.svg';
import './App.css';
import Ejercicio from './components/Ejercicio';
import Saludos from './components/Saludos';
import Tareas from './components/Tareas';
import { datos } from './components/datos';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(datos);

  const eliminarClick = (item)=>{
    console.log("eliminando tarea")
    if(window.confirm("Confrime que sea elimnar esta tarea ?"))
    {
      const nuevaLista = data.filter( tarea => {
        return tarea.titulo!==item.titulo;
      });
      //console.log("nueva lista", nuevalista)
      setData(nuevaLista);
    }
    //console.log("Dato a eliminar", item); 
  }

  const guardarTarea = (tarea) => {
    console.log("Esta es la nueva tarea", tarea);
    setData([...data, tarea]);
  }

  return (
    <div className="App">
      <h1>Primeros pasos con REACT</h1>
      <h2>Bienvenidos</h2>
      <Saludos nombre="Daniel" apellido="Trejo"/>
      <Ejercicio nombre="Julio" edad="23" pasatiempo="escuchar música" />

      <div className='row'>
        <div className='col-2'>
              <TareaAdd guardarTarea ={guardarTarea}/>
        </div>
        <div className='col-10'>
        <Tareas datos={data} eliminarClick={eliminarClick}/>
        </div>

      </div>

    </div>
  );
}

export default App;
