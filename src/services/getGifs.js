const apiKey = 'YnvNKbJEoanVvFeGIdulWJjWyZg5NdYu'

export const getGifs = async ({ keyword = 'rocket racoon' }= {}) => {
  
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  
  return await fetch(apiURL)
  .then(res => res.json())
  .then(({data = []}) => {
    if (Array.isArray(data)) {
      const gifs = data.map(image => {
        const { id, title, images } = image
        const { url } = images.downsized_medium
        return { id, title, url }
      })
      return gifs
    }
  } )
}