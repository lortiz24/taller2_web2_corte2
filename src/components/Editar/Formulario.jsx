import React from 'react'

const Formulario = ({valorBusqueda}) => {
  return (
   <>
    <form action="">
        <input type="text" placeholder='Texto de la busqueda' defaultValue={valorBusqueda}/>
    </form>
   </>
  )
}

export default Formulario