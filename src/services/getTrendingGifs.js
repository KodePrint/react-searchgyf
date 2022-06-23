import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { id, title, images, user, embed_url } = image
      const {height, width, url } = images.downsized_medium
      return { id, title, embed_url, height, width, url, user } 
    })
    return gifs
  }
  return []
}

export const getTrendingGifs = async ({limit = 15 }= {}) => {
  
  const apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g&lang=en`
  
  return await fetch(apiURL)
  .then(res => res.json())
  .then(fromApiResponseToGifs)
}