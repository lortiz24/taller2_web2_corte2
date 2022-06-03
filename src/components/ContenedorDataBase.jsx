import AnimeItem from "./AnimeItem";
const ContenedorDataBase = ({ valorBusqueda, animes }) => {

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }
    return (
        <div className='mt-3'>
            <h3 >Busqueda: {valorBusqueda}</h3>
            <div className="grid mt-3">
                {animes?.map((anime) => (
                    <div className="card-group" style={{ "width": "15rem" }}>
                        <AnimeItem key={anime.mal_id} {...anime} />
                    </div>
                ))}
            </div>

            <div className="row mt-2">
                <button type="button" className="btn btn-warning col-3 m-2" onClick={() => handleEdit()}>Editar</button>
                <button type="button" className="btn btn-danger col-3 m-2" onClick={() => handleDelete()}>Borrar del historial</button>
            </div>
        </div>
    )
}

export default ContenedorDataBase