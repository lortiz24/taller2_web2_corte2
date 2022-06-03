import { useEffect, useState } from 'react'
import getAnimes from '../helpers/getAnimes';

const UseGetAnimes = (valorBusqueda) => {
    
    const [estado, setEstado] = useState({
        animes: [],
        cargandoAnime: true,
    });
    console.log(`use a ${valorBusqueda} su estado esta ${estado.animes.toString()}`)


    useEffect(() => {
        getAnimes(valorBusqueda)
                .then((animes) => {
                    setEstado({
                        animes: animes,
                        cargandoAnime: false
                    })
                })
    }, [valorBusqueda])
    return estado;

}

export default UseGetAnimes