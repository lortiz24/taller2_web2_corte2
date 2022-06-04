import { useState } from 'react'

import ContenedorResultados from './ContenedorResultados'
import InputName from './InputName'

const AppComponent = () => {
    const [valorBusqueda, setValorBusqueda] = useState('')
    
    return (
        <>
            <div className="container" >
                <h1 className='text-center mt-3'>Busqueda de animes</h1>

                <InputName setValorBusqueda={setValorBusqueda} />
                <ContenedorResultados valorBusqueda={valorBusqueda} />
            </div>
            

        </>
    )
}

export default AppComponent