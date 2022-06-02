import {useEffect,useState} from 'react'
import getAnimes from '../helpers/getAnimes';

const UseGetAnimes = (valorBusqueda) => {
  
    const [estado, setEstado] = useState({
        animes: [],
        cargando: true,
    });

    

    useEffect(() => {
        getAnimes(valorBusqueda)
            .then((animes) =>{
                return{
                    animes:animes,
                    cargando:false
                }
            })
    }, [])
    
    return estado;

}

export default UseGetAnimes