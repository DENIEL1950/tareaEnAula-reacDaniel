//Diseñe el componente que muestre su nombre, edad y pasatiempo
//A continuación, muestrelo 2 veces en su app
//Modifique el componente para que los datos sean parametrizados
import React from 'react'

function Ejercicio(props) {
  return (
    <div>
        <p>Mi nombre es {props.nombre}</p>
        <p>Tengo {props.edad} años</p>
        <p>Mi pasatiempo favorito es <strong>{props.pasatiempo}</strong></p>
    </div>
  )
}

export default Ejercicio