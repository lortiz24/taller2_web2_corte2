const getAnimes = async (valorBusqueda, limit = 5) => {
    //console.log(`Entra a consultar la api con ${valorBusqueda}`)
   
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${valorBusqueda}&limit=${limit}`)
    
    const { data } = await response.json();
    const animes = data.map(({ title, images: { webp: { image_url } }, episodes, url ,mal_id}) => {
        return {
            title, 
            image_url, 
            episodes, 
            url,
            mal_id
        }
    });
    return animes;
}

export default getAnimes