import React, { useRef } from "react";

const SearchForm = ({ onSubmit }) => {
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
      className='SearchForm'
    >
      <div className="input-group">
        <input
          name="keyword"  
          type="text" 
          placeholder="Search for a gif" 
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default React.memo(SearchForm);