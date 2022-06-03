import { useEffect, useState } from 'react'
import createDocsDatabase from '../helpers/createDoscDatabase'

const useCreateDocs = (search = {}) => {
    const [guardado, setGuardado] = useState({
        id: '',
        guardando: true
    })
    useEffect(() => {
        if (search.animes.length > 0) {
            console.log(search.animes.length)
            createDocsDatabase(search)
                .then((id) => setGuardado({ id, guardando: false }))
                .catch(err => console.log(err))
        }
        
    }, [search.animes])
    return guardado
}

export default useCreateDocs