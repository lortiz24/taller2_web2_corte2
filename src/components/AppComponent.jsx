import { useState } from 'react'
import ContenedorResultados from './ContenedorResultados'
import InputName from './InputName'

const AppComponent = () => {
    const [valoresBusquedas, setvaloresBusquedas] = useState([])
    
    return (
        <>
            <div className="container ">
                <h1 className='text-center mt-3'>Busqueda de animes</h1>
                <hr />
                <div >
                    <InputName setvaloresBusquedas={setvaloresBusquedas} />
                    <ContenedorResultados/>
                </div>
            </div>

        </>
    )
}

export default AppComponent