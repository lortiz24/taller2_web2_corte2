import React, { useState, useEffect } from "react";
import AnimeItem from "./AnimeItem";
import UseGetAnimes from "../hooks/UseGetAnimes";
import createDocsDatabase from "../helpers/createDoscDatabase";

const BuscarGuardar = ({ valorBusqueda, setControllerGetDB,setvaloresBusquedas }) => {
  const { animes, cargandoAnime } = UseGetAnimes(valorBusqueda);
  const [guardado, setguardado] = useState(false)
  const hanledSaved = () => {
    createDocsDatabase({ valorBusqueda, animes })
      .then((result) => {
        console.log('Seteando ')
        setControllerGetDB(true)
        setguardado(true)
      }).catch((err) => {
        console.log(err)
      });
  }
  const hanledDeletePrevious=()=> {
    setvaloresBusquedas(lista=>lista.filter(item=>item!==valorBusqueda))
  }
  return (
    <>
      <div className='mt-3'>
        <h3 >Busqueda: {valorBusqueda}</h3>
        <div className="p-2 shadow p-3 mb-5 bg-white rounded">
          <div className="card-group d-flex flex-wrap align-content-center animate__animated animate__fadeIn" >
            {animes?.map((anime) => (
              <AnimeItem key={anime.mal_id} {...anime} />
            ))}

          </div>
          {guardado ? <></> : (<button type="button" className="btn btn-success col-3 m-2 " onClick={() => hanledSaved()}>Guardar en base de datos </button>)}
          <button type="button" className="btn btn-danger col-3 m-2 " onClick={() => hanledDeletePrevious()}>Eliminar del historial </button>

        </div>


      </div>
    </>
  )
};

export default BuscarGuardar;
