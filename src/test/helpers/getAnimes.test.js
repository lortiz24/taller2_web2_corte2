import getAnimes from '../../helpers/getAnimes'

describe('Pruebas en el helper getAnimes', () => {

    test('debe traer 5 elementos por defecto', async() => {
       const animes=await getAnimes('naruto');
       expect(animes.length).toBe(5);
    });
    test('debe traer 10 elementos como parametro', async() => {
       const animes=await getAnimes('naruto',10);
       expect(animes.length).toBe(10);
    });
    



})