import { useRef, useState, useEffect } from 'react'

export const useNearScreen = ({distance = '100px', externalRef, once = true } = {}) => {
  // Create a state for the component
  const [isNearScreen, setShow] = useState(false)
  // Create a ref for the component
  const fromRef = useRef()

  useEffect(() => {

    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
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

      element && observer.observe(element)
    })



    return () => observer && observer.disconnect()
  })

  return {isNearScreen, fromRef}

}