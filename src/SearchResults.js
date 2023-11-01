import React from 'react';
import styles from './styles/SearchResults.module.css'


// the component gets props from App parent component
function SearchResults({songs, onClickHandle}){
    return(
        <div className={styles.searchResDiv}>
            <h2 className={styles.h2}>Results</h2>
            <ol>
              {songs.map((song)=>(
                  <li key={song.id} className={styles.liSong}> 
                    <p>{song.artist}, {song.title}, {song.album}</p>
                    <audio controls src={song.preview} ></audio>
                    <button onClick={() => onClickHandle(song.id)}>+</button>
                  </li>
              ))}     
            </ol>
        </div>
    );
}   

export default SearchResults;   

