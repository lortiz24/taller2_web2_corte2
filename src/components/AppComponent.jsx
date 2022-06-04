import { useState } from 'react'
import useGetDataBase from '../hooks/useGetDataBase'
import BuscarGuardar from './BuscarGuardar'
import ContenedorDataBase from './ContenedorDataBase'
import InputName from './InputName'

const AppComponent = () => {
    
    const [valoresBusquedas, setvaloresBusquedas] = useState([])
    const [controllerGetDB, setControllerGetDB] = useState(false);
    const { arrayData, cargando } = useGetDataBase(controllerGetDB, setControllerGetDB)
    return (
        <>
            <div className="container" >
                <h1 className='text-center mt-3'>Busqueda de animes</h1>

                <InputName setvaloresBusquedas={setvaloresBusquedas} arrayData={arrayData} valoresBusquedas={valoresBusquedas}/>
                {cargando && <p>Cargando datos de DataBase</p>}
                
                <div className='row'>
                {
                    valoresBusquedas?.map((valorBusqueda) => (
                        <BuscarGuardar key={valorBusqueda} valorBusqueda={valorBusqueda} setControllerGetDB={setControllerGetDB} setvaloresBusquedas={setvaloresBusquedas}/>
                    ))
                }        
                {
                    arrayData?.map((item) => (
                        <div key={item.valorBusqueda} className='mt-3'>
                            <ContenedorDataBase key={item.valorBusqueda} {...item} setControllerGetDB={setControllerGetDB} />
                        </div>
                    ))
                }

            </div>
            </div>
            

        </>
    )
}

export default AppComponent