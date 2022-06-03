import { useEffect, useState } from 'react'
import getAnimes from '../helpers/getAnimes';

const UseGetAnimes = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        animes: [],
        cargandoAnime: true,
    });



    useEffect(() => {
        getAnimes(valorBusqueda)
            .then((animes) => {
                setEstado({
                    animes: animes,
                    cargandoAnime: false
                })
            })
    }, [])

    return estado;

}

export default UseGetAnimes