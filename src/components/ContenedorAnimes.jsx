import React, { useState, useEffect } from "react";
import AnimeItem from "./AnimeItem";
import UseGetAnimes from "../hooks/UseGetAnimes";

const ContenedorAnimes = ({ valorBusqueda }) => {
  const { animes, cargandoAnime } = UseGetAnimes(valorBusqueda);


  return (
    <div className='mt-3'>
      <h3>Busqueda: {valorBusqueda}</h3>
      {cargandoAnime ? (
        <p>Cargando</p>
      ) : (
        <div className="row">
          <div className="grid mt-3">
            {animes?.map((anime) => (
              <div key={anime.mal_id}>
                <AnimeItem key={anime.mal_id} {...anime} />
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  )
};

export default ContenedorAnimes;
