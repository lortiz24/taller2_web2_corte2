import React, { useState, useEffect } from 'react'
import AnimeItem from './AnimeItem'
import UseGetAnimes from '../hooks/UseGetAnimes'
import useCreateDocs from '../hooks/useCreateDocs'
import createDocsDatabase from '../helpers/createDoscDatabase'
const ContenedorAnimes = ({ valorBusqueda}) => {
  const { animes, cargandoAnime } = UseGetAnimes(valorBusqueda)
 
  /* useEffect(() => {
    animes.length!==0 && createDocsDatabase({valorBusqueda,animes})
    
  }, [animes]) */
  
  console.log({valorBusqueda,animes});

  console.log(valorBusqueda, cargandoAnime, animes)
  return (
    <>
      <h3>Busqueda: {valorBusqueda}</h3>
      {cargandoAnime && <p>Cargando</p>}
      <div className="grid mt-5">

        {animes?.map(anime => (
          <>
          <article><AnimeItem key={anime.mal_id} {...anime} /></article>
          
          </>
          
        ))}

      </div>

    </>




  )
}

export default ContenedorAnimes