export const getGifs = async (category) => { //peticion http para traer las imágenes que corresponden a la categoría
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=g1uWPWbmIHlnfgWBMNhoVGudBNa4GOzU`;
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map( img => { //gifs barrerá cada una de las imagenes de data
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, //signo de interrogación para preguntar si vienen las imagenes que la use
        }
    })

    return gifs;
}