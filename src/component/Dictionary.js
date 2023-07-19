import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";

const Dictionary = () => {
    const [searchWord, setSearchWord] = useState('');
    const [data, setSearchResults] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        fetchSearchResults();
    }, []);

    const handleSearchWordChange = (event) => {
        setSearchWord(event.target.value);
    }

    const fetchSearchResults = () => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
          .then(response => response.json())
          .then(data => {
            if (!data.length) {
              setError(data.title);
              setSearchResults(null);
            //   console.log(data.title)
              console.log(data)
            } else {
              setError('');
              console.log(data[0]);
              setSearchResults(data[0]);
            }
          })
      };




    function playAudio() {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }

    return (
        <div className="App">
           <div className='searchBox'>
           <div className='container'>
            <img className='dictimg' src='/assets/book.jpeg'
             alt='N-DICTIONARY' > 
            </img> 
            </div>
                  <br/>
                    <input className='searchtxt' type="text" placeholder='Search..' value={searchWord} onChange={handleSearchWordChange} />
                <button onClick={fetchSearchResults}> <FaSearch size="20px" /> </button>
                </div>
            <ul>
                {error && ( 
                    <div className="showError">
                    <br/>
                <h4>{error}</h4>
                </div>
                )} 
                {data && (
                    <div className="showResults">
                        <h2>
                            {data.word}{" "}
                            <button
                                onClick={() => {
                                    playAudio();
                                }}>
                                <FcSpeaker size="30px" />
                            </button>
                        </h2>
                        <h4>Parts of speech:</h4>
                        <p>{data.meanings[0].partOfSpeech}</p>
                        <h4>Definition:</h4>
                        <p>{data.meanings[0].definitions[0].definition}</p>
                    </div>
                )}
            </ul>
            <br/> <br/> 
        
        </div>
    );
}

export default Dictionary;