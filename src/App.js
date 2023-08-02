import { useState, useEffect } from "react";
import "./App.css";
import words from "./data/words";
import Alphabet from "./components/Alphabet";
import WordByLetter from "./components/WordByLetter";
import ImgBox from "./components/ImgBox";

function App() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const id = getRandomInt(words.length);
    const newWord = words[id];

    const [word, setWord] = useState(newWord);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [errorCounter, setErrorCounter] = useState(0);

    const setWordHandler = () => {
        setWord(words[getRandomInt(words.length)]);
        setCorrectLetters([]);
        setErrorCounter(0);
    };

    console.log(word);

    const searchLetterHandler = (letter) => {
        if (word.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                setCorrectLetters((correctLetters) => [
                    ...correctLetters,
                    letter,
                ]);
            }
        } else {
            setErrorCounter(errorCounter + 1);
        }
    };

    useEffect(() => {
        if (errorCounter === 10) {
            alert(`You lose. Word is "${word}"`);
            setWordHandler();
        }
    });

    return (
        <div className="App">
            <h1>Hangman Game</h1>
            <ImgBox errorCounter={errorCounter} />
            <WordByLetter word={word} correctLetters={correctLetters} />
            <button onClick={setWordHandler}>Get new word</button>
            <Alphabet searchLetter={searchLetterHandler} />
        </div>
    );
}

export default App;
