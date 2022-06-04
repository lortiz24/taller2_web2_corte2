import { useState } from 'react'
import Formulario from './Formulario'

const EditModal = ({ setModalEstao,animes,id,valorBusqueda}) => {
    const [estado, setestado] = useState(false)
    
    const abrirModal = () => {
        setModalEstao(true)
    }
    const cerrarModal = () => {
        console.log('object');
        setModalEstao(false)
    }

    return (
        <>
            <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editar estudiante</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => cerrarModal()}></button>
                        </div>
                        <div className="modal-body">
                            <Formulario valorBusqueda={valorBusqueda}/>
                        </div>
                        <form >

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditModal