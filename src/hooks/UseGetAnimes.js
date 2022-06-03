import { useEffect, useState } from 'react'
import createDocsDatabase from '../helpers/createDoscDatabase';
import getAnimes from '../helpers/getAnimes';
import getDatabase from '../helpers/getDatabase';


const UseGetAnimes = (valorBusqueda) => {
    
    const [estado, setEstado] = useState({
        animes: [],
        cargandoAnime: true,
    });
    console.log(`use a ${valorBusqueda} su estado esta ${estado.animes.toString()}`)


    useEffect(() => {
        getAnimes(valorBusqueda)
                .then((animes) => {
                    console.log('Creando el documento en base de datos')
                    createDocsDatabase({valorBusqueda,animes})
                    setEstado({animes,cargandoAnime:false})
                })
    }, [valorBusqueda])
    return estado;

}

export default UseGetAnimes