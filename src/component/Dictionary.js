import React, { useState, useEffect } from 'react';

const Dictionary = () => {
    const [searchWord, setSearchWord] = useState('');
    const [data, setSearchResults] = useState('');

    useEffect(() => {
        fetchSearchResults();
    }, []);

    const handleSearchWordChange = (event) => {
        setSearchWord(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSearchResults();
    }

    const fetchSearchResults = async () => {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`, {
            method: "GET",

        });

        let data = await response.json();
        console.log(data[0]);
        setSearchResults(data[0]);
    }

    return (
        <div>
            <h1>Dictionary</h1>
            <form>

                <label>
                    Search for a word:
                    <input type="text" value={searchWord} onChange={handleSearchWordChange} />
                </label>
                <br />
                <button onClick={handleSubmit}>Get Results!</button>
            </form>
            <ul>


                {data && (
                    <div className="showResults">
                        <h2>
                            {data.word}{" "}
                            {/* <button
			onClick={() => {
				playAudio();
			}}
			>
			<FcSpeaker size="30px" />
			</button> */}
                        </h2>
                        <h4>Parts of speech:</h4>


                        <p>{data.meanings[0].partOfSpeech}</p>


                        <h4>Definition:</h4>


                        <p>{data.meanings[0].definitions[0].definition}</p>
                    </div>
                )}
            </ul>
        </div>
    );
}

export default Dictionary;