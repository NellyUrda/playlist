import React from 'react';
import styles from './styles/Playlist.module.css'


// the component gets props from App parent component
function Playlist({songs}){
    return(
        <div className={styles.playlistDiv}>
             <h2 className={styles.h2}>Playlist</h2>
             <ol>
             {songs.map((song)=>(
                  <li key={song.id} className={styles.liSong}> 
                    <p>{song.artist}, {song.title}, {song.album}</p>
                    <audio controls src={song.preview} ></audio>
                  </li>
              ))}     
             </ol>
        </div>
    );
}

export default Playlist;
