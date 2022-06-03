import {useState} from 'react'
import createDocsDatabase from '../helpers/createDoscDatabase'

const useCreateDocs = (search={}) => {
    const [guardado, setGuardado] = useState({
        id: '',
        guardando:true
    })
    createDocsDatabase(search)
        .then((id) => setGuardado({id,guardando:false}))
        .catch(err => console.log(err))
        return guardado
}

export default useCreateDocs