import React from 'react'
//El componente Saludos, recibe como parámetro el nombre de la persona. El
//saludo debe nombrar a esa persona.
//Pase también el apellido de la persona

export default function Saludos(props) {
  return (
    <div>Hola {props.nombre} {props.apellido}, bienvenido a la PUCESE</div>
  )
}
