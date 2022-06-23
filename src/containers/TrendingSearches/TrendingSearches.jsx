import { useState, useEffect } from 'react'
// Import components
import Category from 'components/Category/Category'
// Import services
import { getTrendingTerms } from 'services/getTrendingTermsService'
// Import styles

const TrendingSearches = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [trends, setTrends] = useState([])

  useEffect(() => {
    setIsLoading(true)
    getTrendingTerms()
      .then(trendinTerms => {
        setTrends(trendinTerms)
        setIsLoading(false)
      })
  }, [])

  return (
    <Category name='Trending' options={trends} loading={isLoading} />
  )
}

export default TrendingSearches