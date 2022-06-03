import { useState, useEffect } from 'react'

import ContenedorResultados from './ContenedorResultados'
import InputName from './InputName'

const AppComponent = () => {
    const [valoresBusquedas, setvaloresBusquedas] = useState([])
    
    return (
        <>
            <div className="container" >
                <h1 className='text-center mt-3'>Busqueda de animes</h1>

                <InputName setvaloresBusquedas={setvaloresBusquedas} />
                
                <ContenedorResultados valoresBusquedas={valoresBusquedas} />
            </div>
            

        </>
    )
}

export default AppComponent