import React, { useState, useEffect } from "react";
import AnimeItem from "./AnimeItem";
import UseGetAnimes from "../hooks/UseGetAnimes";

const BuscarGuardar = ({ valorBusqueda, arrayData, setControllerGetDB }) => {
  
UseGetAnimes(valorBusqueda, arrayData,setControllerGetDB);
  console.log(valorBusqueda)
  return (
    <></>
  )
};

export default BuscarGuardar;
