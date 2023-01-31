import React, { useState } from 'react'

export default function TareaAdd({guardarTarea}){
        const [titulo, setTitulo] = useState("");
        const [descripcion, setResponsable] = useState("");
        const [responsable, setDescripcion] = useState("");
        const [prioridad, setPrioridad] = useState("");

        const guardarHandler = (event) => {
            event.preventDefault();
            const tareaNueva ={
                "titulo": titulo,
                "responsable": responsable,
                "descripcion": descripcion,
                "prioridad": prioridad
            }
            //console.log("nueva tarea: ", tareaNueva);
            guardarTarea(tareaNueva);
        }
        const nuevoTitulo =(event) =>{
            serTitulo(event.target.value);
        }
        const nuevoResponsable = (event) =>{
            setResponsable(event.target.value);
        }
        const nuevaDescripcion = (event) =>{
            setDescripcion(event.target.value);
        }
        const nuevaPrioridad = (event) =>{
            setPrioridad(event.target.value);
        }


    return (
        <div className="row mt-4">
            <div className="col" >
            <form>
              <div className="card mt-4">
                <div className="card-header">
                    <h1>Nueva Tarea </h1>
                </div>

                <div className="card-body">
                <div class="from-group">
                    <label for="titulo">Titulo de</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
                    </div>
                <div className="card-footer"><div/>
              </div>
            </div>
            <form/>
        </div>
      </div>
    )
}