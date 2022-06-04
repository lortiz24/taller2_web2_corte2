import { useEffect, useState } from 'react'
import createDocsDatabase from '../helpers/createDoscDatabase';
import getAnimes from '../helpers/getAnimes';

const UseGetAnimes = (valorBusqueda) => {
    
    const [estado, setEstado] = useState({
        animes: [],
        cargandoAnime: true,
    });


    useEffect(() => {
        getAnimes(valorBusqueda)
            .then((animes) => {     
                setEstado({ animes, cargandoAnime: false })         
            })

    }, [valorBusqueda])
    return estado;

}

export default UseGetAnimes