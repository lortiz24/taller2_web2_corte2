import { useState, useEffect } from 'react'
import getDatabase from '../helpers/getDatabase'

const useGetDataBase = (controllesDataBase,setcontrollesDataBase) => {
    
    const [datosDB, setDatosDB] = useState({
        arrayData: [],
        cargando: true,     
    })
    useEffect(() => {
        getDatabase()
            .then((arrayData) => {
                setDatosDB({
                    arrayData,
                    cargando: false
                    
                })
            }).catch((err) => {
                console.log(err)
            });

            setcontrollesDataBase(false)
    }, [controllesDataBase])


    return datosDB;
}

export default useGetDataBase