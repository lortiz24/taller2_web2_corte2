import { db } from "../firebase";
import { collection,addDoc} from 'firebase/firestore/lite';

const createDocsDatabase = async (search={},coleccion='busquedas') => {
    const busquedasDB = collection(db, coleccion);
    const resul = await addDoc(busquedasDB,search);
  
    return resul.id
}

export default createDocsDatabase