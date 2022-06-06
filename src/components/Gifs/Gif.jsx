import { Link } from 'wouter'
import './Gif.scss'

const Gif = ({id, title, url}) => {
  return (
    <a href={`/gif/${id}`}
    className="Gif">
      {/* <h4>
        <span>
          { title }
        </span>
      </h4> */}
      <img loading='lazy' src={ url } alt="gif" />
    </a>
  )
}

export default Gif