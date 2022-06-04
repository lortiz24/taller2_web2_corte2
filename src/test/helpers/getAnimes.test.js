
import getAnimes from '../../helpers/getAnimes'

describe('Pruebas en el helper getGifs', () => {

    test('debe traer 5 elementos por defecto', async() => {
       const gifs=await getAnimes('pokemon');
       expect(gifs.length).toBe(5);
    });

})