import { useEffect, useState } from 'react'
import createDocsDatabase from '../helpers/createDoscDatabase';
import getAnimes from '../helpers/getAnimes';
import getDatabase from '../helpers/getDatabase';


const UseGetAnimes = (valorBusqueda, arrayData,setControllerGetDB) => {
    

    const [estado, setEstado] = useState({
        animes: [],
        cargandoAnime: true,
    });
    console.log('Entrando a consultar api')


    useEffect(() => {
        if(valorBusqueda){
            getAnimes(valorBusqueda)
            .then((animes) => {

                    createDocsDatabase({ valorBusqueda, animes })
                    setEstado({ animes, cargandoAnime: false })
                    console.log('Mandando a setear bd')
                    setControllerGetDB(true)
            })
        }

    }, [valorBusqueda])
    return estado;

}

export default UseGetAnimes