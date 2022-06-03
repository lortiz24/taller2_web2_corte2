import { db } from "../firebase";
import { collection, getDocs,addDoc} from 'firebase/firestore/lite';

const createDocsDatabase = async (search={},coleccion='busquedas') => {
    const busquedasDB = collection(db, coleccion);
    const docRef = await addDoc(busquedasDB,search);
    return docRef.id
}

export default createDocsDatabase