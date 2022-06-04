import AnimeItem from "./AnimeItem";
import { useState } from "react"
import deleteDatabase from "../helpers/deleteDatabase";
import EditModal from './Editar/EditModal.jsx'
const ContenedorDataBase = ({ valorBusqueda, animes, id, setControllerGetDB }) => {
    const [modalEstao, setModalEstao] = useState(false)
    const handleEdit = () => {
        setModalEstao(true)
    }

    const handleDelete = () => {
        //console.log('Eliminando ',id);
        deleteDatabase(id);
        setControllerGetDB(true)
    }

    return (
        <div className='mt-3'>
            <h3 >Busqueda: {valorBusqueda}</h3>
            <div className="p-2 shadow p-3 mb-5 bg-white rounded">
                <div className="card-group d-flex flex-wrap align-content-center" >

                    {animes?.map((anime) => (
                        <AnimeItem key={anime.mal_id} {...anime} />


                    ))}

                </div>
                <button type="button" className="btn btn-warning col-3 m-2 " onClick={() => handleEdit()}>Editar nombre de la busqueda</button>
                <button type="button" className="btn btn-danger col-3 m-2" onClick={() => handleDelete()}>Borrar busqueda del historial</button>
            </div>

            {modalEstao && (<EditModal setModalEstao={setModalEstao} id={id} animes={animes} valorBusqueda={valorBusqueda} setControllerGetDB={setControllerGetDB} />)}
        </div>
    )
}

export default ContenedorDataBase