import { useEffect, useState } from 'react'
import createDocsDatabase from '../helpers/createDoscDatabase';
import getAnimes from '../helpers/getAnimes';

const UseGetAnimes = (valorBusqueda, setControllerGetDB) => {
    const [estado, setEstado] = useState({
        animes: [],
        cargandoAnime: true,
    });


    useEffect(() => {
        getAnimes(valorBusqueda)
            .then((animes) => {
                console.log(`Entrando a buscar =========con ${valorBusqueda}`)
                createDocsDatabase({ valorBusqueda, animes })
                    .then((result) => {
                        console.log('Seteando ')
                        setControllerGetDB(true)
                    }).catch((err) => {
                        console.log(err)
                    });
                
                setEstado({ animes, cargandoAnime: false })         
            })

    }, [valorBusqueda])
    return estado;

}

export default UseGetAnimes