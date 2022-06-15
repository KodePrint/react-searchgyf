// Import React Icons
import { RiSearch2Line } from 'react-icons/ri';
// Import Custom Hooks
import { useTheme } from 'hooks/useTheme';
// Import Styles
import Styles from './styles.module.scss';


import React, { useRef } from "react";

const SearchForm = ({ onSubmit }) => {
  const { theme } = useTheme();

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formRef.current)
    const keyword = data.get('keyword')
    onSubmit({ keyword })
  }

  return (
    <form
      ref={formRef} 
      onSubmit={handleSubmit} 
      className={
        `${theme === 'light' 
          ? (Styles.searchForm +' '+ Styles.light) 
          : (Styles.searchForm +' '+ Styles.dark) }`
        }
    >
      <div className="input-group">
        <input
          name="keyword"  
          type="text" 
          placeholder="Search for a gif" 
        />
        <button type="submit">
          <span>
            <RiSearch2Line />
          </span>
          Search
        </button>
      </div>
    </form>
  );
}

export default React.memo(SearchForm);