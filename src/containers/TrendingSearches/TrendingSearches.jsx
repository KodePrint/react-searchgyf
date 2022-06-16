import { useState, useEffect } from 'react'
// Import components
import Category from 'components/Category/Category'
// Import services
import { getTrendingTerms } from 'services/getTrendingTermsService'
// Import styles

const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms()
      .then(setTrends)
  }, [])

  return (
    <Category name='Trending' options={trends} />
  )
}

export default TrendingSearches