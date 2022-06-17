import { useState, useRef, useEffect } from 'react';
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';
import { Link } from 'wouter';
// Import components
import PointsLoading from 'components/Loading/PointsLoading';
// Import Custom Hooks
import { useTheme } from 'hooks/useTheme';
// Import Styles
import Styles from './styles.module.scss';

const Category = ({ name, options=[], loading }) => {

  const { theme } = useTheme(null);
  const refList = useRef();

  const slideLeft = () => {
    refList.current.scrollLeft = refList.current.scrollLeft - 200;
  }
  const slideRight = () => {
    refList.current.scrollLeft = refList.current.scrollLeft + 200;
  }

  console.log(loading);

  return (
    <section className={
      `${theme === 'light' 
        ? (Styles.base +' '+ Styles.light) 
        : (Styles.base +' '+ Styles.dark) }`
      }
    >
      <button
        className=''
        onClick={slideLeft} 
      >
        <RiArrowLeftSFill />
      </button>
      {
        loading 
          ? <PointsLoading />
          : (
            <ul ref={refList} className='list'>
              {options.map(option => (
                  <li className='element' key={option}>
                    <Link to={`/search/${option}`}>
                      {option}
                    </Link>
                  </li>
                )
              )}
            </ul>
          )
      }
      <button
        onClick={slideRight} 
      >
        <RiArrowRightSFill />
      </button>
    </section>
  );
}

export default Category;