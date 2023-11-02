import React from 'react';
import styles from './styles/SearchBar.module.css';

// the component gets props from App parent component
function SearchBar({searchInput, onChangeInput, onClickSearch}){

    return(
    <div className={styles.searchDiv}>
       <form onSubmit={onClickSearch} >
          <input
         className={styles.searchInput}
         type = "text"
         name="searchInput"
         id="searchInput"
         required
         placeholder="artist name"
         value={searchInput}
         onChange={onChangeInput}
          />
          <input 
           type='submit'
           value= "Search"
           className={styles.searchButton}
          />
       </form>
    </div>    
     
    );
}

export default SearchBar;

/*
<div className={styles.searchDiv}>
       <form  >
          <input
         className={styles.searchInput}
         type = "text"
         name="searchInput"
         id="searchInput"
         required
         value={searchInput}
         onChange={onChangeInput}
          />
          <button className={styles.searchButton} onClick={onClickSearch}>SEARCH</button>
       </form>
    </div>    
*/
