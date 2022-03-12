

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=S86mQJNJWWxV1MMTLlba1c3l93XSxKNN`
    const resp = await fetch( url )
    const {data} = await resp.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //"?" si trae imagenes las muestra
        }
    })

   return gifs //gifs is async so returns a promise
}