import React, { useState, useEffect } from "react";
import AnimeItem from "./AnimeItem";
import UseGetAnimes from "../hooks/UseGetAnimes";
import useCreateDocs from "../hooks/useCreateDocs";
import createDocsDatabase from "../helpers/createDoscDatabase";
import useGetDataBase from "../hooks/useGetDataBase";
const ContenedorAnimes = ({ valorBusqueda }) => {
  const { animes, cargandoAnime } = UseGetAnimes(valorBusqueda);


  return (
    <>
      <h3>Busqueda: {valorBusqueda}</h3>
      {cargandoAnime ? (
        <p>Cargando</p>
      ) : (
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
      )}
    </>
  );
};

export default ContenedorAnimes;
