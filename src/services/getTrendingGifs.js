import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { id, title, images } = image
      const { url } = images.downsized_medium
      return { id, title, url } 
    })
    return gifs
  }
  return []
}

export const getTrendingGifs = async ({limit = 25 }= {}) => {
  
  const apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g&lang=en`
  
  return await fetch(apiURL)
  .then(res => res.json())
  .then(fromApiResponseToGifs)
}