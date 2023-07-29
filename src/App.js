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
    };

    return (
        <div className="App">
            <h1>Gallows Game</h1>
            <div className="img-box"></div>
            <WordByLetter word={word} letter={word} />
            <button onClick={setWordHandler}>Get new word</button>
            <button>Test click</button>
            <Alphabet />
        </div>
    );
}

export default App;
