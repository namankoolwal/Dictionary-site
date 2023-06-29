import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import Navbar from './Navbar';

const Dictionary = () => {
    const [searchWord, setSearchWord] = useState('');
    const [data, setSearchResults] = useState('');

    useEffect(() => {
        fetchSearchResults();
    }, []);

    const handleSearchWordChange = (event) => {
        setSearchWord(event.target.value);
    }

    const fetchSearchResults = async () => {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`, {
            method: "GET",
        });

        let data = await response.json();
        console.log(data[0]);
        setSearchResults(data[0]);
    }

    function playAudio() {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }

    return (
        <div className="App">
        {/* <Navbar/> */}
           {/* <h1>Free Dictionary</h1> */}
           <div className='searchBox'>
           <div className='container'>
            <img src='https://th.bing.com/th/id/R.1d7cb6862cf0470ea13adfdf4ef5aba4?rik=T4VmwpMmQGEoOA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f0%2f5%2f165863.jpg&ehk=PmEgFR2HtNK%2f7aKmqMKzSTuicLAD%2f1HJFT0bPojnxzU%3d&risl=&pid=ImgRaw&r=0'
             height={"400px"} width={"600px"} alt='N-DICTIONARY' > 
            </img> 
            </div>
                  <br/>
                  {/* <input type="text" class="form-control searchtxt" id="exampleForm" placeholder="John Smith" value={searchWord} onChange={handleSearchWordChange}/> */}
                    <input className='searchtxt' type="text" placeholder='Search..' value={searchWord} onChange={handleSearchWordChange} />
                <button onClick={fetchSearchResults}> <FaSearch size="20px" /> </button>
                </div>
            <ul>

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