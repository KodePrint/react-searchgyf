import { useState, useEffect } from 'react'
// Import components
import Category from '../Category/Category'
// Import services
import { getTrendingTerms } from '../../services/getTrendingTermsService'
// Import styles
import './TrendingSearches.scss'

const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms()
      .then(setTrends)
  }, [])

  console.log(trends)
  return (
    <Category name='Trending' options={trends} />
  )
}

export default TrendingSearches