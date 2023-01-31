//Componente que muestra las actividades (tareas) diarias de una persona
import React, {useState} from "react";
//import { datos } from "./datos";

function Tareas(props) {
  //const [listadoTareas, setListadoTareas] = useState(datos);
  //const listadoTareas = datos;
    //console.log("Nueva lista", nuevaLista);
  //console.log(listadoTareas);

  console.log("Lista de tareas");

  const eliminarHandle = (item) => {
    //console.log("dato a eliminar", item);
    props.eliminarClick(item);
  
  }


  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          {props.datos.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card mt-4">
                  <div className="card-header">
                    <h3>{item.titulo}</h3>
                  </div>
                  
                  <div className="card-body">
                    <p><strong>{item.responsable}</strong></p>
                    <p>{item.descripcion}</p>
                  </div>

                  <div className="card-footer">
                    <mark>{item.prioridad}</mark>
                    <p></p><buttom className="btn btn-primary" onClick={()=>eliminarHandle(item)}>Eliminar</buttom>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tareas;
