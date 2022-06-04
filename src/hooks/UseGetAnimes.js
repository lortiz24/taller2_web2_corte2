import { useEffect, useState } from 'react'
import createDocsDatabase from '../helpers/createDoscDatabase';
import getAnimes from '../helpers/getAnimes';
import getDatabase from '../helpers/getDatabase';


const UseGetAnimes = (valorBusqueda,setControllerGetDB) => {
    
    const [estado, setEstado] = useState({
        animes: [],
        cargandoAnime: true,
    });
    console.log(`use a ${valorBusqueda} su estado esta ${estado.animes.toString()}`)


    useEffect(() => {
        getAnimes(valorBusqueda)
                .then((animes) => {
                    createDocsDatabase({valorBusqueda,animes})
                    setEstado({animes,cargandoAnime:false})
                    setControllerGetDB(true)
                })
                
    }, [valorBusqueda])
    return estado;

}

export default UseGetAnimes