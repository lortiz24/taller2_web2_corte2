import AnimeItem from "./AnimeItem";
const ContenedorDataBase = ({ valorBusqueda, animes }) => {
    return (
        <>
        
        <h3>Busqueda: {valorBusqueda}</h3>
       
            <div className="row">
                <div className="grid mt-5">
                    {animes?.map((anime) => (
                        <div key={anime.mal_id}>
                            <AnimeItem key={anime.mal_id} {...anime} />
                        </div>
                    ))}
                </div>
                <div className="grid mt-2 row">
                    <button type="button" className="btn btn-primary">Guardar</button>
                    <button type="button" className="btn btn-danger">Borrar del historial</button>
                </div>
            </div>
        </>
    )
}

export default ContenedorDataBase