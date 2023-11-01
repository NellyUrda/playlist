import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import styles from './App.module.css'
import React, {useState} from 'react';
import {transformInput, generateId} from './helperFunctions';


function App() {
  // controls the  state of  input field
  const [searchInput, setSearchInput] = useState("");
  // controls the  state of  songs rendered in Results 
  const [songsList, setSongsList] =useState([]); 
  // controls the  state of  songs rendered in Playlist 
  const [songsPlaylist, setSongsPlaylist] = useState([]);
  

// async function, fetch songs list bye artist from rapidapi.com
// returns array of songs 
  const getSongsbyArtist= async(artist) =>{
    // datas for API request
    const baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com/search';
    // the transformInput func converts the input artist in the form requested by
    // the Api documentation
    const transformedSearchInput = transformInput(artist);
    const requestParams =`?q=${transformedSearchInput}`;
    const url = `${baseUrl}${requestParams}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '48ae9bfa21mshf797af22061bc12p1069a4jsn184cf3cad960',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if(response.ok){
        const jsonResponse = await response.json();
        const songs = jsonResponse.data;
        return  songs; // ! Important
      }
  
    }catch (error) {
      console.error(error);
     }   
  } 
  

  // async function that consumes the promise returned by getSongsbyArtist()
  const showSongs = async()=>{
     let songs = await getSongsbyArtist(searchInput);
     // create an array of objects with only the specific attibutes
     const songsArray = []; 
     for (let song of songs){
      let songObject ={
        id :generateId() ,
        artist: song.artist.name,
        title: song.title,
        album: song.album.title,
        preview: song.preview,
       };
       songsArray.push(songObject);
     }
     // set the state of songs rendered in Results
     setSongsList(songsArray);
  }

  function handleChangeInput(e){
     e.preventDefault();
     setSearchInput(e.target.value);
  }
 
  // on click, the list of songs resulted is rendered
  function handleClickSearchButton(e){
      if(searchInput===""){
       alert(" Input the artist name!");
      }else{
        e.preventDefault();
        showSongs();
      }
      
  }
  
  // function updates the state of songPlaylist
  function addSongtoPlaylist (song){
    if(songsPlaylist.includes(song)===false){
      setSongsPlaylist((prev)=>{
        return [song, ...prev];
      })
    }
   }

  // " + " button, on click adds on Playlist the song with the same id as the the 'li'
  // associated with the button
  function handleClickAddSong(id){
    let playlist = {};
    for(let i=0; i<songsList.length; i++){
      if(songsList[i].id === id && songsPlaylist.includes(playlist)===false){
        playlist = songsList[i];
      }
    }

    addSongtoPlaylist(playlist);
  }

  return (
    <div className={styles.backgroundContainer}>
      <h1 className={styles.title}><span className={styles.span}>LISTEN2</span>your favorite<span className={styles.span}>MUSIC</span></h1>
      <div className={styles.appContainer}>
        <div className={styles.searchBar}>
           <SearchBar searchInput={searchInput} onChangeInput={handleChangeInput} onClickSearch={handleClickSearchButton} />
        </div>
        <div className={styles.resultContainer}>
           <SearchResults songs={songsList} onClickHandle={handleClickAddSong}/>
        </div>
        <div className={styles.playlistContainer}>
           <Playlist songs={songsPlaylist}/>
        </div>
      </div>
    </div>
  );
}


export default App;
