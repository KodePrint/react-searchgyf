import {API_KEY, API_URL} from './settings'

const fromApiResponseToTrending = apiResponse => {
  const {data = []} = apiResponse
  return data
}

export const getTrendingTerms = async () => {
  
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
  
  return await fetch(apiURL)
  .then(res => res.json())
  .then(fromApiResponseToTrending)
}