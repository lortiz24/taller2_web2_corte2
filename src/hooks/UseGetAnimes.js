import { useEffect, useState } from 'react'
import createDocsDatabase from '../helpers/createDoscDatabase';
import getAnimes from '../helpers/getAnimes';
import getDatabase from '../helpers/getDatabase';


const UseGetAnimes = (valorBusqueda, arrayData, setControllerBusqueda) => {
    const aux = arrayData.filter(item => item.valorBusqueda === valorBusqueda)

    const [estado, setEstado] = useState({
        animes: [],
        cargandoAnime: true,
    });
    console.log('Entrando')


    useEffect(() => {
        getAnimes(valorBusqueda)
            .then((animes) => {
                createDocsDatabase({ valorBusqueda, animes })
                setEstado({ animes, cargandoAnime: false })
                setControllerBusqueda(true)

            })

    }, [valorBusqueda])
    return estado;

}

export default UseGetAnimes