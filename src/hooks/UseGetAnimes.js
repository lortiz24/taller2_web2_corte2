import { useEffect, useState } from 'react'
import createDocsDatabase from '../helpers/createDoscDatabase';
import getAnimes from '../helpers/getAnimes';
import getDatabase from '../helpers/getDatabase';


const UseGetAnimes = (valorBusqueda, arrayData,setControllerGetDB) => {
    const aux = arrayData.filter(item => item.valorBusqueda === valorBusqueda)

    const [estado, setEstado] = useState({
        animes: [],
        cargandoAnime: true,
    });
    console.log('Entrando a consultar api')


    useEffect(() => {
        getAnimes(valorBusqueda)
            .then((animes) => {
                if (aux.length === 0) {
                    createDocsDatabase({ valorBusqueda, animes })
                    setEstado({ animes, cargandoAnime: false })

                    console.log('Mandando a setear bd')
                    setControllerGetDB(true)
                    //alert('Guardado con exito')
                }

            })

    }, [valorBusqueda])
    return estado;

}

export default UseGetAnimes