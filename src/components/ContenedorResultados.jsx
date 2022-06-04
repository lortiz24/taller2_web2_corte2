import { useEffect, useState } from 'react'
import UseGetAnimes from '../hooks/UseGetAnimes'
import useGetDataBase from '../hooks/useGetDataBase'
import ContenedorDataBase from './ContenedorDataBase'
import BuscarGuardar from './BuscarGuardar'
import getAnimes from '../helpers/getAnimes'

const ContenedorResultados = ({ valoresBusquedas }) => {
    const [controllerGetDB, setControllerGetDB] = useState(false);
    const { arrayData, cargando } = useGetDataBase(controllerGetDB, setControllerGetDB)

    
    return (
        <>
            <div className='row'>
                {
                    valoresBusquedas?.map((valorBusqueda) => (
                        <BuscarGuardar key={valorBusqueda} valorBusqueda={valorBusqueda} setControllerGetDB={setControllerGetDB} arrayData={arrayData}/>
                    ))
                }

                {cargando && <p>Cargando datos de DataBase</p>}
                {
                    arrayData?.map((item) => (
                        <div key={item.valorBusqueda} className='mt-3'>
                            <ContenedorDataBase key={item.valorBusqueda} {...item} setControllerGetDB={setControllerGetDB} />
                        </div>
                    ))
                }

            </div>

        </>
    )
}

export default ContenedorResultados