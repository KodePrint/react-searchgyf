import { useRef, useState, useEffect } from 'react'

export const useNearScreen = ({distance = '100px'} = {}) => {
  // Create a state for the component
  const [isNearScreen, setShow] = useState(false)
  // Create a ref for the component
  const fromRef = useRef()

  useEffect(() => {

    let observer

    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    // Utilizando el polifyl de intersection-observer
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import ('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })

      observer.observe(fromRef.current)
    })



    return () => observer && observer.disconnect()
  })

  return {isNearScreen, fromRef}

}