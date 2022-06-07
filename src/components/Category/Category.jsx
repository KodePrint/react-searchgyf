import { Link } from 'wouter';
const Category = ({ name, options=[] }) => {
  return (
    <section className="Category">
      <h4>{name}</h4>
      <ul className='list'>
        {options.map(option => (
            <li className='element' key={option}>
              <Link to={`/search/${option}`}>
                {option}
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default Category;