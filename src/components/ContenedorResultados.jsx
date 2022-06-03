import { useEffect, useState } from 'react'
import UseGetAnimes from '../hooks/UseGetAnimes'
import useGetDataBase from '../hooks/useGetDataBase'
import ContenedorDataBase from './ContenedorDataBase'
import ContenedorAnimes from './ContenedorAnimes'

const ContenedorResultados = ({ valoresBusquedas }) => {
    const { arrayData, cargando } = useGetDataBase()
    return (
        <>
            <div className='row'>
                {
                    valoresBusquedas?.map((valorBusqueda) => (
                        <ContenedorAnimes key={valorBusqueda} valorBusqueda={valorBusqueda} />
                    ))
                }

                {cargando && <p>Cargando datos de DataBase</p>}
                {
                    arrayData?.map((item) => (
                        <div key={item.valorBusqueda} className='mt-3 border-top'>
                            <ContenedorDataBase key={item.valorBusqueda} {...item} />
                        </div>
                    ))
                }

            </div>

        </>
    )
}

export default ContenedorResultados