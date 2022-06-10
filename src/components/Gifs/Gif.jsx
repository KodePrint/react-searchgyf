import { useEffect, useRef } from 'react'
import { Link } from 'wouter'
import './Gif.scss'

const COLORS = [
  '#d4aee0',
  '#8975b4',
  '#64518a',
  '#565190',
  '#44abac',
  '#2ca7d8',
  '#1482ce',
  '#05597c',
  '#b2dd57',
  '#57c443',
  '#05b853',
  '#19962e',
  '#fdc82e',
  '#fd9c2e',
  '#d5385a',
  '#911750',
  '#d9d9d9',
  '#9e9e9e',
  '#666666',
  '#2b2b2b',
]

const Gif = ({id, title, url}) => {
  
  const anchorRef = useRef()

  useEffect (() => {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    anchorRef.current.style.backgroundColor = color
  }, [])

  return (
    <div ref={anchorRef} className="Gif">
      <Link className='gifLink'  to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img loading='lazy' src={ url } alt="gif" />
      </Link>
    </div>

  )
}

export default Gif