import { useEffect, useState } from 'react'
import UseGetAnimes from '../hooks/UseGetAnimes'
import useGetDataBase from '../hooks/useGetDataBase'
import ContenedorAnimes from './ContenedorAnimes'

const ContenedorResultados = ({ valoresBusquedas }) => {
    //const {arrayData,cargando}=useGetDataBase()


    return (

        <div className=" mt-5">
            <hr />
            <ol>
                {
                    valoresBusquedas.map((valorBusqueda, index) => (
                        <ContenedorAnimes key={`${valorBusqueda}${index}`} valorBusqueda={valorBusqueda} />
                    ))
                }

            </ol>
        </div>

    )
}

export default ContenedorResultados