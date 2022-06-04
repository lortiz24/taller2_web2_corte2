import React, { useState, useEffect } from "react";
import AnimeItem from "./AnimeItem";
import UseGetAnimes from "../hooks/UseGetAnimes";

const BuscarGuardar = ({ valorBusqueda,setControllerBusqueda,arrayData }) => {
  UseGetAnimes(valorBusqueda,arrayData,setControllerBusqueda);
  return (
    <></>
  )
};

export default BuscarGuardar;
