import React from 'react';

// id il vom da dintro functie
// primeste 2 props de la parent SearchResults, song obiect, id de la functie
// song e un prop obiect 
function Songs ({song, id}){
    return(
        <li>
            <p></p>
            <audio controls  ></audio>
            <button>+</button>
        </li>
    );
}

export default Songs;
