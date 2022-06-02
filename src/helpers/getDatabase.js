
import { db } from "../firebase";
import {collection, getDocs } from 'firebase/firestore/lite';
const getDatabase = async() => {
    const busquedas = collection(db, 'busquedas');
    const data = await getDocs(busquedas);
    const arrayData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    
   return arrayData
}

export default getDatabase