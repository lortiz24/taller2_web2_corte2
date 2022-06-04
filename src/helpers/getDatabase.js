
import { db } from "../firebase";
import { collection, getDocs} from 'firebase/firestore/lite';
const getDatabase = async (coleccion='busquedas') => {
    
    const busquedas = collection(db,coleccion);
    const data = await getDocs(busquedas);
     const arrayData = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
    })); 
    console.log('consultando firebase',arrayData)
    return arrayData
}

export default getDatabase