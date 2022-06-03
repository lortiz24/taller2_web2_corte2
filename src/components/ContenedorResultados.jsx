import { useEffect, useState } from 'react'
import UseGetAnimes from '../hooks/UseGetAnimes'
import useGetDataBase from '../hooks/useGetDataBase'
import ContenedorAnimes from './ContenedorAnimes'

const ContenedorResultados = ({ valoresBusquedas }) => {

    return (
        <>
            <div className='row'>
                <ul>
                    {
                        valoresBusquedas?.map((valorBusqueda) => (

                            <li key={valorBusqueda}>
                                <ContenedorAnimes key={valorBusqueda} valorBusqueda={valorBusqueda} />
                            </li>

                        ))
                    }

                </ul>

            </div>

        </>
    )
}

export default ContenedorResultados