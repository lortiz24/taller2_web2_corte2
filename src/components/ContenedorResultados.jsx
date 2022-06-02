import React from 'react'
import ContenedorAnimes from './ContenedorAnimes'

const ContenedorResultados = () => {
    return (
        <div>
            <div className="grid mt-5">
                <article className='ContenedorAnimes'>
                    <ContenedorAnimes />
                </article>
                <article className='ContenedorAnimes'>
                    <ContenedorAnimes />
                </article>


            </div>
        </div>
    )
}

export default ContenedorResultados