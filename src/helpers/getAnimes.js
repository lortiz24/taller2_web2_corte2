const getAnimes = async (valorBusqueda, limit = 5) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${valorBusqueda}&limit=${limit}`)
    const { data } = await response.json();
    const animes = data.map(({ title, synopsis, images: { webp: { image_url } }, episodes, url }) => {
        return {
            title, 
            synopsis, 
            image_url, 
            episodes, 
            url
        }
    });
    console.log(data)
    return animes;
}

export default getAnimes