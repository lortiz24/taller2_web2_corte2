
import { db } from "../firebase";
import { collection, getDocs,doc,updateDoc} from 'firebase/firestore/lite';
const updateDatabase = async (id,update,coleccion='busquedas') => {
   
    await updateDoc(doc(db, coleccion, id),update)
}

export default updateDatabase