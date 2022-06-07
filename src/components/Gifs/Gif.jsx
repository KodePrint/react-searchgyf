import { Link } from 'wouter'
import './Gif.scss'

const Gif = ({id, title, url}) => {

  return (
    <div className="Gif">
      <Link to={`/gif/${id}`}>
        {/* <h4>
          <span>
            { title }
          </span>
        </h4> */}
        <img loading='lazy' src={ url } alt="gif" />
      </Link>
    </div>

  )
}

export default Gif