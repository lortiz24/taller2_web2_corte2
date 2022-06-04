import React, { useState, useEffect } from "react";
import AnimeItem from "./AnimeItem";
import UseGetAnimes from "../hooks/UseGetAnimes";

const BuscarGuardar = ({ valorBusqueda,setControllerGetDB }) => {
  UseGetAnimes(valorBusqueda,setControllerGetDB);
  return (
    <></>
  )
};

export default BuscarGuardar;
