const Gif = ({id, title, url}) => {
  return (
    <div key={id} className="">
      <p>{id}</p>
      <h3>{title}</h3>
      <img src={url} alt="gif" />
    </div>
  )
}

export default Gif