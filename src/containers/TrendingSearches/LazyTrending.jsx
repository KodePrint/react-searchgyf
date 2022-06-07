import React, { Suspense } from 'react'
// Import custom hooks
import { useNearScreen } from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export const LazyTrending = () => {
  
  const {isNearScreen, fromRef} = useNearScreen({ distance: '0px' })

  return <div ref={fromRef} id="LazyTrending">
    <Suspense fallback={'Loading..!'}>
      {isNearScreen ? <TrendingSearches /> : null }
    </Suspense>
  </div>

}