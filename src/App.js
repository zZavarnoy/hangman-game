import { useState } from "react";
import "./App.css";
import words from "./data/words";
import Alphabet from "./components/Alphabet";
import WordByLetter from "./components/WordByLetter";

function App() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const id = getRandomInt(words.length);
    const newWord = words[id].split("");

    const [word, setWord] = useState(newWord);
    const setWordHandler = () => {
        setWord(words[getRandomInt(words.length)].split(""));
        setCorrectLetters([]);
    };
    console.log(word);

    const [correctLetters, setCorrectLetters] = useState([]);

    const searchLetterHandler = (letter) => {
        if (word.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                setCorrectLetters((correctLetters) => [
                    ...correctLetters,
                    letter,
                ]);
            }
        }
    };

    return (
        <div className="App">
            <h1>Hangman Game</h1>
            <div className="img-box"></div>
            <WordByLetter word={word} correctLetters={correctLetters} />
            <button onClick={setWordHandler}>Get new word</button>
            <Alphabet searchLetter={searchLetterHandler} />
        </div>
    );
}

export default App;
