import './Gif.scss'

const Gif = ({id, title, url}) => {
  return (
    <a href={`#${id}`}
    className="Gif">
      {/* <h4>
        <span>
          { title }
        </span>
      </h4> */}
      <img src={ url } alt="gif" />
    </a>
  )
}

export default Gif